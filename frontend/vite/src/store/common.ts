export interface IBase {
    uid?: number,
    name?: string,
    code?: string,
  }

  export interface ILocation extends IBase {
    email?: string,
    emailCc?: string[],
    consentEmail?: boolean,
    businessPhone?: string,
    mobilePhone?: string,
    consentSms?: boolean,
  }
  
  export interface IClient extends ILocation {
    district?: IDistrict
  }
  
  export interface IProvince extends ILocation {
    country?: ICountry
  }

  export interface IDistrict extends ILocation {
    province?: IProvince
  }

export interface IGenericLocation extends ILocation {
  district?: IDistrict,
  province?: IProvince,
  country?: ICountry,
};

export interface ICountry extends IBase {}

export class Country implements ICountry {
  constructor(
    public uid?: number,
    public name?: string,
    public code?: string
  ) {}
}

export class Province implements IProvince {
  constructor(
    public uid?: number,
    public name?: string,
    public code?: string,
    public country?: ICountry,
    public email?: string,
    public emailCc?: string[],
    public consentEmail?: boolean,
    public businessPhone?: string,
    public mobilePhone?: string,
    public consentSms?: boolean,
  ) {}
}

export class District implements IDistrict {
  constructor(
    public uid?: number,
    public name?: string,
    public code?: string,
    public provine?: IProvince,
    public email?: string,
    public emailCc?: string[],
    public consentEmail?: boolean,
    public businessPhone?: string,
    public mobilePhone?: string,
    public consentSms?: boolean,
  ) {}
}

export class GenericLocation implements IGenericLocation {
  constructor(
    public uid?: number,
    public name?: string,
    public code?: string,
    public email?: string,
    public emailCc?: string[],
    public consentEmail?: boolean,
    public businessPhone?: string,
    public mobilePhone?: string,
    public consentSms?: boolean,
    public province?: IProvince,
    public district?: IDistrict,
    public country?: ICountry,
  ) {}
}