from datetime import datetime
import logging

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from felicity.apps.analysis import schemas
from felicity.apps.analysis.models.qc import QCLevel, QCSet
from felicity.apps.analysis.conf import states
from felicity.apps.client import models as ct_models
from felicity.apps.core import BaseMPTT
from felicity.apps.core.utils import sequencer
from felicity.apps.patient import models as pt_models
from felicity.apps import BaseAuditDBModel, DBModel, Auditable
from felicity.apps.user.models import User

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class SampleType(BaseAuditDBModel):
    """SampleType"""
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    active = Column(Boolean(), default=False)
    internal_use = Column(Boolean(), default=False)  # e.g QC Sample
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
    sort_key = Column(Integer, nullable=True)
    internal_use = Column(Boolean(), default=False)  # e.g QC Services
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
    """AnalysisRequest a.k.a Laboratory Request"""
    patient_uid = Column(Integer, ForeignKey('patient.uid'))
    patient = relationship(pt_models.Patient, backref="analysis_requests")
    client_uid = Column(Integer, ForeignKey('client.uid'))
    client = relationship(ct_models.Client, backref="analysis_requests")
    request_id = Column(String, index=True, unique=True, nullable=True)
    client_request_id = Column(String, unique=True, nullable=False)
    internal_use = Column(Boolean(), default=False)  # e.g Test Requests

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


class Sample(Auditable, BaseMPTT):
    """Sample"""
    analysisrequest_uid = Column(Integer, ForeignKey('analysisrequest.uid'), nullable=True)
    analysisrequest = relationship('AnalysisRequest', backref="samples")
    sampletype_uid = Column(Integer, ForeignKey('sampletype.uid'), nullable=False)
    sampletype = relationship('SampleType', backref="samples")
    sample_id = Column(String, index=True, unique=True, nullable=True)
    profiles = relationship(Profile, secondary="splink", backref="samples")
    analyses = relationship(Analysis, secondary="salink", backref="samples")
    priority = Column(Integer, nullable=False, default=0)
    status = Column(String, nullable=False)
    assigned = Column(Boolean(), default=False)
    submitted_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    submitted_by = relationship(User, foreign_keys=[submitted_by_uid], backref="submitted_samples")
    date_submitted = Column(DateTime, nullable=True)
    verified_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    verified_by = relationship(User, foreign_keys=[verified_by_uid], backref="verified_samples")
    date_verified = Column(DateTime, nullable=True)
    invalidated_by_uid = Column(Integer, ForeignKey('user.uid'), nullable=True)
    invalidated_by = relationship(User, foreign_keys=[invalidated_by_uid], backref="invalidated_samples")
    date_invalidated = Column(DateTime, nullable=True)
    rejection_reasons = relationship(RejectionReason, secondary="rrslink", backref="samples")
    internal_use = Column(Boolean(), default=False)
    # QC Samples
    qc_set_uid = Column(Integer, ForeignKey('qcset.uid'), nullable=True)
    qc_set = relationship(QCSet, backref="samples")
    qc_level_uid = Column(Integer, ForeignKey('qclevel.uid'), nullable=True)
    qc_level = relationship(QCLevel, backref="qcsamples")

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

    def submit(self, submitted_by):
        self.status = states.sample.TO_BE_VERIFIED
        self.updated_by_uid = submitted_by.uid  # noqa
        self.save()

    def assign(self):
        self.assigned = True
        self.save()

    def un_assign(self):
        self.assigned = False
        self.save()

    def verify(self, verified_by):
        self.status = states.sample.VERIFIED
        self.updated_by_uid = verified_by.uid  # noqa
        self.save()

        # DO REFLEX HERE

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

