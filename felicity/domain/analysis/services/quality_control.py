from domain.shared.services import BaseService
from domain.analysis.ports.service.quality_control import (
    IQCSetService,
    IQCLevelService,
    IQCTemplateService,
)
from domain.analysis.schemas import (
    QCSet,
    # QCReference,
    QCLevel,
    QCTemplate,
)


# class QCReferenceService(BaseService[QCReference], IQCReferenceService):
#     ...


class QCSetService(BaseService[QCSet], IQCSetService):
    ...


class QCLevelService(BaseService[QCLevel], IQCLevelService):
    ...


class QCTemplateService(BaseService[QCTemplate], IQCTemplateService):
    ...
