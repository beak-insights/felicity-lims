import graphene
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.analysis import types as a_types
from felicity.apps.analysis.models import analysis as a_models
from felicity.apps.analysis.models import results as r_models


def resolve_profile_by_uid(info, uid):
    profile = a_models.Profile.get(uid=uid)
    return profile


class AnalysisQuery(graphene.ObjectType):
    node = relay.Node.Field()

    # SampleTypes Queries
    sample_type_all = SQLAlchemyConnectionField(a_types.SampleTypeTyp.connection)
    sample_type_by_uid = graphene.Field(lambda: a_types.SampleTypeTyp, uid=graphene.String(default_value=""))

    # Sample Queries
    sample_all = SQLAlchemyConnectionField(a_types.SampleType.connection)
    sample_by_uid = graphene.Field(lambda: a_types.SampleType, uid=graphene.String(default_value=""))

    # Profile Queries
    profile_all = SQLAlchemyConnectionField(a_types.ProfileType.connection)
    profile_by_uid = graphene.Field(lambda: a_types.ProfileType, uid=graphene.String(default_value=""))

    # AnalysisCategory Queries
    analysis_category_all = SQLAlchemyConnectionField(a_types.AnalysisCategoryType.connection)
    analysis_category_by_uid = graphene.Field(lambda: a_types.AnalysisCategoryType,
                                              uid=graphene.String(default_value=""))

    # Analysis Queries
    analysis_all = SQLAlchemyConnectionField(a_types.AnalysisType.connection)
    analysis_by_uid = graphene.Field(lambda: a_types.AnalysisType, uid=graphene.String(default_value=""))

    # AnalysisRequest Queries
    analysis_request_all = SQLAlchemyConnectionField(a_types.AnalysisRequestType.connection)
    analysis_request_by_uid = graphene.Field(lambda: a_types.AnalysisRequestType, uid=graphene.String(default_value=""))
    analysis_requests_by_patient_uid = graphene.List(lambda: a_types.AnalysisRequestType, uid=graphene.String(default_value=""))

    # AnalysisResult Queries
    analysis_result_all = SQLAlchemyConnectionField(a_types.AnalysisResultType.connection)
    analysis_result_by_uid = graphene.Field(lambda: a_types.AnalysisResultType, uid=graphene.String(default_value=""))
    analysis_result_by_sample_uid = graphene.List(lambda: a_types.AnalysisResultType, uid=graphene.String(default_value=""))

    def resolve_sample_type_by_uid(self, info, uid):
        sample_type = a_models.SampleType.get(uid=uid)
        return sample_type

    def resolve_sample_by_uid(self, info, uid):
        sample = a_models.Sample.get(uid=uid)
        return sample

    def resolve_analysis_category_by_uid(self, info, uid):
        analysis_category = a_models.AnalysisCategory.get(uid=uid)
        return analysis_category

    def resolve_analysis_by_uid(self, info, uid):
        analysis = a_models.Analysis.get(uid=uid)
        return analysis

    def resolve_analysis_request_by_uid(self, info, uid):
        analysis_request = a_models.AnalysisRequest.get(uid=uid)
        return analysis_request

    def resolve_analysis_requests_by_patient_uid(self, info, uid):
        analysis_requests = a_models.AnalysisRequest.where(patient_uid__exact=uid).all()
        return analysis_requests

    def resolve_analysis_result_by_uid(self, info, uid):
        analysis_result = r_models.AnalysisResult.get(uid=uid)
        return analysis_result

    def resolve_analysis_result_by_sample_uid(self, info, uid):
        analysis_results = r_models.AnalysisResult.where(sample_uid__exact=uid)
        return analysis_results
