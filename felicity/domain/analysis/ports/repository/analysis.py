from abc import ABC, abstractmethod

from domain.shared.ports.paginator.cursor import PageCursor
from domain.shared.ports.repository import IBaseRepository


class ICodingStandardRepository(IBaseRepository, ABC):
    ...


class ISampleTypeRepository(IBaseRepository, ABC):
    ...


class ISampleTypeCodingRepository(IBaseRepository, ABC):
    ...


class IAnalysisCategoryRepository(IBaseRepository, ABC):
    ...


class IProfileRepository(IBaseRepository, ABC):
    ...


class IProfileCodingRepository(IBaseRepository, ABC):
    ...


class IAnalysisRepository(IBaseRepository, ABC):
    ...


class IAnalysisCodingRepository(IBaseRepository, ABC):
    ...


class IAnalysisInterimRepository(IBaseRepository, ABC):
    ...


class IAnalysisCorrectionFactorRepository(IBaseRepository, ABC):
    ...


class IAnalysisDetectionLimitRepository(IBaseRepository, ABC):
    ...


class IAnalysisUncertaintyRepository(IBaseRepository, ABC):
    ...


class IAnalysisSpecificationRepository(IBaseRepository, ABC):
    ...


class IResultOptionRepository(IBaseRepository, ABC):
    ...


class IAnalysisRequestRepository(IBaseRepository, ABC):
    ...


class IRejectionReasonRepository(IBaseRepository, ABC):
    ...


class ISampleRepository(IBaseRepository, ABC):
    ...
