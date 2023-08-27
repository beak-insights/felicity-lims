from abc import ABC, abstractmethod

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
from domain.shared.ports.service import IBaseService


class ICodingStandardService(IBaseService[CodingStandard], ABC):
    ...


class ISampleTypeService(IBaseService[SampleType], ABC):
    ...


class ISampleTypeCodingService(IBaseService[SampleTypeCoding], ABC):
    ...


class IAnalysisCategoryService(IBaseService[AnalysisCategory], ABC):
    ...


class IProfileService(IBaseService[Profile], ABC):
    @abstractmethod
    async def update_tat(self):
        ...


class IProfileCodingService(IBaseService[ProfileCoding], ABC):
    ...


class IAnalysisService(IBaseService[Analysis], ABC):
    ...


class IAnalysisCodingService(IBaseService[AnalysisCoding], ABC):
    ...


class IAnalysisInterimService(IBaseService[AnalysisInterim], ABC):
    ...


class IAnalysisCorrectionFactorService(IBaseService[AnalysisCorrectionFactor], ABC):
    ...


class IAnalysisDetectionLimitService(IBaseService[AnalysisDetectionLimit], ABC):
    ...


class IAnalysisUncertaintyService(IBaseService[AnalysisUncertainty], ABC):
    ...


class IAnalysisSpecificationService(IBaseService[AnalysisSpecification], ABC):
    ...


class IResultOptionService(IBaseService[ResultOption], ABC):
    ...


class IAnalysisRequestService(IBaseService[AnalysisRequest], ABC):
    ...


class IRejectionReasonService(IBaseService[RejectionReason], ABC):
    ...


class ISampleService(IBaseService[Sample], ABC):
    @abstractmethod
    def copy_include_keys(self):
        ...

    @abstractmethod
    async def update_due_date(self, reset: bool = False):
        ...

    @abstractmethod
    async def change_status(self, status, updated_by_uid=None):
        ...

    @abstractmethod
    async def extend_due_date(self, ext_minutes: int):
        ...

    @abstractmethod
    def copy_sample_id_unique(self):
        ...

    @abstractmethod
    async def get_analysis_results(self) -> list:
        ...

    @abstractmethod
    async def get_referred_analyses(self):
        ...

    @abstractmethod
    async def has_fully_referred_analyses(self):
        ...

    @abstractmethod
    async def has_no_referred_analyses(self):
        ...

    @abstractmethod
    async def has_partly_referred_analyses(self):
        ...

    @abstractmethod
    async def receive(self, received_by):
        ...

    @abstractmethod
    async def cancel(self, cancelled_by):
        ...

    @abstractmethod
    async def re_instate(self, re_instated_by):
        ...

    @abstractmethod
    async def submit(self, submitted_by):
        ...

    @abstractmethod
    async def un_submit(self):
        ...

    @abstractmethod
    async def assign(self, sample, ws_uid: str, position: int, instrument_uid: str):
        ...

    @abstractmethod
    async def un_assign(self):
        ...

    @abstractmethod
    async def is_verifiable(self):
        ...

    @abstractmethod
    async def verify(self, verified_by):
        ...

    @abstractmethod
    async def publish(self, published_by):
        ...

    @abstractmethod
    async def print(self, printed_by):
        ...

    @abstractmethod
    async def invalidate(self, invalidated_by) -> tuple[Sample, Sample]:
        ...

    @abstractmethod
    async def reject(self, rejected_by):
        ...

    @abstractmethod
    async def store(self, stored_by):
        ...

    @abstractmethod
    async def recover(self):
        ...

    @abstractmethod
    async def duplicate_unique(self, duplicator) -> Sample:
        ...

    @abstractmethod
    async def clone_afresh(self, cloner) -> Sample:
        ...
