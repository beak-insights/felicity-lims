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
          consentEmail
          businessPhone
          mobilePhone
          consentSms
          countryUid
        }
      }
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
          consentEmail
          businessPhone
          mobilePhone
          consentSms
          provinceUid
        }
      }
    }
  }`;