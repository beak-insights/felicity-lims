from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from felicity.database.base_class import DBModel
from felicity.apps.setup import schemas


class LocationBase(DBModel):
    __abstract__ = True
    code = Column(String, index=True, unique=True, nullable=True)
    name = Column(String)
    email = Column(String, nullable=True)
    email_cc = Column(String, nullable=True)
    consent_email = Column(Boolean(), default=False)
    mobile_phone = Column(String, nullable=True)
    business_phone = Column(String, nullable=True)
    consent_sms = Column(Boolean(), default=False)
    active = Column(Boolean(), default=False)
    
    
class District(LocationBase):
    province_uid = Column(Integer, ForeignKey("province.uid"))
    province = relationship("Province", backref="districts")

    @classmethod
    def create(cls, district: schemas.DistrictCreate) -> schemas.District:
        """Create a new District and return the new instance."""
        if cls.get(code=district.code):
            raise Exception(f"District with code {district.code} already Exists")
        data = cls._import(district)
        return super().create(**data)

    def update(self, district: schemas.DistrictUpdate) -> schemas.District:
        """Update the district with given data"""
        data = self._import(district)
        return super().update(**data)


class Province(LocationBase):
    country_uid = Column(Integer, ForeignKey("country.uid"))
    country = relationship("Country", backref="provinces")

    @classmethod
    def create(cls, province: schemas.ProvinceCreate) -> schemas.Province:
        """Create a new province and return the new instance."""
        if cls.get(code=province.code):
            raise Exception(f"Province with code {province.code} already Exists")
        data = cls._import(province)
        return super().create(**data)

    def update(self, province: schemas.ProvinceUpdate) -> schemas.Province:
        """Update the province with given data"""
        data = self._import(province)
        return super().update(**data)


class Country(DBModel):
    name = Column(String, default='Zimbabwe')
    code = Column(String, index=True, unique=True, nullable=True)
    active = Column(Boolean(), default=False)

    @classmethod
    def create(cls, country: schemas.CountryCreate) -> schemas.Country:
        """Create a new Country and return the new instance."""
        if cls.get(code=country.code):
            raise Exception(f"Country with code {country.code} already Exists")
        data = cls._import(country)
        return super().create(**data)

    def update(self, country: schemas.CountryUpdate) -> schemas.Country:
        """Update the country with given data"""
        data = self._import(country)
        return super().update(**data)
 