from typing import List

import sqlalchemy as sa
import strawberry  # noqa

from felicity.api.gql.permissions import IsAuthenticated
from felicity.api.gql.setup.types import (
    CountryType,
    DistrictCursorPage,
    DistrictEdge,
    DistrictType,
    LaboratorySettingType,
    LaboratoryType,
    ManufacturerType,
    ProvinceCursorPage,
    ProvinceEdge,
    ProvinceType,
    SupplierType,
    UnitType,
)
from felicity.api.gql.setup.types.department import DepartmentType
from felicity.api.gql.types import PageInfo
from felicity.apps.setup.services import (
    CountryService,
    DepartmentService,
    DistrictService,
    LaboratoryService,
    LaboratorySettingService,
    ManufacturerService,
    ProvinceService,
    SupplierService,
    UnitService,
)
from felicity.utils import has_value_or_is_truthy


async def get_laboratory(setup_name: str) -> LaboratoryType:
    return await LaboratoryService().get(setup_name=setup_name)


async def get_laboratory_setting(setup_name: str) -> LaboratorySettingType:
    laboratory = await LaboratoryService().get(setup_name=setup_name)
    return await LaboratorySettingService().get(laboratory_uid=laboratory.uid)


async def get_all_suppliers() -> List[SupplierType]:
    return await SupplierService().all()


async def get_all_manufacturers() -> List[ManufacturerType]:
    return await ManufacturerService().all()


async def get_all_departments() -> List[DepartmentType]:
    return await DepartmentService().all()


async def get_all_units() -> List[UnitType]:
    return await UnitService().all()


async def get_all_districts(
    self,
    info,
    page_size: int | None = None,
    after_cursor: str | None = None,
    before_cursor: str | None = None,
    text: str | None = None,
    sort_by: list[str] | None = None,
) -> DistrictCursorPage:
    filters = {}

    _or_ = dict()
    if has_value_or_is_truthy(text):
        arg_list = [
            "name__ilike",
            "code__ilike",
            "email__ilike",
            "email_cc__ilike",
            "mobile_phone__ilike",
            "business_phone__ilike",
            "province___name__ilike",
            "province___code__ilike",
        ]
        for _arg in arg_list:
            _or_[_arg] = f"%{text}%"

        filters = {sa.or_: _or_}

    page = await DistrictService().paging_filter(
        page_size=page_size,
        after_cursor=after_cursor,
        before_cursor=before_cursor,
        filters=filters,
        sort_by=sort_by,
    )

    total_count: int = page.total_count
    edges: List[DistrictEdge[DistrictType]] = page.edges
    items: List[DistrictType] = page.items
    page_info: PageInfo = page.page_info

    return DistrictCursorPage(
        total_count=total_count, edges=edges, items=items, page_info=page_info
    )


async def get_all_provinces(
    self,
    info,
    page_size: int | None = None,
    after_cursor: str | None = None,
    before_cursor: str | None = None,
    text: str | None = None,
    sort_by: list[str] | None = None,
) -> ProvinceCursorPage:
    filters = {}

    _or_ = dict()
    if has_value_or_is_truthy(text):
        arg_list = [
            "name__ilike",
            "code__ilike",
            "email__ilike",
            "email_cc__ilike",
            "mobile_phone__ilike",
            "business_phone__ilike",
        ]
        for _arg in arg_list:
            _or_[_arg] = f"%{text}%"

        filters = {sa.or_: _or_}

    page = await ProvinceService().paging_filter(
        page_size=page_size,
        after_cursor=after_cursor,
        before_cursor=before_cursor,
        filters=filters,
        sort_by=sort_by,
    )

    total_count: int = page.total_count
    edges: List[ProvinceEdge[ProvinceType]] = page.edges
    items: List[ProvinceType] = page.items
    page_info: PageInfo = page.page_info

    return ProvinceCursorPage(
        total_count=total_count, edges=edges, items=items, page_info=page_info
    )


async def get_all_countries() -> List[CountryType]:
    return await CountryService().all()


@strawberry.type
class SetupQuery:
    laboratory: LaboratoryType = strawberry.field(resolver=get_laboratory)

    laboratory_setting: LaboratorySettingType = strawberry.field(
        resolver=get_laboratory_setting, permission_classes=[IsAuthenticated]
    )

    manufacturer_all: List[ManufacturerType] = strawberry.field(
        resolver=get_all_manufacturers, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def manufacturer_by_uid(self, info, uid: str) -> ManufacturerType:
        query = await ManufacturerService().get(uid=uid)
        return query

    supplier_all: List[SupplierType] = strawberry.field(
        resolver=get_all_suppliers, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def supplier_by_uid(self, info, uid: str) -> SupplierType:
        query = await SupplierService().get(uid=uid)
        return query

    department_all: List[DepartmentType] = strawberry.field(
        resolver=get_all_departments, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def department_by_uid(self, info, uid: str) -> DepartmentType:
        query = await DepartmentService().get(uid=uid)
        return query

    district_all: DistrictCursorPage = strawberry.field(
        resolver=get_all_districts, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def district_by_uid(self, info, uid: str) -> DistrictType:
        district = await DistrictService().get(uid=uid)
        return district

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def districts_by_province_uid(self, info, uid: str) -> List[DistrictType]:
        districts = await DistrictService().get_all(province_uid__exact=uid)
        return districts

    province_all: ProvinceCursorPage = strawberry.field(
        resolver=get_all_provinces, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def province_by_uid(self, info, uid: str) -> ProvinceType:
        province = await ProvinceService().get(uid=uid)
        return province

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def provinces_by_country_uid(self, info, uid: str) -> List[ProvinceType]:
        provinces = await ProvinceService().get_all(country_uid__exact=uid)
        return provinces

    country_all: List[CountryType] = strawberry.field(
        resolver=get_all_countries, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def country_by_uid(self, info, uid: str) -> CountryType:
        country = await CountryService().get(uid=uid)
        return country

    unit_all: List[UnitType] = strawberry.field(
        resolver=get_all_units, permission_classes=[IsAuthenticated]
    )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def unit_by_uid(self, info, uid: str) -> UnitType:
        unit = await UnitService().get(uid=uid)
        return unit
