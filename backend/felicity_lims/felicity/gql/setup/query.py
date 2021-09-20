import strawberry
from typing import List

from felicity.apps.setup import models
from felicity.gql.setup.types import (
    LaboratoryType,
    # SupplierType,
    # DepartmentType,
    # InstrumentType,
    # MethodType,
    # CountryType,
    # ProvinceType,
    # DistrictType,
)


async def get_all_laboratories() -> List[LaboratoryType]:
    return await models.Laboratory.all()


@strawberry.type
class SetupQuery:
    laboratory_all: List[LaboratoryType] = strawberry.field(resolver=get_all_laboratories)
    # # Supplier
    # supplier_all = SQLAlchemyConnectionField(SupplierType.connection)
    # # Department
    # department_all = SQLAlchemyConnectionField(DepartmentType.connection)
    # # Instrument
    # instrument_all = SQLAlchemyConnectionField(InstrumentType.connection)
    # # Method
    # method_all = SQLAlchemyConnectionField(MethodType.connection)
    # # District Queries
    # district_all = SQLAlchemyConnectionField(DistrictType.connection)
    # # Province Queries
    # province_all = SQLAlchemyConnectionField(ProvinceType.connection)
    # # Country Queries
    # country_all = SQLAlchemyConnectionField(CountryType.connection)
    
    # def resolve_laboratory_by_uid(self, info, uid):
    #     query = models.Laboratory.get(uid=uid)
    #     return query
    #
    # def resolve_supplier_by_uid(self, info, uid):
    #     query = models.Supplier.get(uid=uid)
    #     return query
    #
    # def resolve_department_by_uid(self, info, uid):
    #     query = models.Department.get(uid=uid)
    #     return query
    #
    # def resolve_instrument_by_uid(self, info, uid):
    #     query = models.Instrument.get(uid=uid)
    #     return query
    #
    # def resolve_method_by_uid(self, info, uid):
    #     query = models.Method.get(uid=uid)
    #     return query
    #
    # def resolve_district_by_uid(self, info, uid):
    #     district= models.District.get(uid=uid)
    #     return district
    #
    # def resolve_districts_by_province_uid(self, info, uid):
    #     districts = models.District.where(province_uid__exact=uid).all()
    #     return districts
    #
    # def resolve_province_by_uid(self, info, uid):
    #     province= models.Province.get(uid=uid)
    #     return province
    #
    # def resolve_provinces_by_country_uid(self, info, uid):
    #     provinces = models.Province.where(country_uid__exact=uid).all()
    #     return provinces
    #
    # def resolve_country_by_uid(self, info, uid):
    #     country= models.Country.find(uid)
    #     return country
