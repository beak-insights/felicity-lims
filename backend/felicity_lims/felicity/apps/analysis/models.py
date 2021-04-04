from datetime import datetime
import logging

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.analysis.conf import states
from felicity.apps.client import models as ct_models
from felicity.apps.core import BaseMPTT
from felicity.apps.core.utils import sequencer
from felicity.apps.patient import models as pt_models
from felicity.apps.user.models import User
from felicity.apps.setup.models.setup import Instrument, Method
from felicity.apps import BaseAuditDBModel, DBModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class SampleType(BaseAuditDBModel):
    """SampleType"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    active = Column(Boolean(), default=False)
    abbr = Column(String, nullable=False)

    @classmethod
    def create(cls, obj_in: schemas.SampleTypeCreate) -> schemas.SampleType:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.SampleTypeUpdate) -> schemas.SampleType:
        data = self._import(obj_in)
        return super().update(**data)


class ASTLink(DBModel):
    """Many to Many Link between Analysis and SampleType
    """
    sampletype_uid = Column(Integer, ForeignKey('sampletype.uid'), primary_key=True)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)


class Profile(DBModel):
    """Grouped Analysis e.g FBC, U&E's, MCS ..."""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    keyword = Column(String, nullable=True, unique=True)
    tat_length_minutes = Column(Integer, nullable=True)
    active = Column(Boolean(), default=False)

    @classmethod
    def create(cls, obj_in: schemas.ProfileCreate) -> schemas.Profile:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.ProfileUpdate) -> schemas.Profile:
        data = self._import(obj_in)
        return super().update(**data)


class APLink(DBModel):
    """Many to Many Link between Analysis and Profile
    Offers multi-profiles flexibility per analysis
    A rare scenario worth supporting :)
    """
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)
    profile_uid = Column(Integer, ForeignKey('profile.uid'), primary_key=True)


class AnalysisCategory(BaseAuditDBModel):
    """Categorise Analysis"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    active = Column(Boolean(), default=False)

    @classmethod
    def create(cls, obj_in: schemas.AnalysisCategoryCreate) -> schemas.AnalysisCategory:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisCategoryUpdate) -> schemas.AnalysisCategory:
        data = self._import(obj_in)
        return super().update(**data)


class Analysis(BaseAuditDBModel):
    """Analysis Test/Service"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    keyword = Column(String, nullable=False, unique=True)
    unit = Column(String, nullable=True)
    profiles = relationship('Profile', secondary="aplink", backref="analyses")
    sampletypes = relationship('SampleType', secondary="astlink", backref="analyses")
    category_uid = Column(Integer, ForeignKey('analysiscategory.uid'))
    category = relationship(AnalysisCategory, backref="analyses")
    tat_length_minutes = Column(Integer, nullable=True)  # to calculate TAT
    active = Column(Boolean(), default=False)

    @classmethod
    def create(cls, obj_in: schemas.AnalysisCreate) -> schemas.Analysis:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisUpdate) -> schemas.Analysis:
        data = self._import(obj_in)
        return super().update(**data)


class ResultOption(BaseAuditDBModel):
    """Result Choices"""
    option_key = Column(Integer, nullable=False)
    value = Column(String, nullable=False)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'))
    analysis = relationship(Analysis, backref="resultoptions")

    @classmethod
    def create(cls, obj_in: schemas.ResultOptionCreate) -> schemas.ResultOption:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.ResultOptionUpdate) -> schemas.ResultOption:
        data = self._import(obj_in)
        return super().update(**data)


class AnalysisRequest(BaseAuditDBModel):
    """AnalysisRequest"""
    patient_uid = Column(Integer, ForeignKey('patient.uid'))
    patient = relationship(pt_models.Patient, backref="analysis_requests")
    client_uid = Column(Integer, ForeignKey('client.uid'))
    client = relationship(ct_models.Client, backref="analysis_requests")
    request_id = Column(String, index=True, unique=True, nullable=True)
    client_request_id = Column(String, unique=True, nullable=False)

    @classmethod
    def create_request_id(cls):
        prefix_key = 'AR'
        prefix_year = str(datetime.now().year)[2:]
        prefix = f"{prefix_key}{prefix_year}"
        count = cls.where(request_id__startswith=f'%{prefix}%').count()
        if isinstance(count, type(None)):
            count = 0
        return f"{prefix}-{sequencer(count + 1, 5)}"

    @classmethod
    def create(cls, obj_in: schemas.AnalysisRequestCreate) -> schemas.SampleType:
        data = cls._import(obj_in)
        data['request_id'] = cls.create_request_id()
        return super().create(**data)

    def update(self, obj_in: schemas.SampleTypeUpdate) -> schemas.SampleType:
        data = self._import(obj_in)
        return super().update(**data)


class SPLink(DBModel):
    """Many to Many Link between Sample and Profile
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), primary_key=True)
    profile_uid = Column(Integer, ForeignKey('profile.uid'), primary_key=True)


class SALink(DBModel):
    """Many to Many Link between Sample and Analysis
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), primary_key=True)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)


class RRSLink(DBModel):
    """Many to Many Link between Sample and Rejection Reason
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), primary_key=True)
    rejection_reason_uid = Column(Integer, ForeignKey('rejectionreason.uid'), primary_key=True)


class RejectionReason(BaseAuditDBModel):
    """Result Choices"""
    reason = Column(String, nullable=False)

    @classmethod
    def create(cls, obj_in: schemas.RejectionReasonCreate) -> schemas.RejectionReason:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.RejectionReasonUpdate) -> schemas.RejectionReason:
        data = self._import(obj_in)
        return super().update(**data)


class Sample(BaseAuditDBModel, BaseMPTT):
    """Sample"""
    analysisrequest_uid = Column(Integer, ForeignKey('analysisrequest.uid'), nullable=False)
    analysisrequest = relationship('AnalysisRequest', backref="samples")
    sampletype_uid = Column(Integer, ForeignKey('sampletype.uid'), nullable=False)
    sampletype = relationship('SampleType', backref="samples")
    sample_id = Column(String, index=True, unique=True, nullable=True)
    profiles = relationship(Profile, secondary="splink", backref="samples")
    analyses = relationship(Analysis, secondary="salink", backref="samples")
    priority = Column(Integer, nullable=False, default=0)
    status = Column(String, nullable=False)
    assigned = Column(Boolean(), default=False)
    invalidated_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    date_invalidated = Column(DateTime, nullable=True)
    rejection_reasons = relationship(RejectionReason, secondary="rrslink", backref="samples")

    @classmethod
    def create_sample_id(cls, sampletype):
        prefix_key = sampletype.abbr
        prefix_year = str(datetime.now().year)[2:]
        prefix = f"{prefix_key}{prefix_year}"
        count = cls.where(sample_id__startswith=f'%{prefix}%').count()
        if isinstance(count, type(None)):
            count = 0
        return f"{prefix}-{sequencer(count + 1, 5)}"

    def cancel(self):
        self.status = states.sample.CANCELLED
        self.save()

    @classmethod
    def create(cls, obj_in: schemas.SampleCreate) -> schemas.Sample:
        data = cls._import(obj_in)
        sampletype_uid = data['sampletype_uid']
        sample_type = SampleType.find(sampletype_uid)  # get(uid=sampletype_uid)
        data['sample_id'] = cls.create_sample_id(sample_type)
        return super().create(**data)

    def update(self, obj_in: schemas.SampleUpdate) -> schemas.Sample:
        data = self._import(obj_in)
        return super().update(**data)


class AnalysisResult(BaseAuditDBModel, BaseMPTT):
    """Test/Analysis Result
    Number of analysis results per sample will be directly proportional to
    the number of linked sample_analyses at minimum :)
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), nullable=False)
    sample = relationship('Sample', backref="analysis_results")
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), nullable=False)
    analysis = relationship('Analysis', backref="analysis_results")
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

    @classmethod
    def create(cls, obj_in: schemas.AnalysisResultCreate) -> schemas.AnalysisResult:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisResultUpdate) -> schemas.AnalysisResult:
        data = self._import(obj_in)
        return super().update(**data)
