from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.analysis.ports.service.analysis import (
    ICodingStandardService,
    ISampleTypeService,
    ISampleTypeCodingService,
    IAnalysisCategoryService,
    IProfileService,
    IProfileCodingService,
    IAnalysisService,
    IAnalysisCodingService,
    IAnalysisInterimService,
    IAnalysisCorrectionFactorService,
    IAnalysisDetectionLimitService,
    IAnalysisUncertaintyService,
    IAnalysisSpecificationService,
    IResultOptionService,
    IAnalysisRequestService,
    IRejectionReasonService,
    ISampleService,
)
from domain.analysis.schemas import (
    CodingStandard,
    SampleType,
    SampleTypeCoding,
    AnalysisCategory,
    Profile,
    ProfileCoding,
    Analysis,
    AnalysisCoding,
    AnalysisInterim,
    AnalysisCorrectionFactor,
    AnalysisDetectionLimit,
    AnalysisUncertainty,
    AnalysisSpecification,
    ResultOption,
    AnalysisRequest,
    RejectionReason,
    Sample,
)


class CodingStandardService(BaseService[CodingStandard], ICodingStandardService):
    ...


class SampleTypeService(BaseService[SampleType], ISampleTypeService):
    ...


class SampleTypeCodingService(BaseService[SampleTypeCoding], ISampleTypeCodingService):
    ...


class AnalysisCategoryService(BaseService[AnalysisCategory], IAnalysisCategoryService):
    ...


class ProfileService(BaseService[Profile], IProfileService):
    async def update_tat(self):
        tats = []
        tat = None
        for anal in self.analyses:
            tats.append(anal.tat_length_minutes)

        if len(tats) > 0:
            tat = sorted(tats, reverse=False)[0]

        if tat:
            self.tat_length_minutes = tat
            return await self.save()
        return self


class ProfileCodingService(BaseService[ProfileCoding], IProfileCodingService):
    ...


class AnalysisService(BaseService[Analysis], IAnalysisService):
    ...


class AnalysisCodingService(BaseService[AnalysisCoding], IAnalysisCodingService):
    ...


class AnalysisInterimService(BaseService[AnalysisInterim], IAnalysisInterimService):
    ...


class AnalysisCorrectionFactorService(
    BaseService[AnalysisCorrectionFactor], IAnalysisCorrectionFactorService
):
    ...


class AnalysisDetectionLimitService(
    BaseService[AnalysisDetectionLimit], IAnalysisDetectionLimitService
):
    ...


class AnalysisUncertaintyService(
    BaseService[AnalysisUncertainty], IAnalysisUncertaintyService
):
    ...


class AnalysisSpecificationService(
    BaseService[AnalysisSpecification], IAnalysisSpecificationService
):
    ...


class ResultOptionService(BaseService[ResultOption], IResultOptionService):
    ...


class AnalysisRequestService(BaseService[AnalysisRequest], IAnalysisRequestService):
    ...


class RejectionReasonService(BaseService[RejectionReason], IRejectionReasonService):
    ...


class SampleService(BaseService[Sample], ISampleService):
    def copy_include_keys(self):
        """Keys to include when duplicating Sample"""
        return [
            "analysis_request_uid",
            "sample_type_uid",
            "status",
            "sample_id",
            "profiles",
            "analyses",
            "priority",
            "received_by_uid",
            "date_received",
            "internal_use",
        ]

    async def update_due_date(self, reset: bool = False):
        tats: List[Union[int, Any]] = []
        length: int = 0
        for anal in self.analyses:
            tats.append(anal.tat_length_minutes)

        for prof in self.profiles:
            tats.append(prof.tat_length_minutes)

        if len(tats) > 0:
            length = sorted(tats, reverse=False)[0]

        if reset:
            start = datetime.now()
        else:
            start = self.created_at
            if not start:
                start = datetime.now()

        if length:
            self.due_date = start + timedelta(minutes=length)
            return await self.save()
        return self

    async def change_status(self, status, updated_by_uid=None):
        self.status = status
        if updated_by_uid:
            self.updated_by_uid = updated_by_uid  # noqa
        await self.save()

    async def extend_due_date(self, ext_minutes: int):
        self.due_date += timedelta(minutes=ext_minutes)
        return await self.save()

    def copy_sample_id_unique(self):
        split = self.sample_id.split("_R")
        prefix = split[0]
        stub = None
        try:
            stub = split[1]
        except IndexError:
            stub = None
        finally:
            if not stub:
                return prefix + "_R01"
            else:
                count = int(stub)
                return f"{prefix}_R{sequencer(count + 1, 2)}"

    async def get_analysis_results(self):
        from apps.analysis.models.results import AnalysisResult

        return await AnalysisResult.get_all(sample_uid=self.uid)

    async def get_referred_analyses(self):
        analysis = await self.get_analysis_results()
        return analysis, list(
            filter(lambda a: a.status == states.Result.REFERRED, analysis)
        )

    async def has_fully_referred_analyses(self):
        analysis, referred = await self.get_referred_analyses()
        return len(analysis) == len(referred)

    async def has_no_referred_analyses(self):
        analysis, referred = await self.get_referred_analyses()
        return len(referred) == 0

    async def has_partly_referred_analyses(self):
        analysis, referred = await self.get_referred_analyses()
        return len(analysis) != len(referred) and len(referred) > 0

    async def receive(self, received_by):
        if self.status in [states.sample.EXPECTED]:
            self.status = states.sample.RECEIVED
            self.received_by_uid = received_by.uid
            self.date_received = datetime.now()
            self.updated_by_uid = received_by.uid  # noqa
            return await self.save()
        return None

    async def cancel(self, cancelled_by):
        analysis_results = await self.get_analysis_results()
        if self.status in [states.sample.RECEIVED, states.sample.EXPECTED]:
            for result in analysis_results:
                await result.cancel(cancelled_by=cancelled_by)
            self.status = states.sample.CANCELLED
            self.cancelled_by_uid = cancelled_by.uid
            self.date_cancelled = datetime.now()
            self.updated_by_uid = cancelled_by.uid  # noqa
            return await self.save()
        return None

    async def re_instate(self, re_instated_by):
        analysis_results = await self.get_analysis_results()
        if self.status in [states.sample.CANCELLED]:
            # A better way is to go to audit log and retrieve previous state
            # rather than transitioning all to RECEIVED
            self.status = states.sample.RECEIVED
            self.cancelled_by_uid = None
            self.date_cancelled = None
            self.updated_by_uid = re_instated_by.uid  # noqa
            sample = await self.save()
            for result in analysis_results:
                await result.re_instate(sample, re_instated_by=re_instated_by)
            return sample
        return self

    async def submit(self, submitted_by):
        statuses = [
            states.result.RESULTED,
            states.result.RETRACTED,
            states.result.APPROVED,
            states.result.CANCELLED,
        ]
        analysis_results = await self.get_analysis_results()
        match = all([(sibling.status in statuses) for sibling in analysis_results])
        if match and self.status in [states.sample.RECEIVED]:
            self.status = states.sample.AWAITING
            self.submitted_by_uid = submitted_by.uid
            self.date_submitted = datetime.now()
            self.updated_by_uid = submitted_by.uid  # noqa
            saved = await self.save()
            await streamer.stream(saved, submitted_by, "submitted", "sample")
            return saved
        return self

    async def un_submit(self):
        if self.status == states.sample.AWAITING:
            self.status = states.sample.RECEIVED
            self.submitted_by_uid = None
            self.date_submitted = None
            self.updated_by_uid = None  # noqa
            return await self.save()
        return self

    async def assign(self):
        self.assigned = True
        return await self.save()

    async def un_assign(self):
        self.assigned = False
        return await self.save()

    async def is_verifiable(self):
        statuses = [
            states.result.APPROVED,
            states.result.RETRACTED,
            states.result.CANCELLED,
        ]
        analysis_results = await self.get_analysis_results()
        match = all([(sibling.status in statuses) for sibling in analysis_results])
        if match and self.status in [states.sample.AWAITING, states.sample.PAIRED]:
            return True

        # if there are no results in referred state but some are in pending state. transition awaiting to pending state
        analysis, referred = await self.get_referred_analyses()
        if not referred and not list(
            filter(lambda an: an.status in [states.result.PENDING], analysis)
        ):
            self.change_status(states.sample.RECEIVED)

        return False

    async def verify(self, verified_by):
        is_verifiable = await self.is_verifiable()
        if is_verifiable:
            self.status = states.sample.APPROVED
            self.verified_by_uid = verified_by.uid
            self.date_verified = datetime.now()
            self.updated_by_uid = verified_by.uid  # noqa
            saved = await self.save()
            await streamer.stream(saved, verified_by, "approved", "sample")
            return True, saved
        return False, self

    async def publish(self, published_by):
        if self.status in [states.sample.APPROVED, states.sample.PUBLISHING]:
            self.status = states.sample.PUBLISHED
            self.published_by_uid = published_by.uid
            self.date_published = datetime.now()
            self.updated_by_uid = published_by.uid  # noqa
            return await self.save()
        return self

    async def print(self, printed_by):
        if self.status == states.sample.PUBLISHED:
            self.printed = True
            self.printed_by_uid = printed_by.uid
            self.date_printed = datetime.now()
            self.updated_by_uid = printed_by.uid  # noqa
            return await self.save()
        return self

    async def invalidate(self, invalidated_by) -> tuple[Sample, Sample]:
        statuses = [states.sample.APPROVED, states.sample.PUBLISHED]
        copy = None
        if self.status in statuses:
            copy = await self.duplicate_unique(invalidated_by)
            self.status = states.sample.INVALIDATED
            self.invalidated_by_uid = invalidated_by.uid
            invalidated = await self.save()
            await streamer.stream(invalidated, invalidated_by, "invalidated", "sample")
            return copy, invalidated
        return copy, self

    async def reject(self, rejected_by):
        statuses = [states.sample.RECEIVED, states.sample.EXPECTED]
        if self.status in statuses:
            self.status = states.sample.REJECTED
            self.received_by_uid = rejected_by.uid
            self.updated_by_uid = rejected_by.uid  # noqa
            rejected = await self.save()
            await streamer.stream(rejected, rejected_by, "rejected", "sample")
            return rejected
        return self

    async def store(self, stored_by):
        statuses = [states.sample.RECEIVED]
        if self.status in statuses:
            self.status = states.sample.STORED
            self.stored_by = stored_by.uid
            self.updated_by_uid = stored_by.uid  # noqa
            stored = await self.save()
            await streamer.stream(stored, stored_by, "stored", "sample")
            return stored
        return self

    async def recover(self):
        statuses = [states.sample.STORED]
        if self.status in statuses:
            self.status = states.sample.RECEIVED
            self.storage_container_uid = None
            self.storage_slot = None
            self.storage_slot_index = None
            self.date_retrieved_from_storage = datetime.now()
            recovered = await self.save()
            return recovered
        return self

    @classmethod
    async def create(cls, obj_in: SampleCreate) -> Sample:
        data = cls._import(obj_in)
        sample_type = await SampleType.find(data["sample_type_uid"])
        # data["sample_id"] = (await IdSequence.get_next_number(sample_type.abbr))[1]
        data["sample_id"] = (
            await IdSequence.get_next_number(prefix="S", generic=True)
        )[1]
        return await super().create(**data)

    async def duplicate_unique(self, duplicator) -> Sample:
        data = self.to_dict(nested=False)
        data["sample_id"] = self.copy_sample_id_unique()
        for key, _ in list(data.items()):
            if key not in self.copy_include_keys():
                del data[key]
        data["status"] = states.sample.RECEIVED
        data["profiles"] = self.profiles
        data["analyses"] = self.analyses
        data["parent_id"] = self.uid
        data["created_by_uid"] = duplicator.uid
        return await super().create(**data)

    async def clone_afresh(self, cloner) -> Sample:
        data = self.to_dict(nested=False)
        for key, _ in list(data.items()):
            if key not in self.copy_include_keys():
                del data[key]
        data["status"] = states.sample.RECEIVED
        data["profiles"] = self.profiles
        data["analyses"] = self.analyses
        data["parent_id"] = self.uid
        data["created_by_uid"] = cloner.uid
        return await self.create(obj_in=data)
