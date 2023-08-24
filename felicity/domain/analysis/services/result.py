
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError

from domain.analysis.schemas import AnalysisResult

T = TypeVar("T")


class AnalysisResultService(BaseService[AnalysisResult], IAnalysisResultService):
    async def verifications(self):
        if self.analysis.required_verifications:
            required = self.analysis.required_verifications
        else:
            required = 1
        current = len(self.verified_by)
        return required, current
    
    # async def last_verificator(self):
    #     _, verifications = await self.verifications()
    #     if verifications == 0:
    #         return None
    #     return self.verified_by[:-1]

    async def retest_result(self, retested_by, next_action="verify"):
        retest = None
        if self.status in [conf.states.result.RESULTED]:
            a_result_in = {
                "sample_uid": self.sample.uid,
                "analysis_uid": self.analysis_uid,
                "status": conf.states.result.PENDING,
                "instrument_uid": self.instrument_uid,
                "method_uid": self.method_uid,
                "parent_id": self.uid,
                "retest": True,
            }
            a_result_schema = schemas.AnalysisResultCreate(**a_result_in)
            retest = await AnalysisResult.create(a_result_schema)

            await self.hide_report()
            if next_action == "verify":
                _, final = await self.verify(verifier=retested_by)
            elif next_action == "retract":
                final = await self.retract(retracted_by=retested_by)
            else:
                final = self

            # transition sample back to received state
            await self.sample.un_submit()
            return retest, final
        return retest, self

    async def assign(self, ws_uid, position, instrument_uid):
        self.worksheet_uid = ws_uid
        self.assigned = True
        self.worksheet_position = position
        self.instrument_uid = instrument_uid if instrument_uid else None
        return await self.save()

    async def un_assign(self):
        self.worksheet_uid = None
        self.assigned = False
        self.worksheet_position = None
        self.instrument_uid = None
        return await self.save()

    async def verify(self, verifier):
        is_verified = False
        required, current = await self.verifications()
        await AnalysisResult.table_insert(
            table=result_verification,
            mappings={"result_uid": self.uid, "user_uid": verifier.uid},
        )
        # self.verified_by.append(verifier)
        self.updated_by_uid = verifier.uid  # noqa
        if current < required and current + 1 == required:
            self.status = conf.states.result.APPROVED
            self.date_verified = datetime.now()
            is_verified = True
        final = await self.save()
        if final.status == conf.states.result.APPROVED:
            await streamer.stream(final, verifier, "approved", "result")
        return is_verified, final

    async def retract(self, retracted_by):
        await AnalysisResult.table_insert(
            table=result_verification,
            mappings={"result_uid": self.uid, "user_uid": retracted_by.uid},
        )
        self.status = conf.states.result.RETRACTED
        self.date_verified = datetime.now()
        self.updated_by_uid = retracted_by.uid  # noqa
        final = await self.save()
        if final.status == conf.states.result.RETRACTED:
            await streamer.stream(final, retracted_by, "retracted", "result")
        return final

    async def cancel(self, cancelled_by):
        if self.status in [conf.states.result.PENDING]:
            self.status = conf.states.result.CANCELLED
            self.cancelled_by_uid = cancelled_by.uid
            self.date_cancelled = datetime.now()
            self.updated_by_uid = cancelled_by.uid  # noqa
        final = await self.save()
        if final.status == conf.states.result.CANCELLED:
            await streamer.stream(final, cancelled_by, "cancelled", "result")
        return final

    async def re_instate(self, sample, re_instated_by):
        if sample.status not in [
            conf.states.sample.RECEIVED,
            conf.states.sample.EXPECTED,
        ]:
            raise Exception(
                "You can only reinstate analytes of due and received samples"
            )

        if self.status in [conf.states.result.CANCELLED]:
            self.status = conf.states.result.PENDING
            self.cancelled_by_uid = None
            self.date_cancelled = None
            self.updated_by_uid = re_instated_by.uid  # noqa
        final = await self.save()
        if final.status == conf.states.result.PENDING:
            await streamer.stream(final, re_instated_by, "reinstated", "result")
        return final

    async def change_status(self, status):
        self.status = status
        return await self.save()

    async def hide_report(self):
        self.reportable = False
        return await self.save()

    @classmethod
    async def filter_for_worksheet(
        cls,
        analyses_status: str,
        analysis_uid: str,
        sample_type_uid: list[str],
        limit: int,
    ) -> List[schemas.AnalysisResult]:

        filters = {
            "status__exact": analyses_status,
            "assigned__exact": False,
            "analysis_uid__exact": analysis_uid,
            "sample___sample_type_uid__exact": sample_type_uid,
            "sample___status": conf.states.sample.RECEIVED,
        }
        sort_attrs = ["-sample___priority", "sample___sample_id", "-created_at"]

        analytes_stmt = cls.smart_query(filters=filters, sort_attrs=sort_attrs)
        stmt = analytes_stmt.limit(limit)

        # available: int = await cls.count_where(filters=filters)

        async with async_session_factory() as session:
            analyses_results = (await session.execute(stmt)).scalars().all()

        return analyses_results
    

class ResultMutationService(BaseService[T], IResultMutationService):
    ...
