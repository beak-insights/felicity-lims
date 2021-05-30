import logging

from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.setup.models.setup import Department
from felicity.apps.analysis.models.analysis import Analysis
from felicity.apps import DBModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class QCTALink(DBModel):
    """Many to Many Link between QCTemplate and Analysis
    """
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)
    qc_template_uid = Column(Integer, ForeignKey('qctemplate.uid'), primary_key=True)


class QCTDLink(DBModel):
    """Many to Many Link between QCTemplate and Department
    """
    department_uid = Column(Integer, ForeignKey('department.uid'), primary_key=True)
    qc_template_uid = Column(Integer, ForeignKey('qctemplate.uid'), primary_key=True)


class QCTemplate(DBModel):
    """QC Grouping e.g:
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
    analyses = relationship(Analysis, secondary="qctalink",  backref="qc_templates")

    @classmethod
    def create(cls, obj_in: schemas.QCTemplateCreate) -> schemas.QCTemplate:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.QCTemplateUpdate) -> schemas.QCTemplate:
        data = self._import(obj_in)
        return super().update(**data)
