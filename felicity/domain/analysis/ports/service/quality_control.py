from abc import ABC, abstractmethod

from domain.shared.ports.service import IBaseService
from domain.analysis.schemas import (
    QCSet,
    # QCReference,
    QCLevel,
    QCTemplate,
)


class IQCSetService(IBaseService[QCSet], ABC):
    ...


# class IQCReferenceService(IBaseService[QCReference], ABC): ...


class IQCLevelService(IBaseService[QCLevel], ABC):
    ...


class IQCTemplateService(IBaseService[QCTemplate], ABC):
    ...
