from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.patient.models import (
    Patient
)

# Graphene Patient Type
class PatientType(SQLAlchemyObjectType):
    class Meta:
        model = Patient
        interfaces = (relay.Node, )
        
