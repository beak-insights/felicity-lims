import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.setup import models, schemas
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

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 
# Laboratory Mutations
# 
class CreateLaboratory(graphene.Mutation):
    class Arguments:
        setup_name = graphene.String(required=False)
        lab_name = graphene.String(required=True)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        lab_manager_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    laboratory = graphene.Field(lambda: LaboratoryType)

    @staticmethod
    def mutate(root, info, lab_name, setup_name="felicity", **kwargs): 
        if not lab_name:
            raise GraphQLError("Please Provide a name for your laboratory")
        # Enforce single site instance
        exists = models.Laboratory.get(setup_name=setup_name)
        if exists:
            raise GraphQLError(f"The laboratory named {exists.lab_name} is already using the setupname {setup_name}")
        
        incoming = {
            "lab_name": lab_name,
            "setup_name": setup_name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.LaboratoryCreate(**incoming)  
        laboratory = models.Laboratory.create(obj_in)
        ok = True
        return CreateLaboratory(laboratory=laboratory, ok=ok)

                
class UpdateLaboratory(graphene.Mutation):
    class Arguments:
        setup_name = graphene.String(required=False)
        lab_name = graphene.String(required=True)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        lab_manager_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    laboratory = graphene.Field(lambda: LaboratoryType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        laboratory = models.Laboratory.get(uid=uid)
        if not laboratory:
            raise GraphQLError(f"Laboratory with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(laboratory)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(laboratory, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.LaboratoryUpdate(**laboratory.to_dict())    
        laboratory = laboratory.update(obj_in)
        ok = True
        return UpdateLaboratory(ok=ok, laboratory=laboratory)
    

# 
# Department Mutations
# 
class CreateDepartment(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        code = graphene.String(required=False)

    ok = graphene.Boolean()
    department = graphene.Field(lambda: DepartmentType)

    @staticmethod
    def mutate(root, info, name, **kwargs): 
        if not name:
            raise GraphQLError("Please Provide a name for your department")
        incoming = {
            "name": name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.DepartmentCreate(**incoming)  
        department = models.Department.create(obj_in)
        ok = True
        return CreateDepartment(department=department, ok=ok)

                
class UpdateDepartment(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        code = graphene.String(required=False)

    ok = graphene.Boolean()
    department = graphene.Field(lambda: DepartmentType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        department = models.Department.get(uid=uid)
        if not department:
            raise GraphQLError(f"department with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(department)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(department, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.DepartmentUpdate(**department.to_dict())    
        department = department.update(obj_in)
        ok = True
        return UpdateDepartment(ok=ok, department=department)
 

# 
# SUpplier Mutations
# 
class CreateSupplier(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        code = graphene.String(required=False)

    ok = graphene.Boolean()
    supplier = graphene.Field(lambda: SupplierType)

    @staticmethod
    def mutate(root, info, name, **kwargs): 
        if not name:
            raise GraphQLError("Please Provide a name for your supplier")
        incoming = {
            "name": name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.SupplierCreate(**incoming)  
        supplier = models.Supplier.create(obj_in)
        ok = True
        return CreateSupplier(supplier=supplier, ok=ok)

                
class UpdateSupplier(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        code = graphene.String(required=False)

    ok = graphene.Boolean()
    supplier = graphene.Field(lambda: SupplierType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        supplier = models.Supplier.get(uid=uid)
        if not supplier:
            raise GraphQLError(f"supplier with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(supplier)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(supplier, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.SupplierUpdate(**supplier.to_dict())    
        supplier = supplier.update(obj_in)
        ok = True
        return UpdateSupplier(ok=ok, supplier=supplier)    


# 
# Instrument Mutations
# 
class CreateInstrument(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        keyword = graphene.String(required=True)
        description = graphene.String(required=False)
        supplier_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    instrument = graphene.Field(lambda: InstrumentType)

    @staticmethod
    def mutate(root, info, name, keyword, **kwargs): 
        if not name or not keyword:
            raise GraphQLError("Provide a name and a unique keyword for your instrument")
        incoming = {
            "name": name,
            "keyword": keyword
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.InstrumentCreate(**incoming)  
        instrument = models.Instrument.create(obj_in)
        ok = True
        return CreateInstrument(instrument=instrument, ok=ok)

                
class UpdateInstrument(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        keyword = graphene.String(required=False)
        supplier_uid = graphene.String(required=False)

    ok = graphene.Boolean()
    instrument = graphene.Field(lambda: InstrumentType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        if 'keyword' in kwargs:
            keyword = kwargs.get('keyword')
            taken = models.Instrument.get(keyword=keyword)
            if taken:
                raise GraphQLError(f"Provided keyword already assigned to instrument {taken.name}")
        
        instrument = models.Instrument.get(uid=uid)
        if not instrument:
            raise GraphQLError(f"instrument with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(instrument)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(instrument, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.InstrumentUpdate(**instrument.to_dict())    
        instrument = instrument.update(obj_in)
        ok = True
        return UpdateInstrument(ok=ok, instrument=instrument)
    
    

# 
# Method Mutations
# 
class CreateMethod(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        keyword = graphene.String(required=True)
        description = graphene.String(required=False)

    ok = graphene.Boolean()
    method = graphene.Field(lambda: MethodType)

    @staticmethod
    def mutate(root, info, name, **kwargs): 
        if not name:
            raise GraphQLError("Provide a name for your method")
        incoming = {
            "name": name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.MethodCreate(**incoming)  
        method = models.Method.create(obj_in)
        ok = True
        return CreateMethod(method=method, ok=ok)

                
class UpdateMethod(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=False)
        keyword = graphene.String(required=False)

    ok = graphene.Boolean()
    method = graphene.Field(lambda: MethodType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        if 'keyword' in kwargs:
            keyword = kwargs.get('keyword')
            taken = models.Method.get(keyword=keyword)
            if taken:
                raise GraphQLError(f"Provided keyword already assigned to method {taken.name}")
        
        method = models.Method.get(uid=uid)
        if not method:
            raise GraphQLError(f"method with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(method)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(method, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.MethodUpdate(**method.to_dict())    
        method = method.update(obj_in)
        ok = True
        return UpdateMethod(ok=ok, method=method)
    
    
  
# 
# Country Mutations
#  
class CreateCountry(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    country = graphene.Field(lambda: CountryType)

    @staticmethod
    def mutate(root, info, name, code, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a namefor the country")
        exists = models.Country.get(code=code)
        if exists:
            raise GraphQLError(f"Country code {code} already exists: This code belongs to {exists.name}")
            
        incoming = {
            "name": name,
            "code": code,
            "active": True
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.CountryCreate(**incoming)  
        country = models.Country.create(obj_in)
        ok = True
        return CreateCountry(country=country, ok=ok)

                
class UpdateCountry(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)
        code = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    country = graphene.Field(lambda: CountryType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):  
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        country = models.Country.get(uid=uid)
        if not country:
            raise GraphQLError(f"country with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(country)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(country, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.CountryUpdate(**country.to_dict())    
        country = country.update(obj_in)
        ok = True
        return UpdateCountry(ok=ok, country=country)
      
   
# 
# Province Mutations
#  
class CreateProvince(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=False)
        country_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        consent_email = graphene.Boolean(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        consent_sms = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    province = graphene.Field(lambda: ProvinceType)

    @staticmethod
    def mutate(root, info, name, code, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a name for the Province")
        exists = models.Province.get(code=code)
        if exists:
            raise GraphQLError(f"Provice code {code} already belong to Province {exists.name}")
            
        incoming = {
            "name": name,
            "code": code,
            "active": True
        }
        for k, v in kwargs.items():
            incoming[k] = v
        
        province_in = schemas.ProvinceCreate(**incoming)
        province = models.Province.create(province_in)
        ok = True
        return CreateProvince(province=province, ok=ok)

                
class UpdateProvince(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)
        code = graphene.String(required=False)
        country_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    province = graphene.Field(lambda: ProvinceType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        logger.info(kwargs)
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        province = models.Province.get(uid=uid)
        if not province:
            raise GraphQLError(f"province with id {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(province)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(province, field, kwargs[field])
                except Exception as e:
                    pass             
        obj_in = schemas.ProvinceUpdate(**province.to_dict())    
        province = province.update(obj_in)
        ok = True
        return UpdateProvince(ok=ok, province=province)
    
  
# 
# District Mutations
#  
class CreateDistrict(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=False)
        province_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    district = graphene.Field(lambda: DistrictType)

    @staticmethod
    def mutate(root, info, name, code, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a namefor the district")
        exists = models.District.get(code=code)
        if exists:
            raise GraphQLError(f"District code {code} already belong to district {exists.name}")
            
        incoming = {
            "name": name,
            "code": code,
            "active": True
        }
        for k, v in kwargs.items():
            incoming[k] = v
        
        district_in = schemas.DistrictCreate(**incoming)
        district = models.District.create(district_in)
        ok = True
        return CreateDistrict(district=district, ok=ok)

                
class UpdateDistrict(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)
        code = graphene.String(required=False)
        province_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        active = graphene.Boolean(required=False)


    ok = graphene.Boolean()
    district = graphene.Field(lambda: DistrictType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):  
        if not uid:
            raise GraphQLError("No uid provided to idenity update obj")
        
        district = models.District.get(uid=uid)
        if not district:
            raise GraphQLError(f"district with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(district)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(district, field, kwargs[field])
                except Exception as e:
                    pass               
        obj_in = schemas.DistrictUpdate(**district.to_dict())    
        district = district.update(obj_in)
        ok = True
        return UpdateDistrict(ok=ok, district=district)

    
class SetupMutations(graphene.ObjectType):
    # laboratory
    create_laboratory = CreateLaboratory.Field()
    update_laboratory = UpdateLaboratory.Field()
    # department
    create_department = CreateDepartment.Field()
    update_department = UpdateDepartment.Field()
    # suplier
    create_supplier = CreateSupplier.Field()
    update_supplier = UpdateSupplier.Field()
    # instrument
    create_instrument = CreateInstrument.Field()
    update_instrument = UpdateInstrument.Field()
    # method
    create_method = CreateMethod.Field()
    update_method = UpdateMethod.Field()
    # Country
    create_country = CreateCountry.Field()
    update_country = UpdateCountry.Field()
    # Provinve
    create_province = CreateProvince.Field()
    update_province = UpdateProvince.Field()
    # District
    create_district = CreateDistrict.Field()
    update_district = UpdateDistrict.Field()