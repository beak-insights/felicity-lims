import strawberry
from typing import Optional


@strawberry.type
class LaboratoryType:
    uid: int
    setup_name: str
    lab_name: str
    lab_manager_uid: Optional[str]
    # lab_manager = relationship(User, backref="lab_manager")
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]


@strawberry.type
class SupplierType:
    uid: int
    name: Optional[str]
    description: Optional[str]


@strawberry.type
class InstrumentType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    keyword: Optional[str]
    supplier_uid: Optional[int]
    supplier: Optional[SupplierType]


@strawberry.type
class DepartmentType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    code: Optional[str]


@strawberry.type
class MethodType:
    uid: int
    name: Optional[str]
    description: Optional[str]
    keyword: Optional[str]


@strawberry.type
class CountryType:
    uid: int
    name: Optional[str]
    code: Optional[str]
    active: Optional[str]


@strawberry.type
class ProvinceType:
    uid: int
    code: Optional[str]
    name: Optional[str]
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    active: Optional[bool]
    country_uid: Optional[int]
    country: Optional[CountryType]


@strawberry.type
class DistrictType:
    uid: int
    code: Optional[str]
    name: Optional[str]
    email: Optional[str]
    email_cc: Optional[str]
    mobile_phone: Optional[str]
    business_phone: Optional[str]
    active: Optional[bool]
    province_uid: Optional[int]
    province: Optional[ProvinceType]
