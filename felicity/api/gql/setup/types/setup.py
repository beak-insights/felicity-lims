from typing import List, Optional

import strawberry  # noqa

from felicity.api.gql.types import PageInfo
from felicity.api.gql.user.types import UserType


@strawberry.type
class LaboratoryType:
    uid: str
    setup_name: str
    lab_name: str
    tag_line: str | None = None
    lab_manager_uid: str | None = None
    lab_manager: Optional["UserType"] = None
    code: str | None = None
    email: str | None = None
    email_cc: str | None = None
    mobile_phone: str | None = None
    business_phone: str | None = None
    address: str | None = None
    banking: str | None = None
    logo: str | None = None
    quality_statement: str | None = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


@strawberry.type
class LaboratorySettingType:
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None
    uid: str
    laboratory_uid: str
    laboratory: LaboratoryType
    allow_self_verification: bool | None = False
    allow_patient_registration: bool | None = True
    allow_sample_registration: bool | None = True
    allow_worksheet_creation: bool | None = True
    default_route: str | None = None
    password_lifetime: int | None = None
    default_tat_minutes: int | None = None
    inactivity_log_out: int | None = None
    default_theme: str | None = None
    auto_receive_samples: bool | None = True
    sticker_copies: int | None = 2
    allow_auto_billing: bool | None = True
    allow_billing: bool | None = False
    currency: str | None = "USD"
    payment_terms_days: int | None = 0
    #


@strawberry.type
class SupplierType:
    uid: str
    name: str | None = None
    description: str | None = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


@strawberry.type
class ManufacturerType:
    uid: str
    name: str | None = None
    description: str | None = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


@strawberry.type
class UnitType:
    uid: str
    name: str
    description: str | None = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


@strawberry.type
class CountryType:
    uid: str
    name: str | None = None
    code: str | None = None
    active: str | None = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


@strawberry.type
class ProvinceType:
    uid: str
    code: str | None = None
    name: str | None = None
    email: str | None = None
    email_cc: str | None = None
    mobile_phone: str | None = None
    business_phone: str | None = None
    active: bool | None = None
    country_uid: str | None = None
    country: Optional[CountryType] = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


#  relay paginations
@strawberry.type
class ProvinceEdge:
    cursor: str
    node: ProvinceType


@strawberry.type
class ProvinceCursorPage:
    page_info: PageInfo
    edges: Optional[List[ProvinceEdge]] = None
    items: Optional[List[ProvinceType]] = None
    total_count: int


@strawberry.type
class DistrictType:
    uid: str
    code: str | None = None
    name: str | None = None
    email: str | None = None
    email_cc: str | None = None
    mobile_phone: str | None = None
    business_phone: str | None = None
    active: bool | None = None
    province_uid: str | None = None
    province: Optional[ProvinceType] = None
    #
    created_by_uid: str | None = None
    created_by: Optional["UserType"] = None
    created_at: str | None = None
    updated_by_uid: str | None = None
    updated_by: Optional["UserType"] = None
    updated_at: str | None = None


#  relay paginations
@strawberry.type
class DistrictEdge:
    cursor: str
    node: DistrictType


@strawberry.type
class DistrictCursorPage:
    page_info: PageInfo
    edges: Optional[List[DistrictEdge]] = None
    items: Optional[List[DistrictType]] = None
    total_count: int
