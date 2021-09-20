import strawberry
from typing import List, Optional

from felicity.apps.setup import models
from felicity.gql.setup.types import (
    LaboratoryType,
    SupplierType,
    DepartmentType,
    InstrumentType,
    MethodType,
    CountryType,
    ProvinceType,
    DistrictType,
)


async def get_all_laboratories() -> List[LaboratoryType]:
    return await models.Laboratory.all()


async def get_all_suppliers() -> List[SupplierType]:
    return await models.Supplier.all()


async def get_all_departments() -> List[DepartmentType]:
    return await models.Department.all()


async def get_all_instruments() -> List[InstrumentType]:
    return await models.Instrument.all()


async def get_all_methods() -> List[MethodType]:
    return await models.Method.all()


async def get_all_districts() -> List[DistrictType]:
    return await models.District.all()


async def get_all_provinces() -> List[ProvinceType]:
    return await models.Province.all()


async def get_all_countries() -> List[CountryType]:
    return await models.Country.all()


@strawberry.type
class SetupQuery:
    laboratory_all: List[LaboratoryType] = strawberry.field(resolver=get_all_laboratories)

    @strawberry.field
    async def laboratory_by_uid(self, info, uid: int) -> Optional[LaboratoryType]:
        query = await models.Laboratory.get(uid=uid)
        return query

    supplier_all: List[SupplierType] = strawberry.field(resolver=get_all_suppliers)

    @strawberry.field
    async def supplier_by_uid(self, info, uid: int) -> SupplierType:
        query = await models.Supplier.get(uid=uid)
        return query

    department_all: List[DepartmentType] = strawberry.field(resolver=get_all_departments)

    @strawberry.field
    async def resolve_department_by_uid(self, info, uid: int) -> DepartmentType:
        query = await models.Department.get(uid=uid)
        return query

    instrument_all: List[InstrumentType] = strawberry.field(resolver=get_all_instruments)

    @strawberry.field
    async def resolve_instrument_by_uid(self, info, uid: int) -> InstrumentType:
        query = await models.Instrument.get(uid=uid)
        return query

    method_all: List[MethodType] = strawberry.field(resolver=get_all_methods)

    @strawberry.field
    async def resolve_method_by_uid(self, info, uid: int) -> MethodType:
        query = await models.Method.get(uid=uid)
        return query

    district_all: List[DistrictType] = strawberry.field(resolver=get_all_districts)

    @strawberry.field
    async def resolve_district_by_uid(self, info, uid: int) -> DistrictType:
        district = await models.District.get(uid=uid)
        return district

    @strawberry.field
    async def resolve_districts_by_province_uid(self, info, uid: int) -> List[DistrictType]:
        districts = await models.District.where(province_uid__exact=uid).all()
        return districts

    province_all: List[ProvinceType] = strawberry.field(resolver=get_all_provinces)

    @strawberry.field
    async def resolve_province_by_uid(self, info, uid: int) -> ProvinceType:
        province = await models.Province.get(uid=uid)
        return province

    @strawberry.field
    async def resolve_provinces_by_country_uid(self, info, uid: int) -> List[ProvinceType]:
        provinces = await models.Province.where(country_uid__exact=uid).all()
        return provinces

    country_all: List[CountryType] = strawberry.field(resolver=get_all_countries)

    @strawberry.field
    async def country_by_uid(self, info, uid: int) -> CountryType:
        country = await models.Country.find(uid)
        return country
