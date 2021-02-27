from datetime import datetime

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.analysis.conf import states
from felicity.apps.client import models as ct_models
from felicity.apps.core import BaseMPTT
from felicity.apps.core.utils import sequencer
from felicity.apps.patient import models as pt_models
from felicity.database.base_class import DBModel


class SampleType(DBModel):
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
    """Sample"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
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


class Analysis(DBModel):
    """Analysis Test"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    keyword = Column(String, nullable=False, unique=True)
    profiles = relationship('Profile', secondary="aplink", backref="analyses")
    sampletypes = relationship('SampleType', secondary="astlink", backref="analyses")
    active = Column(Boolean(), default=False)

    @classmethod
    def create(cls, obj_in: schemas.AnalysisCreate) -> schemas.Analysis:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisUpdate) -> schemas.Analysis:
        data = self._import(obj_in)
        return super().update(**data)


class AnalysisRequest(DBModel):
    """AnalysisRequest"""
    patient_uid = Column(Integer, ForeignKey('patient.uid'))
    patient = relationship(pt_models.Patient, backref="analysis_requests")
    client_uid = Column(Integer, ForeignKey('client.uid'))
    client = relationship(ct_models.Client, backref="analysis_requests")
    request_id = Column(String, index=True, unique=True, nullable=True)
    client_request_id = Column(String, index=True, unique=True, nullable=True)

    @classmethod
    def create_request_id(cls):
        prefix_key = 'AR'
        prefix_year = str(datetime.now().year)[2:]
        prefix = f"{prefix_key}{prefix_year}"
        count = cls.where(sample_id__startswith=f'%{prefix}%').count()
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


class Sample(BaseMPTT, DBModel):
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


class AnalysisResult(BaseMPTT, DBModel):
    """Test/Analysis Result
    Number of analysis results per sample will be directly proportional to
    the number of linked sample_analyses at minimum :)
    """
    sample_uid = Column(Integer, ForeignKey('sample.uid'), nullable=False)
    sample = relationship('Sample', backref="analysis_results")
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), nullable=False)
    analysis = relationship('Analysis', backref="analysis_results")
    status = Column(String, nullable=False)

    @classmethod
    def create(cls, obj_in: schemas.AnalysisResultCreate) -> schemas.AnalysisResult:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.AnalysisResultUpdate) -> schemas.AnalysisResult:
        data = self._import(obj_in)
        return super().update(**data)
