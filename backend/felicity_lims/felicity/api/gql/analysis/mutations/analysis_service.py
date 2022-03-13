import logging
from dataclasses import field
from typing import List, Optional

import strawberry  # noqa
from felicity.apps.analysis import schemas
from felicity.apps.setup.models import Method
from felicity.apps.analysis.models import analysis as analysis_models
from felicity.api.gql import OperationError, auth_from_info, verify_user_auth
from felicity.api.gql.analysis.types import analysis as a_types

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.input
class AnalysisInputType:
    name: str
    keyword: str
    sort_key: int
    description: str = ""
    department_uid: Optional[int] = None
    sample_types: Optional[List[int]] = field(default_factory=list)
    methods: Optional[List[int]] = field(default_factory=list)
    category_uid: Optional[int] = None
    unit_uid: Optional[int] = None
    internal_use: Optional[bool] = False
    tat_length_minutes: int = None
    unit: str = None
    active: Optional[bool] = True


ProfilesServiceResponse = strawberry.union("ProfilesServiceResponse",
                                           (a_types.AnalysisWithProfiles, OperationError),  # noqa
                                           description=""
                                           )


@strawberry.mutation
async def create_analysis(info, payload: AnalysisInputType) -> ProfilesServiceResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can create analysis")

    if not payload.name or not payload.description:
        return OperationError(
            error="Name and Description are mandatory"
        )

    exists = await analysis_models.Analysis.get(name=payload.name)
    if exists:
        return OperationError(
            error=f"A analysis named {payload.name} already exists"
        )

    exists = await analysis_models.Analysis.get(keyword=payload.keyword)
    if exists:
        return OperationError(
            error=f"Analysis Keyword {payload.keyword} is not unique"
        )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        if k not in ['sample_types']:
            incoming[k] = v

    obj_in = schemas.AnalysisCreate(**incoming)
    analysis: analysis_models.Analysis = await analysis_models.Analysis.create(obj_in)

    if payload.sample_types:
        for uid in payload.sample_types:
            st = await analysis_models.SampleType.get(uid=uid)
            analysis.sample_types.append(st)
        analysis = await analysis.save()

    if payload.methods:
        for uid in payload.methods:
            meth = await Method.get(uid=uid)
            analysis.methods.append(meth)
        analysis = await analysis.save()

    profiles = analysis_models.Profile.get_all(analyses___uid=analysis.uid)

    return a_types.AnalysisWithProfiles(**analysis.marshal_simple(), profiles=profiles)


@strawberry.mutation
async def update_analysis(info, uid: int, payload: AnalysisInputType) -> ProfilesServiceResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(is_authenticated, felicity_user, "Only Authenticated user can update analysis")

    analysis = await analysis_models.Analysis.get(uid=uid)
    if not analysis:
        return OperationError(
            error=f"Analysis with uid {uid} does not exist -- cannot update"
        )

    analysis_data = analysis.to_dict()
    for field in analysis_data:
        if field in payload.__dict__:
            try:
                setattr(analysis, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisUpdate(**analysis.to_dict(nested=False))
    analysis = await analysis.update(analysis_in)

    if payload.sample_types:
        analysis.sample_types.clear()
        analysis = await analysis.save()
        for _uid in payload.sample_types:
            stype = await analysis_models.SampleType.get(uid=_uid)
            analysis.sample_types.append(stype)
        analysis = await analysis.save()

    if payload.methods:
        analysis.methods.clear()
        analysis = await analysis.save()
        for _uid in payload.methods:
            meth = await Method.get(uid=_uid)
            await Method.table_insert(
                table=analysis_models.analysis_method,
                mappings={
                    "method_uid": meth.uid,
                    "analysis_uid": analysis.uid
                }
            )
        analysis = await analysis.get(uid=analysis.uid)

    profiles = analysis_models.Profile.get_all(analyses___uid=analysis.uid)

    return a_types.AnalysisWithProfiles(**analysis.marshal_simple(), profiles=profiles)