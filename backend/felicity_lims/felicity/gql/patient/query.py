import graphene
from graphene import (
    relay,
    String,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

from felicity.apps.patient import models
from felicity.gql.patient.types import (
    PatientType,
)


class PatientQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # PatientType
    patient_all = SQLAlchemyConnectionField(PatientType.connection)
    patient_by_uid = graphene.Field(lambda: PatientType, uid=graphene.Int(default_value=None))
    patient_by_patient_id = graphene.Field(lambda: PatientType, patient_id=graphene.Int(default_value=None))
    
    def resolve_patient_by_uid(self, info, uid):
        query = models.Patient.get(uid=uid)
        return query
    
    def resolve_patient_by_patient_id(self, info, patient_id):
        query = models.Patient.get(patient_id=patient_id)
        return query