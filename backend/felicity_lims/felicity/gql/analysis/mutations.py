import logging
from datetime import datetime

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.patient import models as pt_models
from felicity.apps.client import models as ct_models
from felicity.apps.setup.models import setup as setup_models
from felicity.apps.analysis.models import analysis as analysis_models
from felicity.apps.analysis.models import qc as qc_models
from felicity.apps.analysis.models import results as result_models
from felicity.apps.analysis.utils import (
    get_qc_sample_type,
    retest_analysis_result
)
from felicity.apps.analysis import schemas
from felicity.gql import auth_from_info, verify_user_auth
from felicity.gql.analysis import types
from felicity.apps.patient.models import logger
from felicity.apps.analysis.conf import priorities, states

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# 
# SampleTye Mutations
# 
class CreateSampleType(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        abbr = graphene.String(required=True)
        description = graphene.String(required=True)
        internal_use = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample_type = graphene.Field(lambda: types.SampleTypeTyp)

    @staticmethod
    def mutate(root, info, name, abbr, active=True, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create sample types")

        if not name or not abbr:
            raise GraphQLError("Name and Description are mandatory")

        exists = analysis_models.SampleType.get(name=name)
        if exists:
            raise GraphQLError(f"Sample Type: {name} already exists")

        incoming = {
            "name": name,
            "abbr": abbr,
            "active": active
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.SampleTypeCreate(**incoming)
        sample_type = analysis_models.SampleType.create(obj_in)
        ok = True
        return CreateSampleType(ok=ok, sample_type=sample_type)


class UpdateSampleType(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        abbr = graphene.String(required=False)
        description = graphene.String(required=False)
        internal_use = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample_type = graphene.Field(lambda: types.SampleTypeTyp)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update sample types")

        sampletype = analysis_models.SampleType.get(uid=uid)
        if not sampletype:
            raise GraphQLError(f"Sample type with uid {uid} does not exist")

        st_data = jsonable_encoder(sampletype)
        for field in st_data:
            if field in kwargs:
                try:
                    setattr(sampletype, field, kwargs[field])
                except Exception as e:
                    # raise GraphQLError(f"{e}")
                    pass
        sampletype_in = schemas.SampleTypeUpdate(**sampletype.to_dict())
        sampletype.update(sampletype_in)
        ok = True
        return UpdateSampleType(ok=ok, sample_type=sampletype)


#
# ResultOption Mutations
#
class CreateResultOption(graphene.Mutation):
    class Arguments:
        analysis_uid = graphene.String(required=True)
        option_key = graphene.String(required=True)
        value = graphene.String(required=True)

    ok = graphene.Boolean()
    result_option = graphene.Field(lambda: types.ResultOptionType)

    @staticmethod
    def mutate(root, info, analysis_uid, option_key, value, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can add result options")

        if not analysis_uid:
            raise GraphQLError("Analysis to attach Result Option Required")

        if not option_key or not value:
            raise GraphQLError("Result option key and value Required")

        analysis = analysis_models.Analysis.get(uid=analysis_uid)
        if not analysis:
            raise GraphQLError(f"Analysis with uid {analysis_uid} does not exist")

        incoming = {
            "analysis_uid": analysis_uid,
            "value": value,
            "option_key": option_key
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ResultOptionCreate(**incoming)
        result_option = analysis_models.ResultOption.create(obj_in)
        ok = True
        return CreateResultOption(ok=ok, result_option=result_option)


class UpdateResultOption(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        option_key = graphene.String(required=False)
        value = graphene.String(required=False)

    ok = graphene.Boolean()
    result_option = graphene.Field(lambda: types.ResultOptionType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update result options")

        result_option = analysis_models.ResultOption.get(uid=uid)
        if not result_option:
            raise GraphQLError(f"ResultOption with uid {uid} does not exist")

        ro_data = jsonable_encoder(result_option)
        for field in ro_data:
            if field in kwargs:
                try:
                    setattr(result_option, field, kwargs[field])
                except Exception as e:
                    # raise GraphQLError(f"{e}")
                    pass

        result_option_in = schemas.ResultOptionUpdate(**result_option.to_dict())
        result_option.update(result_option_in)

        ok = True
        return UpdateResultOption(ok=ok, result_option=result_option)


#
# AnalysisCategory Mutations
#
class CreateAnalysisCategory(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=False)
        description = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    analysis_category = graphene.Field(lambda: types.AnalysisCategoryType)

    @staticmethod
    def mutate(root, info, name, description, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create analysis categories")

        logger.info("hello there 1")
        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = analysis_models.AnalysisCategory.get(name=name)
        if exists:
            raise GraphQLError(f"A AnalysisCategory named {name} already exists")

        incoming = {
            "name": name,
            "description": description,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        logger.info("hello there 2")
        obj_in = schemas.AnalysisCategoryCreate(**incoming)
        analysis_category = analysis_models.AnalysisCategory.create(obj_in)
        ok = True
        return CreateAnalysisCategory(ok=ok, analysis_category=analysis_category)


class UpdateAnalysisCategory(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        description = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    analysis_category = graphene.Field(lambda: types.AnalysisCategoryType)

    @staticmethod
    def mutate(root, info, uid, **kwargs): # noqa
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update analysis categories")

        analysis_category = analysis_models.AnalysisCategory.get(uid=uid)
        if not analysis_category:
            raise GraphQLError(f"AnalysisCategory with uid {uid} does not exist")

        ac_data = jsonable_encoder(analysis_category)
        for field in ac_data:
            if field in kwargs:
                try:
                    setattr(analysis_category, field, kwargs[field])
                except AttributeError as e:
                    # raise GraphQLError(f"{e}")
                    pass

        profile_in = schemas.AnalysisCategoryUpdate(**analysis_category.to_dict())
        analysis_category.update(profile_in)
        ok = True
        return UpdateAnalysisCategory(ok=ok, analysis_category=analysis_category)


#
# Profile Mutations
# 
class CreateProfile(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        keyword = graphene.String(required=False)
        active = graphene.Boolean(required=True)

    ok = graphene.Boolean()
    profile = graphene.Field(lambda: types.ProfileType)

    @staticmethod
    def mutate(root, info, name, description, active=True, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create analysis profiles")

        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = analysis_models.Profile.get(name=name)
        if exists:
            raise GraphQLError(f"A Profile named {name} already exists")

        incoming = {
            "name": name,
            "description": description,
            "active": active
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ProfileCreate(**incoming)
        profile = analysis_models.Profile.create(obj_in)
        ok = True
        return CreateProfile(ok=ok, profile=profile)


class UpdateProfile(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        keyword = graphene.String(required=False)
        description = graphene.String(required=False)
        services = graphene.List(graphene.String)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    profile = graphene.Field(lambda: types.ProfileType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update analysis profiles")

        profile = analysis_models.Profile.get(uid=uid)
        if not profile:
            raise GraphQLError(f"Profile with uid {uid} does not exist")

        profile_data = jsonable_encoder(profile)
        for field in profile_data:
            if field in kwargs:
                try:
                    setattr(profile, field, kwargs[field])
                except AttributeError as e:
                    # raise GraphQLError(f"{e}")
                    pass

        profile_in = schemas.ProfileUpdate(**profile.to_dict())
        profile.update(profile_in)

        analyses = kwargs.get('services', None)
        profile.analyses.clear()
        if analyses:
            for _uid in analyses:
                anal = analysis_models.Analysis.get(uid=_uid)
                if anal not in profile.analyses:  # analysis_data['profiles'] ??
                    profile.analyses.append(anal)
        profile.save()

        ok = True
        return UpdateProfile(ok=ok, profile=profile)


# 
# Analysis Mutations
# 
class CreateAnalysis(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        keyword = graphene.String(required=True)
        sort_key = graphene.Int(required=True)
        sample_types = graphene.List(graphene.String)
        category_uid = graphene.String(required=False)
        internal_use = graphene.Boolean(required=False)
        active = graphene.Boolean(required=True)

    ok = graphene.Boolean()
    analysis = graphene.Field(lambda: types.AnalysisType)

    @staticmethod
    def mutate(root, info, name, description, keyword, active=True, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create analysis")

        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = analysis_models.Analysis.get(name=name)
        if exists:
            raise GraphQLError(f"A analysis named {name} already exists")

        exists = analysis_models.Analysis.get(keyword=keyword)
        if exists:
            raise GraphQLError(f"Analysis Keyword {keyword} is not unique")

        incoming = {
            "name": name,
            "description": description,
            "keyword": keyword,
            "active": active,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        sample_types = kwargs.get('sampletypes', None)
        incoming['sample_types'] = []
        if sample_types:
            for _uid in sample_types:
                stype = analysis_models.SampleType.get(uid=_uid)
                if stype not in incoming['sample_types']:
                    incoming['sampletypes'].append(stype)

        obj_in = schemas.AnalysisCreate(**incoming)  # skip this stage if its not adding analyses and stypes
        analysis = analysis_models.Analysis.create(obj_in)
        ok = True
        return CreateAnalysis(ok=ok, analysis=analysis)


class UpdateAnalysis(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        keyword = graphene.String(required=True)
        category_uid = graphene.String(required=False)
        sample_types = graphene.List(graphene.String)
        internal_use = graphene.Boolean(required=False)
        sort_key = graphene.Int(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    analysis = graphene.Field(lambda: types.AnalysisType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update analysis")

        analysis = analysis_models.Analysis.get(uid=uid)
        if not analysis:
            raise GraphQLError(f"Analysis with uid {uid} does not exist -- cannot update")

        analysis_data = jsonable_encoder(analysis)
        for field in analysis_data:
            if field in kwargs:
                try:
                    setattr(analysis, field, kwargs[field])
                except AttributeError as e:
                    pass

        sample_types = kwargs.get('sample_types', None)
        analysis.sampletypes.clear()
        if sample_types:
            for _uid in sample_types:
                stype = analysis_models.SampleType.get(uid=_uid)
                if stype not in analysis.sampletypes:
                    analysis.sampletypes.append(stype)

        analysis_in = schemas.AnalysisUpdate(**analysis.to_dict(nested=False))
        analysis.update(analysis_in)

        ok = True
        return UpdateAnalysis(ok=ok, analysis=analysis)


# 
# AnalysisRequest Mutations
# 

class ARSampleInputType(graphene.InputObjectType):
    sample_type = graphene.Int()
    profiles = graphene.List(graphene.String)
    analyses = graphene.List(graphene.String)


class CreateAnalysisRequest(graphene.Mutation):
    class Arguments:
        patient_uid = graphene.String(required=True)
        client_uid = graphene.String(required=True)
        samples = graphene.List(ARSampleInputType, required=True)
        client_request_id = graphene.String(required=False)
        internal_use = graphene.Boolean(required=False)
        priority = graphene.Int(required=False)

    ok = graphene.Boolean()
    analysisrequest = graphene.Field(lambda: types.AnalysisRequestType)

    @staticmethod
    def mutate(root, info, patient_uid, client_uid, priority=priorities.sample.NORMAL, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create analysis requests")

        samples = kwargs.get('samples')
        logger.info(f"samples {samples}")

        patient = pt_models.Patient.get(uid=patient_uid)
        if not patient:
            raise GraphQLError(f"Patient Not found")
        client = ct_models.Client.get(uid=client_uid)
        if not client:
            raise GraphQLError(f"Client Not found")
        samples = kwargs.get('samples', [])
        if len(samples) == 0:
            raise GraphQLError(f"Samples are required")

        # create the ar
        incoming = {
            "patient_uid": patient_uid,
            "client_uid": client_uid,
            "request_id": None,  # analysis_models.AnalysisRequest.create_request_id(),
            "client_request_id": kwargs.get('client_request_id', None)
        }

        obj_in = schemas.AnalysisRequestCreate(**incoming)
        analysisrequest = analysis_models.AnalysisRequest.create(obj_in)

        # 1. create samples
        for s in samples:
            _st_uid = s['sample_type']
            _profiles = s['profiles']
            _analyses = s['analyses']
            stype = analysis_models.SampleType.get(uid=_st_uid)
            if not stype:
                raise GraphQLError(f"Error, failed to retrieve sample type {_st_uid}")

            sample_in = {
                'analysisrequest_uid': analysisrequest.uid,
                'sampletype_uid': _st_uid,
                'sample_id': None,  # analysis_models.Sample.create_sample_id(sampletype=stype),
                'priority': priority,
                'status': states.sample.RECEIVED
            }

            profiles = []
            analyses = []
            _profiles_analyses = set()

            for p_uid in _profiles:
                profile = analysis_models.Profile.get(uid=p_uid)
                profiles.append(profile)
                analyses_ = profile.analyses
                for _an in analyses_:
                    _profiles_analyses.add(_an)

            # make sure the selected analyses are not part of the selected profiles
            for a_uid in _analyses:
                analysis = analysis_models.Analysis.get(uid=a_uid)
                if analysis not in _profiles_analyses:
                    analyses.append(analysis)
                    _profiles_analyses.add(analysis)

            sample_schema = schemas.SampleCreate(**sample_in)
            sample: analysis_models.Sample = analysis_models.Sample.create(sample_schema)
            sample.analyses = analyses
            sample.profiles = profiles
            sample.save()

            # Attach Analysis result for each Analyses
            for _service in _profiles_analyses:
                a_result_in = {
                    'sample_uid': sample.uid,
                    'analysis_uid': _service.uid,
                    'status': states.result.PENDING
                }
                a_result_schema = schemas.AnalysisResultCreate(**a_result_in)
                result_models.AnalysisResult.create(a_result_schema)

        ok = True
        return CreateAnalysisRequest(ok=ok, analysisrequest=analysisrequest)


class UpdateAnalysisRequest(graphene.Mutation):
    """Update a few fields here
    some updated will occur at sample level.
    """

    class Arguments:
        uid = graphene.Int(required=True)
        patient_uid = graphene.Int(required=False)
        client_uid = graphene.Int(required=False)
        internal_use = graphene.Boolean(required=False)
        client_request_id = graphene.String(required=False)

    ok = graphene.Boolean()
    analysisrequest = graphene.Field(lambda: types.AnalysisRequestType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update analysis requests")

        analysisrequest = analysis_models.AnalysisRequest.get(uid=uid)
        if not analysisrequest:
            raise GraphQLError(f"AnalysisRequest with uid {uid} does not exist")

        ar_data = jsonable_encoder(analysisrequest)
        for field in ar_data:
            if field in kwargs:
                try:
                    setattr(analysisrequest, field, kwargs[field])
                except AttributeError as e:
                    pass
        ar_in = schemas.AnalysisRequestUpdate(**analysisrequest.to_dict())
        analysisrequest.update(ar_in)
        ok = True
        return UpdateAnalysisRequest(ok=ok, analysisrequest=analysisrequest)


#
# AnalysisRequest Mutations
#
"""TODO
Add sample level functionalities:
1. update sample parameters: sampletype, analyses and profiles
2. delete sample
3. add sample to analysis request that is existing
"""


class UpdateSample(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        sampletype_uid = graphene.Int(required=False)
        profiles = graphene.List(graphene.String)
        analyses = graphene.List(graphene.String)
        internal_use = graphene.Boolean(required=False)
        cancel = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample = graphene.Field(lambda: types.SampleType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update samples")

        sample = analysis_models.Sample.get(uid=uid)
        if not sample:
            raise GraphQLError(f"Sample with uid {uid} not found")
        if kwargs.get('cancel'):
            sample.cancel()
        else:
            # TODO: remove/change profile/analyses if no results yet
            pass

        ok = True
        return UpdateSample(ok, sample=sample)


#
# AnalysisResults Mutations
#


class ARResultInputType(graphene.InputObjectType):
    uid = graphene.String(required=True)
    result = graphene.String(required=False)
    reportable = graphene.Boolean(required=False)


class SubmitAnalysisResults(graphene.Mutation):
    class Arguments:
        analysis_results = graphene.List(ARResultInputType, required=True)

    ok = graphene.Boolean()
    analysis_results = graphene.List(lambda: types.AnalysisResultType)

    @staticmethod
    def mutate(root, info, analysis_results, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can submit analysis results")

        return_results = []

        if len(analysis_results) == 0:
            raise GraphQLError(f"No Results to update are provided!")

        for _ar in analysis_results:
            uid = _ar['uid']
            a_result: result_models.AnalysisResult  = result_models.AnalysisResult.get(uid=uid)
            if not a_result:
                raise GraphQLError(f"AnalysisResult with uid {uid} not found")

            # only submit results in pending state
            if a_result.status not in [states.result.PENDING]:
                return_results.append(a_result)
                continue

            analysis_result = a_result.to_dict(nested=False)
            # analysis_result = jsonable_encoder(a_result)

            for field in analysis_result:
                if field in _ar:
                    try:
                        setattr(a_result, field, _ar[field])
                    except AttributeError as e:
                        pass

            # No Empty Results
            result = getattr(a_result, 'result', None)
            if not result or result.strip() == '' or len(result.strip()) == 0:
                setattr(a_result, 'result', None)
            else:
                setattr(a_result, 'status', states.result.RESULTED)

                # set submitter ad date_submitted
                setattr(a_result, 'submitted_by_uid', felicity_user.uid)
                setattr(a_result, 'date_submitted', datetime.now())

                # set updated_by
                try:
                    setattr(a_result, 'updated_by_uid', felicity_user.uid)
                except AttributeError as e:
                    pass

            a_result_in = schemas.AnalysisResultUpdate(**a_result.to_dict())
            a_result.update(a_result_in)

            # check if all sibling analyses for connected sample are resulted and change sample state \
            # to to_be_verified

            statuses = [states.result.RESULTED, states.result.RETRACTED, states.result.VERIFIED]
            siblings = a_result.sample.analysis_results
            match = all([(sibling.status in statuses) for sibling in siblings])
            if match:
                a_result.sample.submit(submitted_by=felicity_user)

            # try to submit associated worksheet
            if a_result.worksheet:
                a_result.worksheet.submit()

            return_results.append(a_result)

        ok = True
        return SubmitAnalysisResults(ok, analysis_results=return_results)


class VerifyAnalysisResults(graphene.Mutation):
    class Arguments:
        analyses = graphene.List(graphene.String, required=True)

    ok = graphene.Boolean()
    analysis_results = graphene.List(lambda: types.AnalysisResultType)

    @staticmethod
    def mutate(root, info, analyses, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can verify analysis results")

        return_results = []

        if len(analyses) == 0:
            raise GraphQLError(f"No analyses to verify are provided!")

        for _ar_uid in analyses:
            a_result: result_models.AnalysisResult = result_models.AnalysisResult.get(uid=_ar_uid)
            if not a_result:
                raise GraphQLError(f"AnalysisResult with uid {_ar_uid} not found")

            # No Empty Results
            status = getattr(a_result, 'status', None)
            if status == states.result.RESULTED:
                a_result.verify(verifier=felicity_user)
            else:
                continue

            # check if all sibling analyses for connected sample are verified/retracted and change sample state \
            # to verified

            statuses = [states.result.VERIFIED, states.result.RETRACTED]
            siblings = a_result.sample.analysis_results
            match = all([(sibling.status in statuses) for sibling in siblings])
            if match:
                a_result.sample.verify(verified_by=felicity_user)

            # try to submit associated worksheet
            if a_result.worksheet:
                a_result.worksheet.verify()

            return_results.append(a_result)

        ok = True
        return SubmitAnalysisResults(ok, analysis_results=return_results)


class RetractAnalysisResults(graphene.Mutation):
    class Arguments:
        analyses = graphene.List(graphene.String, required=True)

    ok = graphene.Boolean()
    analysis_results = graphene.List(lambda: types.AnalysisResultType)

    @staticmethod
    def mutate(root, info, analyses, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can retract analysis results")

        return_results = []

        if len(analyses) == 0:
            raise GraphQLError(f"No analyses to retract are provided!")

        for _ar_uid in analyses:
            a_result: result_models.AnalysisResult = result_models.AnalysisResult.get(uid=_ar_uid)
            if not a_result:
                raise GraphQLError(f"AnalysisResult with uid {_ar_uid} not found")

            status = getattr(a_result, 'status', None)
            if status in [states.result.RESULTED]:
                retest = retest_analysis_result(a_result)
                a_result.hide_report()
                a_result.retract(retracted_by=felicity_user)

                # if in worksheet then keep add retest to ws
                if a_result.worksheet_uid:
                    retest.worksheet_uid = a_result.worksheet_uid
                    retest.worksheet_position = a_result.worksheet_position
                    retest.assigned = True
                    retest.save()

                # add retest
                return_results.append(retest)

            # add original
            return_results.append(a_result)

        ok = True
        return RetractAnalysisResults(ok, analysis_results=return_results)


class RetestAnalysisResults(graphene.Mutation):
    class Arguments:
        analyses = graphene.List(graphene.String, required=True)

    ok = graphene.Boolean()
    analysis_results = graphene.List(lambda: types.AnalysisResultType)

    @staticmethod
    def mutate(root, info, analyses, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can retest analysis results")

        return_results = []

        if len(analyses) == 0:
            raise GraphQLError(f"No analyses to Retest are provided!")

        for _ar_uid in analyses:
            a_result: result_models.AnalysisResult = result_models.AnalysisResult.get(uid=_ar_uid)
            if not a_result:
                raise GraphQLError(f"AnalysisResult with uid {_ar_uid} not found")

            status = getattr(a_result, 'status', None)
            if status in [states.result.RESULTED]:
                retest = retest_analysis_result(a_result)
                a_result.hide_report()
                a_result.verify(verifier=felicity_user)

                return_results.append(retest)

            return_results.append(a_result)

        ok = True
        return RetestAnalysisResults(ok, analysis_results=return_results)


#
# QCSet Mutations
#
class QCSetInputType(graphene.InputObjectType):
    qcTemplateUid = graphene.String(required=False)
    qcLevels = graphene.List(graphene.String)
    analysisProfiles = graphene.List(graphene.String)
    analysisServices = graphene.List(graphene.String)


class CreateQCSet(graphene.Mutation):
    class Arguments:
        samples = graphene.List(QCSetInputType, required=True)

    ok = graphene.Boolean()
    samples = graphene.List(lambda: types.SampleType)
    qc_sets = graphene.List(lambda: types.QCSetType)

    @staticmethod
    def mutate(root, info, samples, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create qc-sets")

        if not samples or len(samples) == 0:
            raise GraphQLError("There are No QC Requests to create")

        qc_sample_type = get_qc_sample_type()
        qc_samples = []
        qc_sets = []

        for qc_set_in in samples:
            qc_set_schema = schemas.QCSetCreate(name="Set", note="Auto Generated")
            qc_set = qc_models.QCSet.create(qc_set_schema)

            qc_levels = []
            qc_levels_uids = []
            if qc_set_in.qcTemplateUid:
                qc_template = qc_models.QCTemplate.get(uid=qc_set_in.qcTemplateUid)
                for level in qc_template.qc_levels:
                    if level.uid not in qc_levels_uids:
                        qc_levels.append(level)
                        qc_levels_uids.append(level.uid)

            if qc_set_in.qcLevels:
                for level_uid in qc_set_in.qcLevels:
                    if int(level_uid) not in qc_levels_uids:
                        level = qc_models.QCLevel.get(uid=int(level_uid))
                        qc_levels.append(level)
                        qc_levels_uids.append(level_uid)

            profiles = []
            analyses = []
            _profiles_analyses = set()

            if qc_set_in.analysisProfiles:
                for p_uid in qc_set_in.analysisProfiles:
                    profile = analysis_models.Profile.get(uid=p_uid)
                    profiles.append(profile)
                    analyses_ = profile.analyses
                    for _an in analyses_:
                        _profiles_analyses.add(_an)

            if qc_set_in.analysisServices:
                # make sure the selected analyses are not part of the selected profiles
                for a_uid in qc_set_in.analysisServices:
                    analysis = analysis_models.Analysis.get(uid=a_uid)
                    if analysis not in _profiles_analyses:
                        analyses.append(analysis)
                        _profiles_analyses.add(analysis)

            for level in qc_levels:
                # create qc_sample
                s_in = schemas.SampleCreate(
                    sampletype_uid=qc_sample_type.uid,
                    internal_use=True,
                    status=states.sample.PENDING,
                )
                sample: analysis_models.Sample = analysis_models.Sample.create(s_in)
                sample.analyses = analyses
                sample.profiles = profiles
                sample.qc_set_uid = qc_set.uid
                sample.qc_level_uid = level.uid
                sample.save()

                # Attach Analysis result for each Analyses
                for _service in _profiles_analyses:
                    a_result_in = {
                        'sample_uid': sample.uid,
                        'analysis_uid': _service.uid,
                        'status': states.result.PENDING
                    }
                    a_result_schema = schemas.AnalysisResultCreate(**a_result_in)
                    result_models.AnalysisResult.create(a_result_schema)

                qc_samples.append(sample)

            qc_sets.append(qc_set)

        return CreateQCSet(ok=True, samples=qc_samples, qc_sets=qc_sets)


#
# QCLevel Mutations
#
class CreateQCLevel(graphene.Mutation):
    class Arguments:
        level = graphene.String(required=True)

    ok = graphene.Boolean()
    qc_level = graphene.Field(lambda: types.QCLevelType)

    @staticmethod
    def mutate(root, info, level, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create qc-levels")

        if not level:
            raise GraphQLError("Level Name is mandatory")

        exists = qc_models.QCLevel.get(level=level)
        if exists:
            raise GraphQLError(f"A QCLevel named {level} already exists")

        incoming = {
            "level": level,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.QCLevelCreate(**incoming)
        qc_level = qc_models.QCLevel.create(obj_in)

        ok = True
        return CreateQCLevel(ok=ok, qc_level=qc_level)


class UpdateQCLevel(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        level = graphene.String(required=True)

    ok = graphene.Boolean()
    qc_level = graphene.Field(lambda: types.QCLevelType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update qc-levels")

        qc_level = qc_models.QCLevel.get(uid=uid)
        if not qc_level:
            raise GraphQLError(f"QCLevel with uid {uid} does not exist")

        qc_data = jsonable_encoder(qc_level)
        for field in qc_data:
            if field in kwargs:
                try:
                    setattr(qc_level, field, kwargs[field])
                except AttributeError as e:
                    # raise GraphQLError(f"{e}")
                    pass

        qc_in = schemas.QCTemplateUpdate(**qc_level.to_dict())
        qc_level.update(qc_in)

        ok = True
        return UpdateQCLevel(ok=ok, qc_level=qc_level)


#
# QCTemplate Mutations
#
class CreateQCTemplate(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        departments = graphene.List(graphene.String)
        levels = graphene.List(graphene.String)

    ok = graphene.Boolean()
    qc_template = graphene.Field(lambda: types.QCTemplateType)

    @staticmethod
    def mutate(root, info, name, description, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create qc-templates")

        if not name:
            raise GraphQLError("Name is mandatory")

        exists = qc_models.QCTemplate.get(name=name)
        if exists:
            raise GraphQLError(f"A QCTemplate named {name} already exists")

        incoming = {
            "name": name,
            "description": description,
        }
        for k, v in kwargs.items():
            if k not in ['levels', 'departments']:
                incoming[k] = v

        obj_in = schemas.QCTemplateCreate(**incoming)
        qc_template: qc_models.QCTemplate = qc_models.QCTemplate.create(obj_in)

        levels = kwargs.get('levels', None)
        qc_template.qc_levels.clear()
        if levels:
            for _uid in levels:
                level = qc_models.QCLevel.get(uid=_uid)
                if level not in qc_template.qc_levels:
                    qc_template.qc_levels.append(level)
        qc_template.save()

        departments = kwargs.get('departments', None)
        qc_template.departments.clear()
        if departments:
            for _uid in departments:
                dept = setup_models.Department.get(uid=_uid)
                if dept not in qc_template.departments:
                    qc_template.departments.append(dept)
        qc_template.save()

        ok = True
        return CreateQCTemplate(ok=ok, qc_template=qc_template)


class UpdateQCTemplate(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        description = graphene.String(required=False)
        departments = graphene.List(graphene.String)
        levels = graphene.List(graphene.String)

    ok = graphene.Boolean()
    qc_template = graphene.Field(lambda: types.QCTemplateType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        is_authenticated, felicity_user = auth_from_info(info)
        verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update qc-templates")

        qc_template = qc_models.QCTemplate.get(uid=uid)
        if not qc_template:
            raise GraphQLError(f"QCTemplate with uid {uid} does not exist")

        qc_data = jsonable_encoder(qc_template)
        for field in qc_data:
            if field in kwargs:
                try:
                    setattr(qc_template, field, kwargs[field])
                except AttributeError as e:
                    # raise GraphQLError(f"{e}")
                    pass

        qc_in = schemas.QCTemplateUpdate(**qc_template.to_dict())
        qc_template.update(qc_in)

        levels = kwargs.get('levels', None)
        qc_template.qc_levels.clear()
        if levels:
            for _uid in levels:
                level = qc_models.QCLevel.get(uid=_uid)
                if level not in qc_template.qc_levels:
                    qc_template.qc_levels.append(level)
        qc_template.save()

        departments = kwargs.get('departments', None)
        qc_template.departments.clear()
        if departments:
            for _uid in departments:
                dept = setup_models.Department.get(uid=_uid)
                if dept not in qc_template.departments:
                    qc_template.departments.append(dept)
        qc_template.save()

        ok = True
        return UpdateQCTemplate(ok=ok, qc_template=qc_template)


class AnalysisMutations(graphene.ObjectType):
    # SampleTye
    create_sample_type = CreateSampleType.Field()
    update_sample_type = UpdateSampleType.Field()
    # AnalysisCategory
    create_analysis_category = CreateAnalysisCategory.Field()
    update_analysis_category = UpdateAnalysisCategory.Field()
    # Profile
    create_profile = CreateProfile.Field()
    update_profile = UpdateProfile.Field()
    # Analysis
    create_analysis = CreateAnalysis.Field()
    update_analysis = UpdateAnalysis.Field()
    # QCSet
    create_qc_set = CreateQCSet.Field()
    # QCLevel
    create_qc_level = CreateQCLevel.Field()
    update_qc_level = UpdateQCLevel.Field()
    # QCTemplate
    create_qc_template = CreateQCTemplate.Field()
    update_qc_template = UpdateQCTemplate.Field()
    # AnalysisRequest
    create_analysis_request = CreateAnalysisRequest.Field()
    update_analysis_request = UpdateAnalysisRequest.Field()
    # AnalysisResults
    submit_analysis_results = SubmitAnalysisResults.Field()
    verify_analysis_results = VerifyAnalysisResults.Field()
    retest_analysis_results = RetestAnalysisResults.Field()
    retract_analysis_results = RetractAnalysisResults.Field()
    # Result options
    create_result_option = CreateResultOption.Field()
    update_result_option = UpdateResultOption.Field()
