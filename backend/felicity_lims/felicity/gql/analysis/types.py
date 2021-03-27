from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.analysis.models import (
    SampleType as SampleTypeModel,
    Sample,
    Analysis,
    Profile,
    AnalysisRequest,
    AnalysisResult,
    AnalysisCategory
)


# Graphene SampleType Type
class SampleTypeTyp(SQLAlchemyObjectType):
    class Meta:
        model = SampleTypeModel
        interfaces = (relay.Node, )


# Graphene Sample Type
class SampleType(SQLAlchemyObjectType):
    class Meta:
        model = Sample
        interfaces = (relay.Node, )


# Graphene AnalysisCategory Type
class AnalysisCategoryType(SQLAlchemyObjectType):
    class Meta:
        model = AnalysisCategory
        interfaces = (relay.Node, )


# Graphene Analysis Type
class AnalysisType(SQLAlchemyObjectType):
    class Meta:
        model = Analysis
        interfaces = (relay.Node, )


# Graphene Profile Type
class ProfileType(SQLAlchemyObjectType):
    class Meta:
        model = Profile
        interfaces = (relay.Node, )


# Graphene AnalysisRequest Type
class AnalysisRequestType(SQLAlchemyObjectType):
    class Meta:
        model = AnalysisRequest
        interfaces = (relay.Node, )


# Graphene AnalysisResult Type
class AnalysisResultType(SQLAlchemyObjectType):
    class Meta:
        model = AnalysisResult
        interfaces = (relay.Node, )      
