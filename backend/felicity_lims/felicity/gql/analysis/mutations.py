import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.patient import models as pt_models
from felicity.apps.client import models as ct_models
from felicity.apps.analysis import models
from felicity.apps.analysis import schemas
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
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample_type = graphene.Field(lambda: types.SampleTypeTyp)

    @staticmethod
    def mutate(root, info, name, abbr, active=True, **kwargs):
        if not name or not abbr:
            raise GraphQLError("Name and Description are mandatory")

        exists = models.SampleType.get(name=name)
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
        sample_type = models.SampleType.create(obj_in)
        ok = True
        return CreateSampleType(ok=ok, sample_type=sample_type)


class UpdateSampleType(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        abbr = graphene.String(required=False)
        description = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample_type = graphene.Field(lambda: types.SampleTypeTyp)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        sampletype = models.SampleType.get(uid=uid)
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
        logger.info("hello there 1")
        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = models.AnalysisCategory.get(name=name)
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
        analysis_category = models.AnalysisCategory.create(obj_in)
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
    def mutate(root, info, uid, **kwargs):
        analysis_category = models.AnalysisCategory.get(uid=uid)
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
        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = models.Profile.get(name=name)
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
        profile = models.Profile.create(obj_in)
        ok = True
        return CreateProfile(ok=ok, profile=profile)


class UpdateProfile(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=False)
        keyword = graphene.String(required=False)
        description = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    profile = graphene.Field(lambda: types.ProfileType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        profile = models.Profile.get(uid=uid)
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
        profiles = graphene.List(graphene.String)
        sample_types = graphene.List(graphene.String)
        category_uid = graphene.String(required=False)
        active = graphene.Boolean(required=True)

    ok = graphene.Boolean()
    analysis = graphene.Field(lambda: types.AnalysisType)

    @staticmethod
    def mutate(root, info, name, description, keyword, active=True, **kwargs):
        if not name or not description:
            raise GraphQLError("Name and Description are mandatory")

        exists = models.Analysis.get(name=name)
        if exists:
            raise GraphQLError(f"A analysis named {name} already exists")

        exists = models.Analysis.get(keyword=keyword)
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

        profiles = kwargs.get('profiles', None)
        incoming['profiles'] = []
        if profiles:
            for _uid in profiles:
                prof = models.Profile.get(uid=_uid)
                if prof not in incoming['profiles']:
                    incoming['profiles'].append(prof)

        sample_types = kwargs.get('sampletypes', None)
        incoming['sample_types'] = []
        if sample_types:
            for _uid in sample_types:
                stype = models.SampleType.get(uid=_uid)
                if stype not in incoming['sample_types']:
                    incoming['sampletypes'].append(stype)

        obj_in = schemas.AnalysisCreate(**incoming)  # skip this stage if its not adding analyses and stypes
        analysis = models.Analysis.create(obj_in)
        ok = True
        return CreateAnalysis(ok=ok, analysis=analysis)


class UpdateAnalysis(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        keyword = graphene.String(required=True)
        profiles = graphene.List(graphene.String)
        category_uid = graphene.String(required=False)
        sample_types = graphene.List(graphene.String)
        active = graphene.Boolean(required=True)

    ok = graphene.Boolean()
    analysis = graphene.Field(lambda: types.AnalysisType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        analysis = models.Analysis.get(uid=uid)
        if not analysis:
            raise GraphQLError(f"Analysis with uid {uid} does not exist -- cannot update")

        analysis_data = jsonable_encoder(analysis)
        for field in analysis_data:
            if field in kwargs:
                try:
                    setattr(analysis, field, kwargs[field])
                except AttributeError as e:
                    pass

        profiles = kwargs.get('profiles', None)
        analysis.profiles.clear()
        if profiles:
            for _uid in profiles:
                prof = models.Profile.get(uid=_uid)
                if prof not in analysis.profiles:  # analysis_data['profiles'] ??
                    analysis.profiles.append(prof)

        sample_types = kwargs.get('sample_types', None)
        analysis.sampletypes.clear()
        if sample_types:
            for _uid in sample_types:
                stype = models.SampleType.get(uid=_uid)
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
        priority = graphene.Int(required=False)

    ok = graphene.Boolean()
    analysisrequest = graphene.Field(lambda: types.AnalysisRequestType)

    @staticmethod
    def mutate(root, info, patient_uid, client_uid, priority=0, **kwargs):
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
            "request_id": None,  # models.AnalysisRequest.create_request_id(),
            "client_request_id": kwargs.get('client_request_id', None)
        }

        obj_in = schemas.AnalysisRequestCreate(**incoming)
        analysisrequest = models.AnalysisRequest.create(obj_in)

        # 1. create samples
        for s in samples:
            _st_uid = s['sample_type']
            _profiles = s['profiles']
            _analyses = s['analyses']
            stype = models.SampleType.get(uid=_st_uid)
            if not stype:
                raise GraphQLError(f"Error, failed to retrieve sample type {_st_uid}")

            sample_in = {
                'analysisrequest_uid': analysisrequest.uid,
                'sampletype_uid': _st_uid,
                'sample_id': None,  # models.Sample.create_sample_id(sampletype=stype),
                'priority': priority,
                'status': states.sample.PENDING
            }

            profiles = []
            analyses = []
            _profiles_analyses = set()

            logger.info(s)
            logger.info(_profiles)
            for p_uid in _profiles:
                profile = models.Profile.get(uid=p_uid)
                profiles.append(profile)
                analyses_ = models.Analysis.where(uid__exact=profile.uid).all()
                for _an in analyses_:
                    _profiles_analyses.add(_an)

            # make sure the selected analyses are not part of the selected profiles
            for a_uid in _analyses:
                analysis = models.Analysis.get(uid=a_uid)
                if analysis not in _profiles_analyses:
                    analyses.append(analysis)
                    _profiles_analyses.add(analysis)

            sample_schema = schemas.SampleCreate(**sample_in)
            sample = models.Sample.create(sample_schema)
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
                models.AnalysisResult.create(a_result_schema)

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
        client_request_id = graphene.String(required=False)

    ok = graphene.Boolean()
    analysisrequest = graphene.Field(lambda: types.AnalysisRequestType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        analysisrequest = models.AnalysisRequest.get(uid=uid)
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
        cancel = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    sample = graphene.Field(lambda: types.SampleType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        sample = models.Sample.get(uid=uid)
        if not sample:
            raise GraphQLError(f"Sample with uid {uid} not found")
        if kwargs.get('cancel'):
            sample.cancel()
        else:
            # TODO: remove/change profile/analyses if no results yet
            pass

        ok = True
        return UpdateSample(ok, sample=sample)


class ARResultInputType(graphene.InputObjectType):
    uid = graphene.String(required=True)
    result = graphene.String(required=False)


class SubmitAnalysisResults(graphene.Mutation):
    class Arguments:
        analysis_results = graphene.List(ARResultInputType, required=True)

    ok = graphene.Boolean()
    analysis_results = graphene.List(lambda: types.AnalysisResultType)

    @staticmethod
    def mutate(root, info, analysis_results, **kwargs):
        return_results = []

        if len(analysis_results) == 0:
            raise GraphQLError(f"No Results to update are provided!")

        for _ar in analysis_results:
            uid = _ar['uid']
            a_result = models.AnalysisResult.get(uid=uid)
            if not a_result:
                raise GraphQLError(f"AnalysisResult with uid {uid} not found")

            analysis_result = jsonable_encoder(a_result)
            for field in analysis_result:
                if field in _ar:
                    try:
                        setattr(a_result, field, _ar[field])
                    except AttributeError as e:
                        pass

            setattr(a_result, 'status', states.result.RESULTED)

            a_result_in = schemas.AnalysisResultUpdate(**a_result.to_dict())
            a_result.update(a_result_in)

            # TODO: check if all sibling analyses for connected sample are to_be_verified and change sample state \
            # to to_be_verified

            return_results.append(a_result)

        ok = True
        return SubmitAnalysisResults(ok, analysis_results=return_results)


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
    # AnalysisRequest
    create_analysis_request = CreateAnalysisRequest.Field()
    update_analysis_request = UpdateAnalysisRequest.Field()
    # AnalysisResults
    submit_analysis_results = SubmitAnalysisResults.Field()
