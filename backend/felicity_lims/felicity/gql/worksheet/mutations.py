
import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder
from fastapi import BackgroundTasks

from felicity.apps.worksheet.tasks import populate_worksheet_plate
from felicity.apps.job import models as job_models, schemas as job_schemas
from felicity.apps.user import models as user_models
from felicity.apps.worksheet import models, schemas
from felicity.gql.worksheet.types import WorkSheetType
from felicity.apps.job.conf import actions, categories, priorities, states

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

background_tasks = BackgroundTasks()
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
            action = actions.WS_ASSIGN,
            category = categories.WORKSHEET,
            priority = priorities.MEDIUM,
            job_id = ws.uid,
            status = states.PENDING
        )
        job = job_models.Job.create(job_schema)
        
        # Add WorkSheet Population as a bg task
        background_tasks.add_task(populate_worksheet_plate, job.uid)
     
        ok = True
        return CreateWorkSheet(worksheet=ws, ok=ok)

                

# UpdateWorksheet: action=[verify, submit, assign, unassign', sample_ids]
class UpdateWorkSheet(graphene.Mutation):
    class Arguments:
        worksheet_uid = graphene.Int(required=True)
        analyst_uid = graphene.Int(required=False)
        action = graphene.String()(required=True) # verify, submit, assign, unassign etc
        samples = graphene.Int(required=False) # must be a List of sample_uids

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
            action = actions.WS_ASSIGN,
            category = categories.WORKSHEET,
            priority = priorities.MEDIUM,
            job_id = ws.uid,
            status = states.PENDING
        )
        job = job_models.Job.create(job_schema)
        
        # Add WorkSheet Population as a bg task
        background_tasks.add_task(populate_worksheet_plate, job.uid)
     
        ok = True
        return CreateWorkSheet(worksheet=ws, ok=ok)
    
       
class WorkSheetMutations(graphene.ObjectType):
    # WorkSheet
    create_worksheet = CreateWorkSheet.Field()