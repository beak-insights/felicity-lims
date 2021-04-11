import logging

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.analysis.models import analysis as analysis_models
from felicity.apps.core import BaseMPTT
from felicity.apps.setup.models.setup import Instrument, Method
from felicity.apps.worksheet import models as ws_models
from felicity.apps import BaseAuditDBModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class AnalysisResult(BaseAuditDBModel, BaseMPTT):
    """Test/Analysis Result
    Number of analysis results per sample will be directly proportional to
    the number of linked sample_analyses at minimum :)
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), nullable=False)
    sample = relationship(analysis_models.Sample, backref="analysis_results")
    worksheet_uid = Column(Integer, ForeignKey('worksheet.uid'), nullable=True)
    worksheet = relationship(ws_models.WorkSheet, backref="analysis_results")
    assigned = Column(Boolean(), default=False)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), nullable=False)
    analysis = relationship(analysis_models.Analysis, backref="analysis_results")
    instrument_uid = Column(Integer, ForeignKey('instrument.uid'), nullable=True)
    instrument = relationship(Instrument)
    method_uid = Column(Integer, ForeignKey('method.uid'), nullable=True)
    method = relationship(Method)
    result = Column(String, nullable=True)
    analyst_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    submitted_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    date_submitted = Column(DateTime, nullable=True)
    verified_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    date_verified = Column(DateTime, nullable=True)
    invalidated_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    date_invalidated = Column(DateTime, nullable=True)
    status = Column(String, nullable=False)

    def assign(self, ws_uid):
        self.worksheet_uid = ws_uid
        self.assigned = True
        self.save()

    def un_assign(self, ws_number):
        self.worksheet_uid = None
        self.assigned = False
        self.save()

    @classmethod
    def create(cls, obj_in: schemas.AnalysisResultCreate) -> schemas.AnalysisResult:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisResultUpdate) -> schemas.AnalysisResult:
        data = self._import(obj_in)
        return super().update(**data)
