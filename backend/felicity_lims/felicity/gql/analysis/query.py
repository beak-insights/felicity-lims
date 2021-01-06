import graphene
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.analysis import types as a_types
from felicity.apps.analysis import models as a_models


class AnalysisQuery(graphene.ObjectType):
    node = relay.Node.Field()
    
    # SampleTypes Queries
    sampletype_all = SQLAlchemyConnectionField(a_types.SampleTypeTyp.connection)
    sampletype_by_uid = graphene.Field(lambda: a_types.SampleTypeTyp, uid=graphene.String(default_value=""))
    
    # Sample Queries
    sample_all = SQLAlchemyConnectionField(a_types.SampleType.connection)
    sample_by_uid = graphene.Field(lambda: a_types.SampleType, uid=graphene.String(default_value=""))
    
    # Profile Queries
    profile_all = SQLAlchemyConnectionField(a_types.ProfileType.connection)
    profile_by_uid = graphene.Field(lambda: a_types.ProfileType, uid=graphene.String(default_value=""))
    
    # Analysis Queries
    analysis_all = SQLAlchemyConnectionField(a_types.AnalysisType.connection)
    analysis_by_uid = graphene.Field(lambda: a_types.AnalysisType, uid=graphene.String(default_value=""))
    
    # AnalysisRequest Queries
    analysisrequest_all = SQLAlchemyConnectionField(a_types.AnalysisRequestType.connection)
    analysisrequest_by_uid = graphene.Field(lambda: a_types.AnalysisRequestType, uid=graphene.String(default_value=""))
    
    # AnalysisResult Queries
    analysisresult_all = SQLAlchemyConnectionField(a_types.AnalysisResultType.connection)
    analysisresult_by_uid = graphene.Field(lambda: a_types.AnalysisResultType, uid=graphene.String(default_value=""))

    def resolve_sampletype_by_uid(self, info, uid):
        sample_type = a_models.SampleType.get(uid=uid)
        return sample_type

    def resolve_sample_by_uid(self, info, uid):
        sample = a_models.Sample.get(uid=uid)
        return sample

    def resolve_analysis_by_uid(self, info, uid):
        analysis = a_models.Analysis.get(uid=uid)
        return analysis

    def resolve_profile_by_uid(self, info, uid):
        profile = a_models.Profile.get(uid=uid)
        return profile

    def resolve_analysisrequest_by_uid(self, info, uid):
        analysisrequest = a_models.AnalysisRequest.get(uid=uid)
        return analysisrequest

    def resolve_analysisresult_by_uid(self, info, uid):
        analysisresult = a_models.AnalysisResult.get(uid=uid)
        return analysisresult