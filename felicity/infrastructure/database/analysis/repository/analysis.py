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


class CodingStandardRepository(
    BaseRepository[CodingStandard], ICodingStandardRepository
):
    def __init__(self) -> None:
        self.model = CodingStandard
        super().__init__()


class SampleTypeRepository(BaseRepository[SampleType], ISampleTypeRepository):
    def __init__(self) -> None:
        self.model = SampleType
        super().__init__()


class SampleTypeCodingRepository(
    BaseRepository[SampleTypeCoding], ISampleTypeCodingRepository
):
    def __init__(self) -> None:
        self.model = SampleTypeCoding
        super().__init__()


class ProfileRepository(BaseRepository[Profile], IProfileRepository):
    def __init__(self) -> None:
        self.model = Profile
        super().__init__()


class AnalysisCategoryRepository(
    BaseRepository[AnalysisCategory], IAnalysisCategoryRepository
):
    def __init__(self) -> None:
        self.model = AnalysisCategory
        super().__init__()


class ProfileCodingRepository(BaseRepository[ProfileCoding], IProfileCodingRepository):
    def __init__(self) -> None:
        self.model = ProfileCoding
        super().__init__()


class AnalysisRepository(BaseRepository[Analysis], IAnalysisRepository):
    def __init__(self) -> None:
        self.model = Analysis
        super().__init__()


class AnalysisCodingRepository(
    BaseRepository[AnalysisCoding], IAnalysisCodingRepository
):
    def __init__(self) -> None:
        self.model = AnalysisCoding
        super().__init__()


class AnalysisInterimRepository(
    BaseRepository[AnalysisInterim], IAnalysisInterimRepository
):
    def __init__(self) -> None:
        self.model = AnalysisInterim
        super().__init__()


class AnalysisCorrectionFactorRepository(
    BaseRepository[AnalysisCorrectionFactor], IAnalysisCorrectionFactorRepository
):
    def __init__(self) -> None:
        self.model = AnalysisCorrectionFactor
        super().__init__()


class AnalysisDetectionLimitRepository(
    BaseRepository[AnalysisDetectionLimit], IAnalysisDetectionLimitRepository
):
    def __init__(self) -> None:
        self.model = AnalysisDetectionLimit
        super().__init__()


class AnalysisUncertaintyRepository(
    BaseRepository[AnalysisUncertainty], IAnalysisUncertaintyRepository
):
    def __init__(self) -> None:
        self.model = AnalysisUncertainty
        super().__init__()


class AnalysisSpecificationRepository(
    BaseRepository[AnalysisSpecification], IAnalysisSpecificationRepository
):
    def __init__(self) -> None:
        self.model = AnalysisSpecification
        super().__init__()


class ResultOptionRepository(BaseRepository[ResultOption], IResultOptionRepository):
    def __init__(self) -> None:
        self.model = ResultOption
        super().__init__()


class AnalysisRequestRepository(
    BaseRepository[AnalysisRequest], IAnalysisRequestRepository
):
    def __init__(self) -> None:
        self.model = AnalysisRequest
        super().__init__()


class RejectionReasonRepository(
    BaseRepository[RejectionReason], IRejectionReasonRepository
):
    def __init__(self) -> None:
        self.model = RejectionReason
        super().__init__()


class SampleRepository(BaseRepository[Sample], ISampleRepository):
    def __init__(self) -> None:
        self.model = Sample
        super().__init__()
