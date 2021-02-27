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

import logging
class PatientQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # PatientType
    patient_all = SQLAlchemyConnectionField(PatientType.connection)
    patient_by_uid = graphene.Field(lambda: PatientType, uid=graphene.Int(default_value=None))
    patient_by_patient_id = graphene.Field(lambda: PatientType, patient_id=graphene.Int(default_value=None))
    patient_search = graphene.List(lambda: PatientType, query_string=graphene.String(default_value=""))
    
    def resolve_patient_by_uid(self, info, uid):
        query = models.Patient.get(uid=uid)
        return query
    
    def resolve_patient_by_patient_id(self, info, patient_id):
        query = models.Patient.get(patient_id=patient_id)
        return query
    
    def resolve_patient_search(self, info, query_string):
        filters = ['first_name__ilike', 'middle_name__ilike', 'last_name__ilike', 'patient_id__ilike',
                   'client_patient_id__ilike', 'phone_mobile__ilike', 'phone_home__ilike']
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = models.Patient.where(**arg).all()
            logging.info(query)
            for item in query:
                combined.add(item)
        return list(combined)