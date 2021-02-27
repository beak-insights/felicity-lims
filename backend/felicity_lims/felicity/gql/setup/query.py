import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField

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


class SetupQuery(graphene.ObjectType):
    node = relay.Node.Field()
    # laboratory
    laboratory_all = SQLAlchemyConnectionField(LaboratoryType.connection)
    laboratory_by_uid = graphene.Field(lambda: LaboratoryType, uid=graphene.Int(default_value=None))
    # Supplier
    supplier_all = SQLAlchemyConnectionField(SupplierType.connection)
    supplier_by_uid = graphene.Field(lambda: SupplierType, uid=graphene.Int(default_value=None))
    # Department
    department_all = SQLAlchemyConnectionField(DepartmentType.connection)
    department_by_uid = graphene.Field(lambda: DepartmentType, uid=graphene.Int(default_value=None))
    # Instrument
    instrumet_all = SQLAlchemyConnectionField(InstrumentType.connection)
    instrumet_by_uid = graphene.Field(lambda: InstrumentType, uid=graphene.Int(default_value=None))
    # Method
    method_all = SQLAlchemyConnectionField(MethodType.connection)
    method_by_uid = graphene.Field(lambda: MethodType, uid=graphene.Int(default_value=None))
    # District Queries
    district_all = SQLAlchemyConnectionField(DistrictType.connection)
    district_by_uid = graphene.Field(lambda: DistrictType, uid=graphene.String(default_value=""))
    districts_by_province_uid = graphene.List(lambda: DistrictType, uid=graphene.String(default_value=""))
    # Province Queries
    province_all = SQLAlchemyConnectionField(ProvinceType.connection)
    province_by_uid = graphene.Field(lambda: ProvinceType, uid=graphene.String(default_value=""))
    provinces_by_country_uid = graphene.List(lambda: ProvinceType, uid=graphene.String(default_value=""))
    # Country Queries
    country_all = SQLAlchemyConnectionField(CountryType.connection)
    country_by_uid = graphene.Field(lambda: CountryType, uid=graphene.String(default_value=""))
    
    def resolve_laboratory_by_uid(self, info, uid):
        query = models.Laboratory.get(uid=uid)
        return query
    
    def resolve_supplier_by_uid(self, info, uid):
        query = models.Supplier.get(uid=uid)
        return query
    
    def resolve_department_by_uid(self, info, uid):
        query = models.Department.get(uid=uid)
        return query
    
    def resolve_instrument_by_uid(self, info, uid):
        query = models.Instrument.get(uid=uid)
        return query
    
    def resolve_method_by_uid(self, info, uid):
        query = models.Method.get(uid=uid)
        return query

    def resolve_district_by_uid(self, info, uid):
        district= models.District.get(uid=uid)
        return district

    def resolve_districts_by_province_uid(self, info, uid):
        districts = models.District.where(province_uid__exact=uid).all()
        return districts

    def resolve_province_by_uid(self, info, uid):
        province= models.Province.get(uid=uid)
        return province

    def resolve_provinces_by_country_uid(self, info, uid):
        provinces = models.Province.where(country_uid__exact=uid).all()
        return provinces

    def resolve_country_by_uid(self, info, uid):
        country= models.Country.find(uid)
        return country