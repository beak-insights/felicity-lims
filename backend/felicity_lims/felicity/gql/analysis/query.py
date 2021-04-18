import graphene
import logging
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.gql.analysis import types as a_types
from felicity.apps.analysis.models import analysis as a_models
from felicity.apps.analysis.models import results as r_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class SampleFilterableConnectionField(SQLAlchemyConnectionField):
    RELAY_ARGS = ['first', 'last', 'before', 'after', 'sort']

    @classmethod
    def get_query(cls, model, info, **args):
        queryset = super(SampleFilterableConnectionField, cls).get_query(model, info, **args)

        _text = None
        _status = None

        for field, value in args.items():
            if field not in cls.RELAY_ARGS:
                if value:
                    if field == 'text':
                        _text = value

                    if field == 'status':
                        _status = value

        combined = set()

        if _text:
            filters = [
                'sample_id__ilike',
                'analysisrequest___patient___last_name__ilike',
                'analysisrequest___patient___first_name__ilike',
                'analysisrequest___patient___client_patient_id__ilike',
                'analysisrequest___client_request_id__ilike',
            ]
            for _filter in filters:
                arg = dict()
                if _status:
                    arg["status__exact"] = _status
                arg[_filter] = f"%{_text}%"
                logger.warning(f" args built: {arg}")
                queryset = model.where(**arg)
                for item in queryset:
                    combined.add(item)
        else:
            if _status:
                queryset = model.where(status__exact=_status)
            else:
                queryset = queryset

            for item in queryset:
                combined.add(item)

        return list(combined)


class AnalysisQuery(graphene.ObjectType):
    node = relay.Node.Field()

    # SampleTypes Queries
    sample_type_all = SQLAlchemyConnectionField(a_types.SampleTypeTyp.connection)
    sample_type_by_uid = graphene.Field(lambda: a_types.SampleTypeTyp, uid=graphene.String(default_value=""))

    # Sample Queries
    samples_filter = SampleFilterableConnectionField(
        a_types.SampleType.connection,
        status=graphene.String(default_value=""),
        text=graphene.String(default_value="")
    )
    sample_all = SampleFilterableConnectionField(
        a_types.SampleType.connection,
        status=graphene.String(default_value=""),
        text=graphene.String(default_value="")
    )
    sample_by_uid = graphene.Field(lambda: a_types.SampleType, uid=graphene.String(default_value=""))
    sample_count = graphene.Field(lambda: graphene.Int, status=graphene.String(default_value=""),
                                  text=graphene.String(default_value=""))

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

    @staticmethod
    def resolve_sample_type_by_uid(self, info, uid):
        sample_type = a_models.SampleType.get(uid=uid)
        return sample_type

    @staticmethod
    def resolve_sample_by_uid(self, info, uid):
        sample = a_models.Sample.get(uid=uid)
        return sample

    @staticmethod
    def resolve_sample_count(self, info, status, text):
        combined = set()

        if text:
            filters = [
                'sample_id__ilike',
                'analysisrequest___patient___last_name__ilike',
                'analysisrequest___patient___first_name__ilike',
                'analysisrequest___patient___client_patient_id__ilike',
                'analysisrequest___client_request_id__ilike',
            ]
            for _filter in filters:
                arg = dict()
                if status:
                    arg["status__exact"] = status
                arg[_filter] = f"%{text}%"
                queryset = a_models.Sample.where(**arg)
                for item in queryset:
                    combined.add(item)
        else:
            if status:
                queryset = a_models.Sample.where(status__exact=status)
            else:
                queryset = a_models.Sample.where(**{})

            for item in queryset:
                combined.add(item)

        return len(list(combined))

    @staticmethod
    def resolve_profile_by_uid(self, info, uid):
        profile = a_models.Profile.get(uid=uid)
        return profile

    @staticmethod
    def resolve_analysis_category_by_uid(self, info, uid):
        analysis_category = a_models.AnalysisCategory.get(uid=uid)
        return analysis_category

    @staticmethod
    def resolve_analysis_by_uid(self, info, uid):
        analysis = a_models.Analysis.get(uid=uid)
        return analysis

    @staticmethod
    def resolve_analysis_request_by_uid(self, info, uid):
        analysis_request = a_models.AnalysisRequest.get(uid=uid)
        return analysis_request

    @staticmethod
    def resolve_analysis_requests_by_patient_uid(self, info, uid):
        analysis_requests = a_models.AnalysisRequest.where(patient_uid__exact=uid).all()
        return analysis_requests

    @staticmethod
    def resolve_analysis_result_by_uid(self, info, uid):
        analysis_result = r_models.AnalysisResult.get(uid=uid)
        return analysis_result

    @staticmethod
    def resolve_analysis_result_by_sample_uid(self, info, uid):
        analysis_results = r_models.AnalysisResult.where(sample_uid__exact=uid)
        return analysis_results
