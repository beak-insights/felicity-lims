import strawberry
from typing import Optional


@strawberry.type
class LaboratoryType:
    uid: strawberry.ID
    setup_name: str
    lab_name: str
    lab_manager_uid: Optional[str]
    # lab_manager = relationship(User, backref="lab_manager")
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]

#
# # Graphene Supplier Type
# class SupplierType(SQLAlchemyObjectType):
#     class Meta:
#         model = Supplier
#         interfaces = (relay.Node, )
#
#
# # Graphene Instrument Type
# class InstrumentType(SQLAlchemyObjectType):
#     class Meta:
#         model = Instrument
#         interfaces = (relay.Node, )
#
#
# # Graphene Department Type
# class DepartmentType(SQLAlchemyObjectType):
#     class Meta:
#         model = Department
#         interfaces = (relay.Node, )
#
#
# # Graphene Method Type
# class MethodType(SQLAlchemyObjectType):
#     class Meta:
#         model = Method
#         interfaces = (relay.Node, )
#
#
# # Graphene District Type
# class DistrictType(SQLAlchemyObjectType):
#     class Meta:
#         model = District
#         interfaces = (relay.Node, )
#
# # Graphene Province Type
# class ProvinceType(SQLAlchemyObjectType):
#     class Meta:
#         model = Province
#         interfaces = (relay.Node, )
#
# # Graphene Country Type
# class CountryType(SQLAlchemyObjectType):
#     class Meta:
#         model = Country
#         interfaces = (relay.Node, )
