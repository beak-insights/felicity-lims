
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError
from domain.setup.ports.service import (
    ILaboratorySettingService,
    ISupplierService,
    IManufacturerService,
    IDepartmentService,
    IUnitService,
    ILaboratoryService,
    IDistrictService,
    IProvinceService,
    ICountryService, 
)
from domain.setup.schemas import (
    LaboratorySetting,
    Supplier,
    Manufacturer,
    Department,
    Unit,
    Laboratory,
    District,
    Province,
    Country,
)



    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_laboratory(
        self, info, uid: str, payload: LaboratoryInputType
    ) -> LaboratoryResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        laboratory = await models.Laboratory.get(uid=uid)
        if not laboratory:
            return OperationError(
                error=f"Laboratory with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = laboratory.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(laboratory, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.LaboratoryUpdate(**laboratory.to_dict())
        laboratory = await laboratory.update(obj_in)
        return LaboratoryType(**laboratory.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_laboratory_setting(
        self, info, uid: str, payload: LaboratorySettingInputType
    ) -> LaboratorySettingResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        lab_setting = await models.LaboratorySetting.get(uid=uid)
        if not lab_setting:
            return OperationError(
                error=f"Laboratory Setting with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = lab_setting.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(lab_setting, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.LaboratoryUpdate(**lab_setting.to_dict())
        lab_setting = await lab_setting.update(obj_in)
        return LaboratorySettingType(**lab_setting.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_department(
        root, info, payload: DepartmentInputType
    ) -> DepartmentResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please Provide a name for your department")

        exists = await models.Department.get(name=payload.name)
        if exists:
            return OperationError(
                error=f"A Department named {payload.name} already exists"
            )

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.DepartmentCreate(**incoming)
        department: models.Department = await models.Department.create(obj_in)
        return DepartmentType(**department.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_department(
        self, info, uid: str, payload: DepartmentInputType
    ) -> DepartmentResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        department = await models.Department.get(uid=uid)
        if not department:
            return OperationError(
                error=f"department with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = department.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(department, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.DepartmentUpdate(**department.to_dict())
        department = await department.update(obj_in)
        return DepartmentType(**department.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_supplier(
        self, info, payload: SupplierInputType
    ) -> SupplierResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please Provide a name for your supplier")

        exists = await models.Supplier.get(name=payload.name)
        if exists:
            return OperationError(
                error=f"A Supplier named {payload.name} already exists"
            )

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.SupplierCreate(**incoming)
        supplier: models.Supplier = await models.Supplier.create(obj_in)
        return SupplierType(**supplier.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_supplier(
        self, info, uid: str, payload: SupplierInputType
    ) -> SupplierResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        supplier = await models.Supplier.get(uid=uid)
        if not supplier:
            return OperationError(
                error=f"supplier with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = supplier.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(supplier, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.SupplierUpdate(**supplier.to_dict())
        supplier = await supplier.update(obj_in)
        return SupplierType(**supplier.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_manufacturer(
        self, info, payload: ManufacturerInputType
    ) -> ManufacturerResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please a name for your manufacturer")

        exists = await models.Manufacturer.get(name=payload.name)
        if exists:
            return OperationError(
                error=f"A Manufacturer named {payload.name} already exists"
            )

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.ManufacturerCreate(**incoming)
        manufacturer: models.Manufacturer = await models.Manufacturer.create(obj_in)
        return ManufacturerType(**manufacturer.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_manufacturer(
        self, info, uid: str, payload: ManufacturerInputType
    ) -> ManufacturerResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        manufacturer = await models.Manufacturer.get(uid=uid)
        if not manufacturer:
            return OperationError(
                error=f"manufacturer with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = manufacturer.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(manufacturer, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.ManufacturerUpdate(**manufacturer.to_dict())
        manufacturer = await manufacturer.update(obj_in)
        return ManufacturerType(**manufacturer.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_country(
        self, info, payload: CountryInputType
    ) -> CountryResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please Provide a name for the country")

        exists = await models.Country.get(code=payload.code)
        if exists:
            return OperationError(
                error=f"Country code {payload.code} already exists: This code belongs to {exists.name}"
            )

        incoming = {}
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.CountryCreate(**incoming)
        country: models.Country = await models.Country.create(obj_in)
        return CountryType(**country.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_country(
        self, info, uid: str, payload: CountryInputType
    ) -> CountryResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        country = await models.Country.get(uid=uid)
        if not country:
            return OperationError(
                error=f"country with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = country.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(country, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.CountryUpdate(**country.to_dict())
        country = await country.update(obj_in)
        return CountryType(**country.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_province(
        self, info, payload: ProvinceInputType
    ) -> ProvinceResponse:  # noqa
        if not payload.name:
            return OperationError(error="Please Provide a name for the Province")

        exists = await models.Province.get(code=payload.code)
        if exists:
            return OperationError(
                error=f"Province code {payload.code} already belong to Province {exists.name}"
            )

        incoming = {}
        for k, v in payload.__dict__.items():
            incoming[k] = v

        province_in = schemas.ProvinceCreate(**incoming)
        province: models.Province = await models.Province.create(province_in)
        return ProvinceType(**province.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_province(
        self, info, uid: str, payload: ProvinceInputType
    ) -> ProvinceResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        province = await models.Province.get(uid=uid)
        if not province:
            return OperationError(
                error=f"province with id {uid} not found. Cannot update obj ..."
            )

        obj_data = province.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(province, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.ProvinceUpdate(**province.to_dict())
        province = await province.update(obj_in)
        return ProvinceType(**province.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_district(
        self, info, payload: DistrictInputType
    ) -> DistrictResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please Provide a name for the district")

        exists = await models.District.get(code=payload.code)
        if exists:
            return OperationError(
                error=f"District code {payload.code} already belong to district {exists.name}"
            )

        incoming = {}
        for k, v in payload.__dict__.items():
            incoming[k] = v

        district_in = schemas.DistrictCreate(**incoming)
        district: models.District = await models.District.create(district_in)
        return DistrictType(**district.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_district(
        self, info, uid: str, payload: DistrictInputType
    ) -> DistrictResponse:  # noqa
        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        district = await models.District.get(uid=uid)
        if not district:
            return OperationError(
                error=f"district with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = district.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(district, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.DistrictUpdate(**district.to_dict())
        district = await district.update(obj_in)
        return DistrictType(**district.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_unit(self, info, payload: UnitInputType) -> UnitResponse:  # noqa

        if not payload.name:
            return OperationError(error="Unit name is required")

        exists = await models.Unit.get(name=payload.name)
        if exists:
            return OperationError(error=f"A Unit named {payload.name} already exists")

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.UnitCreate(**incoming)
        unit: models.Unit = await models.Unit.create(obj_in)
        return UnitType(**unit.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_unit(
        self, info, uid: str, payload: UnitInputType
    ) -> UnitResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        unit = await models.Unit.get(uid=uid)
        if not unit:
            return OperationError(
                error=f"unit with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = unit.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(unit, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.UnitUpdate(**unit.to_dict())
        unit = await unit.update(obj_in)
        return UnitType(**unit.marshal_simple())



 
class LaboratorySettingService(BaseService[LaboratorySetting], ILaboratorySettingService):
    ...
    
class SupplierService(BaseService[Supplier], ISupplierService):
    ...
    
class ManufacturerService(BaseService[Manufacturer], IManufacturerService):
    ...
    
class DepartmentService(BaseService[Department], IDepartmentService):
    ...
    
class UnitService(BaseService[Unit], IUnitService):
    ...
    
class LaboratoryService(BaseService[Laboratory], ILaboratoryService):
    async def get_by_setup_name(cls, keyword="felicity"):
        lab_setup = await cls.get(setup_name=keyword)
        if not lab_setup:
            return None
        return lab_setup
    
class DistrictService(BaseService[District], IDistrictService):
    async def create(cls, district: schemas.DistrictCreate) -> schemas.District:
        """Create a new District and return the new instance."""
        exists = await cls.get(code=district.code)
        if exists:
            raise Exception(f"District with code {district.code} already Exists")
        data = cls._import(district)
        return await super().create(**data)
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

    page = await models.District.paginate_with_cursors(
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
    
       
class ProvinceService(BaseService[Province], IProvinceService):
    async def create(cls, province: schemas.ProvinceCreate) -> schemas.Province:
        """Create a new province and return the new instance."""
        exists = await cls.get(code=province.code)
        if exists:
            raise Exception(f"Province with code {province.code} already Exists")
        data = cls._import(province)
        return await super().create(**data)
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

    page = await models.Province.paginate_with_cursors(
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

class CountryService(BaseService[Country], ICountryService):
    async def create(cls, country: schemas.CountryCreate) -> schemas.Country:
        """Create a new Country and return the new instance."""
        exists = await cls.get(code=country.code)
        if exists:
            raise Exception(f"Country with code {country.code} already Exists")
        data = cls._import(country)
        return await super().create(**data)