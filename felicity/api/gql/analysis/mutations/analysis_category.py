import logging
from typing import Optional

import strawberry  # noqa

from felicity.api.gql.analysis.types import analysis as a_types
from felicity.api.gql.auth import auth_from_info, verify_user_auth
from felicity.api.gql.permissions import IsAuthenticated
from felicity.api.gql.types import OperationError
from felicity.apps.analysis import schemas
from felicity.apps.analysis.models import analysis as analysis_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

AnalysisCategoryResponse = strawberry.union(
    "AnalysisCategoryResponse",
    (a_types.AnalysisCategoryType, OperationError),  # noqa
    description="Union of possible outcomes when adding a new notice",
)


@strawberry.input
class AnalysisCategoryInputType:
    name: str
    department_uid: str | None = None
    description: str | None = None
    active: bool | None = True


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_category(
    info, payload: AnalysisCategoryInputType
) -> AnalysisCategoryResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can create analysis categories",
    )

    if not payload.name or not payload.description:
        return OperationError(
            error="Name and Description are mandatory",
            suggestion="Make sure the fields name and description are not empty",
        )

    exists = await analysis_models.AnalysisCategory.get(name=payload.name)
    if exists:
        return OperationError(
            error=f"AnalysisCategory named {payload.name} already exists",
            suggestion="Change the name for the category to something else",
        )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisCategoryCreate(**incoming)
    analysis_category: analysis_models.AnalysisCategory = (
        await analysis_models.AnalysisCategory.create(obj_in)
    )
    return a_types.AnalysisCategoryType(**analysis_category.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_category(
    self, info, uid: str, payload: AnalysisCategoryInputType
) -> AnalysisCategoryResponse:  # noqa

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis categories",
    )

    analysis_category = await analysis_models.AnalysisCategory.get(uid=uid)
    if not analysis_category:
        return OperationError(
            error=f"AnalysisCategory with uid {uid} does not exist",
            suggestion="Refresh page and try again",
        )

    ac_data = analysis_category.to_dict()
    for field in ac_data:
        if field in payload.__dict__:
            try:
                setattr(analysis_category, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    profile_in = schemas.AnalysisCategoryUpdate(**analysis_category.to_dict())
    analysis_category = await analysis_category.update(profile_in)
    return a_types.AnalysisCategoryType(**analysis_category.marshal_simple())
