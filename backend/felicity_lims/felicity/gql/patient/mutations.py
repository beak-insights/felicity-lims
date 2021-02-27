import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.patient import models, schemas
from felicity.apps.client import models as client_models
from felicity.gql.patient.types import (
    PatientType,
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 
# Laboratory Mutations
# 
class CreatePatient(graphene.Mutation):
    class Arguments:
        client_uid = graphene.Int(required=True)
        client_patient_id = graphene.String(required=True)
        first_name = graphene.String(required=True)
        middle_name = graphene.String(required=False)
        last_name = graphene.String(required=True)        
        gender = graphene.Int(required=True)
        age = graphene.String(required=False)
        date_of_birth = graphene.String(required=False)
        age_dob_estimated = graphene.Boolean(required=False)
        phone_mobile = graphene.String(required=False)
        phone_home = graphene.String(required=False)
        consent_sms = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    patient = graphene.Field(lambda: PatientType)

    @staticmethod
    def mutate(root, info, client_patient_id, first_name, last_name, client_uid, **kwargs):
        if not client_patient_id or not first_name or not last_name or not client_uid:
            raise GraphQLError("Client Patient Id, First Name and Last Name , gender etc are required")

        exists = models.Patient.get(client_patient_id=client_patient_id)
        if exists:
            raise GraphQLError(f"Client Patient Id already in use")
        
        client = client_models.Client.get(uid=client_uid)
        if not client:
            raise GraphQLError(f"Client with uid {client_uid} does not exist")

        incoming = {
            "client_patient_id": client_patient_id,
            "first_name": first_name,
            "last_name": last_name,
            "client_uid": client_uid,
            "active": True,
        }
        for k, v in kwargs.items():
            incoming[k] = v
        
        # Dirty patient_id Getter 
        # Im skeptical of the way i am creating the patient_id especially if there are many queries
        # almost at the same time that might have the same patient id
        # give_up = 20
        # i = 0
        # while True:
        #     patient_id = models.Patient.create_patient_id()
        #     incoming["patient_id"] = patient_id
        #     obj_in = schemas.PatientCreate(**incoming)
        #     error = ""            
        #     try:                  
        #         patient = models.Patient.create(obj_in)
        #         break            
        #     except Exception as e:
        #         error = e
                
        #     if i == give_up: # give up
        #         raise GraphQLError(f"Exception:  {error}")
            
        #     # retry again            
        #     i+=1
        
        obj_in = schemas.PatientCreate(**incoming)
        patient = models.Patient.create(obj_in)
            
        ok = True
        return CreatePatient(patient=patient, ok=ok)

                
class UpdatePatient(graphene.Mutation):
    class Arguments:
        uid = graphene.Int(required=True)
        client_uid = graphene.Int(required=False)
        client_patient_id = graphene.String(required=True)
        first_name = graphene.String(required=True)
        middle_name = graphene.String(required=False)
        last_name = graphene.String(required=True)        
        gender = graphene.Int(required=True)
        age = graphene.String(required=False)
        date_of_birth = graphene.String(required=False)
        age_dob_estimated = graphene.Boolean(required=False)
        phone_mobile = graphene.String(required=False)
        phone_home = graphene.String(required=False)
        consent_sms = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    patient = graphene.Field(lambda: PatientType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        patient = models.Patient.get(uid=uid)
        if not patient:
            raise GraphQLError(f"patient with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(patient)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(patient, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.PatientUpdate(**patient.to_dict())    
        patient = patient.update(obj_in)
        ok = True
        return UpdatePatient(ok=ok, patient=patient)
    
    
    
class PatientMutations(graphene.ObjectType):
    # Patient
    create_patient = CreatePatient.Field()
    update_patient = UpdatePatient.Field()