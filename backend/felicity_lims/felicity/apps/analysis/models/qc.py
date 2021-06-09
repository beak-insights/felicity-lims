import logging

from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.setup.models.setup import Department
from felicity.apps import DBModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class QCSet(DBModel):
    """A Set/Group of QC Samples that are run together.
     - e.g a Viral Load Rack the QCLevels are a set i.e Negative Control, Low Pos Control, High Pos Control
    """
    name = Column(String, nullable=False)
    note = Column(String, nullable=True)

    @classmethod
    def create(cls, obj_in:schemas.QCSetCreate) -> schemas.QCSet:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.QCSetUpdate) -> schemas.QCSet:
        data = self._import(obj_in)
        return super().update(**data)


class QCLevel(DBModel):
    """Sample Level /category
    - None - normal sample
    - Negative Control
    - PositiveControl
    - Low Positive Control
    - High Positive Control
    """
    level = Column(String, nullable=False)

    @classmethod
    def create(cls, obj_in:schemas.QCLevelCreate) -> schemas.QCLevel:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.QCLevelUpdate) -> schemas.QCLevel:
        data = self._import(obj_in)
        return super().update(**data)


class QCTDLink(DBModel):
    """Many to Many Link between QCTemplate and Department
    """
    department_uid = Column(Integer, ForeignKey('department.uid'), primary_key=True)
    qc_template_uid = Column(Integer, ForeignKey('qctemplate.uid'), primary_key=True)


class QCTQCLLink(DBModel):
    """Many to Many Link between QCTemplate and  QCLevel
    """
    qc_level_uid = Column(Integer, ForeignKey('qclevel.uid'), primary_key=True)
    qc_template_uid = Column(Integer, ForeignKey('qctemplate.uid'), primary_key=True)


class QCTemplate(DBModel):
    """QC Level Grouping e.g:
    Roche Viral Load CQ:
        - Neg Control
        - Low Pos Control
        - High Pos Control

    Malaria Slide QC:
        - Negative Control
        - Positive COntrol
    """
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    departments = relationship(Department, secondary="qctdlink", backref="qc_templates")
    qc_levels = relationship(QCLevel, secondary="qctqcllink",  backref="qc_templates")

    @classmethod
    def create(cls, obj_in: schemas.QCTemplateCreate) -> schemas.QCTemplate:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.QCTemplateUpdate) -> schemas.QCTemplate:
        data = self._import(obj_in)
        return super().update(**data)
