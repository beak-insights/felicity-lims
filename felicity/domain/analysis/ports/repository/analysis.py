from abc import ABC, abstractmethod

from domain.shared.ports.paginator.cursor import PageCursor
from domain.shared.ports.repository import IBaseRepository


class CodingStandardRepository(IBaseRepository, ABC):
    ...


class SampleTypeRepository(IBaseRepository, ABC):
    ...


class SampleTypeCodingRepository(IBaseRepository, ABC):
    ...


class AnalysisCategoryRepository(IBaseRepository, ABC):
    ...


class ProfileRepository(IBaseRepository, ABC):
    ...


class ProfileCodingRepository(IBaseRepository, ABC):
    ...


class AnalysisRepository(IBaseRepository, ABC):
    ...


class AnalysisCodingRepository(IBaseRepository, ABC):
    ...


class AnalysisInterimRepository(IBaseRepository, ABC):
    ...


class AnalysisCorrectionFactorRepository(IBaseRepository, ABC):
    ...


class AnalysisDetectionLimitRepository(IBaseRepository, ABC):
    ...


class AnalysisUncertaintyRepository(IBaseRepository, ABC):
    ...


class AnalysisSpecificationRepository(IBaseRepository, ABC):
    ...


class ResultOptionRepository(IBaseRepository, ABC):
    ...


class AnalysisRequestRepository(IBaseRepository, ABC):
    ...


class RejectionReasonRepository(IBaseRepository, ABC):
    ...


class SampleRepository(IBaseRepository, ABC):
    ...
