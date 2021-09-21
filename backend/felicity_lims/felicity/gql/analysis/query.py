from typing import Optional, List
import logging
import strawberry

from felicity.gql.analysis.types import analysis as a_types
from felicity.gql.analysis.types import results as r_types
from felicity.apps.analysis.models import analysis as a_models
from felicity.apps.analysis.models import results as r_models
from felicity.apps.analysis.models import qc as qc_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.type
class AnalysisQuery:
    @strawberry.field
    async def sample_type_all(self, info) -> List[a_types.SampleTypeTyp]:
        return await a_models.SampleType.all()

    @strawberry.field
    async def sample_type_by_uid(self, info, uid: int) -> a_types.SampleTypeTyp:
        return await a_models.SampleType.get(uid=uid)

    @strawberry.field
    async def sample_all(self, info, status: str, text: str, client_uid: int) -> List[a_types.SampleType]:
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
                if client_uid:
                    arg["analysisrequest___client_uid__exact"] = client_uid
                arg[_filter] = f"%{text}%"
                arg["internal_use__ne"] = True
                logger.warning(f" args built: {arg}")
                queryset = a_models.Sample.where(**arg)
                for item in queryset:
                    combined.add(item)
        else:
            if status:
                if client_uid:
                    queryset = a_models.Sample.where(
                        status__exact=status,
                        analysisrequest___client_uid__exact=client_uid,
                        internal_use__ne=True
                    )
                else:
                    queryset = a_models.Sample.where(status__exact=status, internal_use__ne=True)
            else:
                if client_uid:
                    queryset = a_models.Sample.where(analysisrequest___client_uid__exact=client_uid, internal_use__ne=True)
                else:
                    queryset = a_models.Sample.where(internal_use__ne=True)

            for item in queryset:
                combined.add(item)

        return list(combined)

    @strawberry.field
    async def sample_by_uid(self, info, uid: int) -> a_types.SampleTypeTyp:
        return await a_models.Sample.get(uid=uid)

    @strawberry.field
    async def sample_count(self, info, status: str, text: str, client_uid: int) -> int:
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
                if client_uid:
                    arg["analysisrequest___client_uid__exact"] = client_uid
                arg[_filter] = f"%{text}%"
                arg["internal_use__ne"] = True
                queryset = await a_models.Sample.where(**arg)
                for item in queryset:
                    combined.add(item)
        else:
            if status:
                if client_uid:
                    queryset = await a_models.Sample.where(
                        status__exact=status,
                        analysisrequest___client_uid__exact=client_uid,
                        internal_use__ne=True
                    )
                else:
                    queryset = await a_models.Sample.where(status__exact=status, internal_use__ne=True)
            else:
                if client_uid:
                    queryset = await a_models.Sample.where(analysisrequest___client_uid__exact=client_uid, internal_use__ne=True)
                else:
                    queryset = await a_models.Sample.where(internal_use__ne=True)

            for item in queryset:
                combined.add(item)

        return len(list(combined))

    @strawberry.field
    async def profile_all(self, info) -> List[a_types.ProfileType]:
        return await a_models.Profile.all()

    @strawberry.field
    async def profile_by_uid(self, info, uid: int) -> a_types.ProfileType:
        return await a_models.Profile.get(uid=uid)

    @strawberry.field
    async def analysis_category_all(self, info) -> List[a_types.AnalysisCategoryType]:
        return await a_models.AnalysisCategory.all()

    @strawberry.field
    async def analysis_category_by_uid(self, info, uid: int) -> a_types.AnalysisCategoryType:
        return await a_models.AnalysisCategory.get(uid=uid)

    @strawberry.field
    async def analysis_all(self, info) -> List[a_types.AnalysisType]:
        return await a_models.Analysis.all()

    @strawberry.field
    async def analysis_by_uid(self, info, uid: int) -> a_types.AnalysisType:
        return await a_models.Analysis.get(uid=uid)

    @strawberry.field
    async def analysis_for_qc(self, info) -> List[a_types.AnalysisType]:
        return await a_models.Analysis.where(category___name__exact='Quality Control').all()

    @strawberry.field
    async def analysis_request_all(self, info) -> List[a_types.AnalysisRequestType]:
        return await a_models.AnalysisRequest.all()

    @strawberry.field
    async def analysis_request_by_uid(self, info, uid: int) -> a_types.AnalysisRequestType:
        return await a_models.AnalysisRequest.get(uid=uid)

    @strawberry.field
    async def analysis_requests_by_patient_uid(self, info, uid: int) -> List[a_types.AnalysisRequestType]:
        return await a_models.AnalysisRequest.where(patient_uid__exact=uid).all()

    @strawberry.field
    async def analysis_requests_by_client_uid(self, info, uid: int) -> List[a_types.AnalysisRequestType]:
        return await a_models.AnalysisRequest.where(client_uid__exact=uid).all()

    @strawberry.field
    async def analysis_result_all(self, info) -> List[r_types.AnalysisResultType]:
        return await r_models.AnalysisResult.all()

    @strawberry.field
    async def analysis_result_by_uid(self, info, uid: int) -> r_types.AnalysisResultType:
        return await r_models.AnalysisResult.get(uid=uid)

    @strawberry.field
    async def analysis_result_by_sample_uid(self, info, uid: int) -> List[r_types.AnalysisResultType]:
        return await r_models.AnalysisResult.where(sample_uid__exact=uid)

    @strawberry.field
    async def qc_set_all(self, info) -> List[a_types.QCSetType]:
        return await qc_models.QCSet.all()

    @strawberry.field
    async def resolve_qc_set_by_uid(self, info, uid: int) -> a_types.QCSetType:
        return await qc_models.QCSet.get(uid=uid)

    @strawberry.field
    async def qc_level_all(self, info) -> List[a_types.QCLevelType]:
        return await qc_models.QCLevel.all()

    @strawberry.field
    async def resolve_qc_level_by_uid(self, info, uid: int) -> a_types.QCLevelType:
        return await qc_models.QCLevel.get(uid=uid)

    @strawberry.field
    async def qc_template_all(self, info) -> List[a_types.QCTemplateType]:
        return await qc_models.QCTemplate.all()

    @strawberry.field
    async def qc_template_by_uid(self, info, uid: int) -> a_types.QCTemplateType:
        return await qc_models.QCTemplate.get(uid=uid)

    @strawberry.field
    async def result_options_by_analysis_uid(self, info, uid: int) -> a_types.ResultOptionType:
        return await a_models.ResultOption.where(analysis_uid__exact=uid).all()
