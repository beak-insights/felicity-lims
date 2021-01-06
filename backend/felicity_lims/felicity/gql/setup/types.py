from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.setup.models import (
    Laboratory,
    Supplier,
    Instrument,
    Department,
    Method,
    Country,
    Province,
    District,
)

# Graphene User Type
class LaboratoryType(SQLAlchemyObjectType):
    class Meta:
        model = Laboratory
        interfaces = (relay.Node, )
        

# Graphene Supplier Type
class SupplierType(SQLAlchemyObjectType):
    class Meta:
        model = Supplier
        interfaces = (relay.Node, )
        

# Graphene Instrument Type
class InstrumentType(SQLAlchemyObjectType):
    class Meta:
        model = Instrument
        interfaces = (relay.Node, )
        

# Graphene Department Type
class DepartmentType(SQLAlchemyObjectType):
    class Meta:
        model = Department
        interfaces = (relay.Node, )


# Graphene Method Type
class MethodType(SQLAlchemyObjectType):
    class Meta:
        model = Method
        interfaces = (relay.Node, )
        
        
# Graphene District Type
class DistrictType(SQLAlchemyObjectType):
    class Meta:
        model = District
        interfaces = (relay.Node, )
        
# Graphene Province Type
class ProvinceType(SQLAlchemyObjectType):
    class Meta:
        model = Province
        interfaces = (relay.Node, )
        
# Graphene Country Type
class CountryType(SQLAlchemyObjectType):
    class Meta:
        model = Country
        interfaces = (relay.Node, )