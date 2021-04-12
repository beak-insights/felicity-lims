import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.worksheet.tasks import populate_worksheet_plate
from felicity.apps.job import (
    models as job_models,
    schemas as job_schemas
)
from felicity.apps.job.sched import felicity_resume_workforce
from felicity.apps.user import models as user_models
from felicity.apps.worksheet import models, schemas, tasks, conf
from felicity.gql.worksheet.types import WorkSheetType, WorkSheetTemplateType
from felicity.apps.job.conf import actions, categories, priorities, states
from felicity.apps.analysis import models as analysis_models

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)



#
# WorkSheetTemplate Mutations
#

class ReservedInputType(graphene.InputObjectType):
    position = graphene.Int()
    name = graphene.String(required=True)
    # row = graphene.String(required=False)
    # col = graphene.String(required=False)
    # sample_uid = graphene.String(required=False)


class CreateWorkSheetTemplate(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        sample_type_uid = graphene.String(required=True)
        analyses = graphene.List(graphene.String, required=True)
        description = graphene.String(required=False)
        reserved = graphene.List(ReservedInputType, required=True)
        number_of_samples = graphene.String(required=False)
        worksheet_type = graphene.String(required=False)
        rows = graphene.String(required=False)
        cols = graphene.String(required=False)
        row_wise = graphene.Boolean(required=False)
        profiles = graphene.List(graphene.String)
        instrument_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    worksheet_template = graphene.Field(lambda: WorkSheetTemplateType)

    @staticmethod
    def mutate(root, info, name, sample_type_uid, analyses, **kwargs):
        if not name or not sample_type_uid or not len(analyses) > 0:
            raise GraphQLError("Template name and sample type and analsyis are mandatory")

        taken = models.WorkSheetTemplate.get(name=name)
        if taken:
            raise GraphQLError(f"WorkSheet Template with name {taken.name} already exist")

        sample_type = analysis_models.SampleType.get(uid=sample_type_uid)
        if not sample_type:
            raise GraphQLError(f"Sample Type with uid {sample_type_uid} does not exist")

        incoming = {
            "name": name,
            "sample_type_uid": sample_type_uid, \
            }
        for k, v in kwargs.items():
            incoming[k] = v

        reserved = kwargs.get('reserved', None)
        incoming['reserved'] = []
        if reserved:
            positions = dict()
            for item in reserved:
                positions[item['position']] = item
            incoming['reserved'] = positions

        _analyses = []
        if analyses:
            for _uid in analyses:
                anal = analysis_models.Analysis.get(uid=_uid)
                if anal not in _analyses:
                    _analyses.append(anal)

        wst_schema = schemas.WSTemplateCreate(**incoming)
        wst = models.WorkSheetTemplate.create(wst_schema)

        wst.analyses = _analyses
        wst.save()

        ok = True
        return CreateWorkSheetTemplate(worksheet_template=wst, ok=ok)


class UpdateWorkSheetTemplate(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=True)
        sample_type_uid = graphene.String(required=True)
        analyses = graphene.List(graphene.String, required=True)
        description = graphene.String(required=False)
        reserved = graphene.List(ReservedInputType, required=True)
        number_of_samples = graphene.String(required=False)
        worksheet_type = graphene.String(required=False)
        rows = graphene.String(required=False)
        cols = graphene.String(required=False)
        row_wise = graphene.Boolean(required=False)
        profiles = graphene.List(graphene.String)
        instrument_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    worksheet_template = graphene.Field(lambda: WorkSheetTemplateType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        if not uid:
            raise GraphQLError("Worksheet Template uid is required")

        ws_template = models.WorkSheetTemplate.get(uid=uid)
        if not ws_template:
            raise GraphQLError(f"WorkSheet Template with uid {uid} not found")

        wst_data = jsonable_encoder(ws_template)
        for field in wst_data:
            if field in kwargs:
                try:
                    setattr(ws_template, field, kwargs[field])
                except AttributeError as e:
                    # raise GraphQLError(f"{e}")
                    pass

        reserved = kwargs.get('reserved', None)
        if reserved:
            positions = dict()
            for item in reserved:
                positions[item['position']] = item
            setattr(ws_template, 'reserved', positions)

        wst_schema = schemas.WSTemplateUpdate(**ws_template.to_dict())
        ws_template.update(wst_schema)

        _analyses = []
        analyses = kwargs.get('analyses', None)
        if analyses:
            for _uid in analyses:
                anal = analysis_models.Analysis.get(uid=_uid)
                if anal not in _analyses:
                    _analyses.append(anal)

        ws_template.analyses = _analyses
        ws_template.save()

        ok = True
        return UpdateWorkSheetTemplate(worksheet_template=ws_template, ok=ok)


#
# Laboratory Mutations
# 
class CreateWorkSheet(graphene.Mutation):
    class Arguments:
        template_uid = graphene.Int(required=True)
        analyst_uid = graphene.Int(required=True)

    ok = graphene.Boolean()
    worksheet = graphene.Field(lambda: WorkSheetType)

    @staticmethod
    def mutate(root, info, template_uid, analyst_uid, **kwargs):
        if not template_uid or not analyst_uid:
            raise GraphQLError("Analyst and Template are mandatory")

        ws_temp = models.WorkSheetTemplate.get(uid=template_uid)
        if not ws_temp:
            raise GraphQLError(f"WorkSheet Template {template_uid} does not exist")

        analyst = user_models.User.get(uid=analyst_uid)
        if not analyst:
            raise GraphQLError(f"Selected Analyst {analyst_uid} does not exist")

        incoming = {
            "template_uid": template_uid,
            "analyst_uid": analyst_uid,
            "instrument_uid": ws_temp.instrument_uid,
            "sample_type_uid": ws_temp.sample_type_uid,
            "worksheet_id": None,
            "reserved": ws_temp.reserved,
            "number_of_samples": ws_temp.number_of_samples,
            "rows": ws_temp.rows,
            "cols": ws_temp.cols,
            "row_wise": ws_temp.row_wise,
            "state": conf.worksheet_states.PENDING_ASSIGNMENT,
        }

        ws_schema = schemas.WorkSheetCreate(**incoming)
        ws = models.WorkSheet.create(ws_schema)
        ws.analyses = ws_temp.analyses
        ws.save()

        # Add a job
        job_schema = job_schemas.JobCreate(
            action=actions.WS_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            job_id=ws.uid,
            status=states.PENDING
        )
        job = job_models.Job.create(job_schema)
        # felicity_resume_workforce()
        tasks.populate_worksheet_plate(job.uid)

        ok = True
        return CreateWorkSheet(worksheet=ws, ok=ok)


# UpdateWorksheet: action=[verify, submit, assign, unassign', sample_ids]
class UpdateWorkSheet(graphene.Mutation):
    class Arguments:
        worksheet_uid = graphene.Int(required=True)
        analyst_uid = graphene.Int(required=False)
        action = graphene.String(required=True)  # verify, submit, assign, unassign etc
        samples = graphene.Int(required=False)  # must be a List of sample_uids

    ok = graphene.Boolean()
    worksheet = graphene.Field(lambda: WorkSheetType)

    @staticmethod
    def mutate(root, info, template_uid, analyst_uid, **kwargs):
        if not template_uid or not analyst_uid:
            raise GraphQLError("Analyst and Template are mandatory")

        ws_temp = models.WorkSheetTemplate.get(uid=template_uid)
        if not ws_temp:
            raise GraphQLError(f"WorkSheet Template {template_uid} does not exist")

        analyst = user_models.User.get(uid=analyst_uid)
        if not analyst:
            raise GraphQLError(f"Selected Analyst {analyst_uid} does not exist")

        incoming = {
            "template_uid": template_uid,
            "analyst_uid": analyst_uid,
            "instrument_uid": ws_temp.instrument_uid,
            "worksheet_id": models.WorkSheet.create_worksheet_id(),
            "reserved": ws_temp.reserved,
            "number_of_samples": ws_temp.number_of_samples,
            "rows": ws_temp.rows,
            "cols": ws_temp.cols,
            "row_wise": ws_temp.row_wise,
        }

        ws_schema = schemas.WorkSheetCreate(**incoming)
        ws = models.WorkSheet.create(ws_schema)

        # Add a job
        job_schema = job_schemas.JobCreate(
            action=actions.WS_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            job_id=ws.uid,
            status=states.PENDING
        )
        # job = job_models.Job.create(job_schema)

        # Add WorkSheet Population as a bg task

        ok = True
        return CreateWorkSheet(worksheet=ws, ok=ok)


#
# Laboratory Mutations
#
class UpdateWorkSheetApplyTemplate(graphene.Mutation):
    class Arguments:
        worksheet_uid = graphene.Int(required=True)
        template_uid = graphene.Int(required=True)

    ok = graphene.Boolean()
    worksheet = graphene.Field(lambda: WorkSheetType)

    @staticmethod
    def mutate(root, info, template_uid, worksheet_uid, **kwargs):
        if not template_uid or not worksheet_uid:
            raise GraphQLError("Template and Worksheet are required")

        ws = models.WorkSheet.get(uid=worksheet_uid)
        if not ws:
            raise GraphQLError(f"WorkSheet {worksheet_uid} does not exist")

        ws_temp = models.WorkSheetTemplate.get(uid=template_uid)
        if not ws_temp:
            raise GraphQLError(f"WorkSheet Template {template_uid} does not exist")

        incoming = {
            "template_uid": template_uid,
            "instrument_uid": ws_temp.instrument_uid,
            "sample_type_uid": ws_temp.sample_type_uid,
            "reserved": ws_temp.reserved,
            "number_of_samples": ws_temp.number_of_samples,
            "rows": ws_temp.rows,
            "cols": ws_temp.cols,
            "row_wise": ws_temp.row_wise,
            "state": conf.worksheet_states.PENDING_ASSIGNMENT,
        }

        ws_schema = schemas.WorkSheetUpdate(**incoming)
        ws.update(ws_schema)
        ws.analyses = ws_temp.analyses
        ws.save()

        # Add a job
        job_schema = job_schemas.JobCreate(
            action=actions.WS_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            job_id=ws.uid,
            status=states.PENDING
        )
        job = job_models.Job.create(job_schema)
        # felicity_resume_workforce()
        tasks.populate_worksheet_plate(job.uid)

        ok = True
        return UpdateWorkSheetApplyTemplate(worksheet=ws, ok=ok)


class WorkSheetMutations(graphene.ObjectType):
    # WorkSheet Template
    create_worksheet_template = CreateWorkSheetTemplate.Field()
    update_worksheet_template = UpdateWorkSheetTemplate.Field()
    # WorkSheet
    create_worksheet = CreateWorkSheet.Field()
    update_worksheet_apply_template = UpdateWorkSheetApplyTemplate.Field()
