import gql from 'graphql-tag'

export const GET_ALL_COUNTRIES = gql`
  query getAllCountries {
    countryAll {
      edges{
        node {
          uid
          name
          code
        }
      }
    }
  }`;

export const GET_ALL_PROVINCES = gql`
  query getAllProvinces {
    provinceAll {
      edges{
        node {
          uid
          name
          code
          email
          emailCc
          businessPhone
          mobilePhone
          countryUid
        }
      }
    }
  }`;


export const FILTER_PROVINCES_BY_COUNTRY = gql`
  query filterProvincesByCountry($uid: String!) {
    provincesByCountryUid(uid: $uid){
      name
      uid
      code
      countryUid
    }
  }`;
  

export const GET_ALL_DISTRICTS = gql`
  query getAllDistricts {
    districtAll {
      edges{
        node {
          uid
          name
          code
          email
          emailCc
          businessPhone
          mobilePhone
          provinceUid
        }
      }
    }
  }`;

export const FILTER_DISTRICTS_BY_PROVINCE = gql`
  query filterDistrictsByProvince($uid: String!) {
    districtsByProvinceUid(uid: $uid){
      name
      uid
      code
      provinceUid
    }
  }`;