from domain.analysis.ports.repository.analysis import (
    ICodingStandardRepository,
    ISampleTypeRepository,
    ISampleTypeCodingRepository,
    IAnalysisCategoryRepository,
    IProfileRepository,
    IProfileCodingRepository,
    IAnalysisRepository,
    IAnalysisCodingRepository,
    IAnalysisInterimRepository,
    IAnalysisCorrectionFactorRepository,
    IAnalysisDetectionLimitRepository,
    IAnalysisUncertaintyRepository,
    IAnalysisSpecificationRepository,
    IResultOptionRepository,
    IAnalysisRequestRepository,
    IRejectionReasonRepository,
    ISampleRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository

from infrastructure.database.analysis.entities.analysis import (
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


class CodingStandardRespository(BaseRepository[CodingStandard], ICodingStandardRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = CodingStandard
        super().__init__(db)


class SampleTypeRespository(BaseRepository[SampleType], ISampleTypeRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = SampleType
        super().__init__(db)


class SampleTypeCodingRespository(BaseRepository[SampleTypeCoding], ISampleTypeCodingRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = SampleTypeCoding
        super().__init__(db)


class ProfileRespository(BaseRepository[Profile], IProfileRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Profile
        super().__init__(db)


class AnalysisCategoryRespository(BaseRepository[AnalysisCategory], IAnalysisCategoryRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisCategory
        super().__init__(db)


class ProfileCodingRespository(BaseRepository[ProfileCoding], IProfileCodingRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ProfileCoding
        super().__init__(db)


class AnalysisRespository(BaseRepository[Analysis], IAnalysisRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Analysis
        super().__init__(db)


class AnalysisCodingRespository(BaseRepository[AnalysisCoding], IAnalysisCodingRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisCoding
        super().__init__(db)


class AnalysisInterimRespository(BaseRepository[AnalysisInterim], IAnalysisInterimRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisInterim
        super().__init__(db)


class AnalysisCorrectionFactorRespository(BaseRepository[AnalysisCorrectionFactor], IAnalysisCorrectionFactorRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisCorrectionFactor
        super().__init__(db)


class AnalysisDetectionLimitRespository(BaseRepository[AnalysisDetectionLimit], IAnalysisDetectionLimitRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisDetectionLimit
        super().__init__(db)


class AnalysisUncertaintyRespository(BaseRepository[AnalysisUncertainty], IAnalysisUncertaintyRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisUncertainty
        super().__init__(db)


class AnalysisSpecificationRespository(BaseRepository[AnalysisSpecification], IAnalysisSpecificationRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisSpecification
        super().__init__(db)


class ResultOptionRespository(BaseRepository[ResultOption], IResultOptionRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = ResultOption
        super().__init__(db)


class AnalysisRequestRespository(BaseRepository[AnalysisRequest], IAnalysisRequestRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = AnalysisRequest
        super().__init__(db)


class RejectionReasonRespository(BaseRepository[RejectionReason], IRejectionReasonRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = RejectionReason
        super().__init__(db)


class SampleRespository(BaseRepository[Sample], ISampleRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Sample
        super().__init__(db)
