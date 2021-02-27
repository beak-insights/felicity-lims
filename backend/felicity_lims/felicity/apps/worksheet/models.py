from datetime import datetime

from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB

from felicity.database.base_class import DBModel
from felicity.apps.core.utils import sequencer
from felicity.apps.setup.models.setup import Instrument
from felicity.apps.user.models import User
from felicity.apps.analysis.models import Analysis, Profile
from felicity.apps.worksheet import schemas


class WSBase(DBModel):
    __abstract__ = True
    worksheet_type = Column(String)
    reserved = Column(JSONB)
    plate = Column(JSONB)
    number_of_samples = Column(Integer)
    rows = Column(Integer)
    cols = Column(Integer)
    row_wise = Column(Boolean(), default=False)
    state = Column(String)

    def plate_values(self):
        """Values for the WS plate creator"""
        data = dict()
        data['reserved'] = self.reserved
        data['n_samples'] = self.number_of_samples
        data['t_type'] = self.worksheet_type
        data['rows'] = self.rows
        data['cols'] = self.cols
        data['row_wise'] = self.row_wise
        return data


class WSTPLink(DBModel):
    """Many to Many Link between WorkSheetTemplate and Profile
    """
    ws_template_uid = Column(Integer, ForeignKey('worksheettemplate.uid'), primary_key=True)
    profile_uid = Column(Integer, ForeignKey('profile.uid'), primary_key=True)


class WSTALink(DBModel):
    """Many to Many Link between WorkSheetTemplate and Analysis
    """
    ws_template_uid = Column(Integer, ForeignKey('worksheettemplate.uid'), primary_key=True)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)


class WorkSheetTemplate(WSBase):
    """WorkSheetTemplate

    a template has a single analyses associated in order to avoid
    cases where multi analyses can be assigned to a single ws
    """
    name = Column(String, unique=True, nullable=False)
    description = Column(String)
    profiles = relationship(Profile, secondary="wstplink", backref="worksheet_templates")
    analyses = relationship(Analysis, secondary="wstalink", backref="worksheet_templates")
    instrument_uid = Column(Integer, ForeignKey('instrument.uid'), nullable=False)
    instrument = relationship(Instrument, backref='worksheet_templates')

    @classmethod
    def create(cls, obj_in: schemas.WSTemplateCreate) -> schemas.WSTemplate:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.WSTemplateUpdate) -> schemas.WSTemplate:
        data = self._import(obj_in)
        return super().update(**data)


class WSPLink(DBModel):
    """Many to Many Link between WorkSheet and Profile
    """
    worksheet_uid = Column(Integer, ForeignKey('worksheet.uid'), primary_key=True)
    profile_uid = Column(Integer, ForeignKey('profile.uid'), primary_key=True)


class WSALink(DBModel):
    """Many to Many Link between WorkSheet and Analysis
    """
    worksheet_uid = Column(Integer, ForeignKey('worksheet.uid'), primary_key=True)
    analysis_uid = Column(Integer, ForeignKey('analysis.uid'), primary_key=True)


class WorkSheet(WSBase):
    template_uid = Column(Integer, ForeignKey('worksheettemplate.uid'), nullable=False)
    template = relationship('WorkSheetTemplate', backref='worksheets')
    analyst_uid = Column(Integer, ForeignKey('user.uid'), nullable=False)
    analyst = relationship(User, backref='worksheets')
    worksheet_id = Column(String, index=True, unique=True, nullable=False)
    profiles = relationship(Profile, secondary="wsplink", backref="worksheets")
    analyses = relationship(Analysis, secondary="wsalink", backref="worksheets")
    instrument_uid = Column(Integer, ForeignKey('instrument.uid'), nullable=False)
    instrument = relationship(Instrument, backref='worksheets')

    @classmethod
    def create_worksheet_id(cls):
        prefix_key = "WS"
        prefix_year = str(datetime.now().year)[2:]
        prefix = f"{prefix_key}{prefix_year}"
        count = cls.where(worksheet_id__startswith=f'%{prefix}%').count()
        if isinstance(count, type(None)):
            count = 0
        return f"{prefix}-{sequencer(count + 1, 5)}"
