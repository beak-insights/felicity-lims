import gql from 'graphql-tag';

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String) {
    createCountry(name: $name, code: $code) {
      country {
        uid
        name
        code
      }
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation editCountry($uid: String!, $name: String!, $code: String, $active: Boolean) {
    updateCountry(uid: $uid, name: $name, code: $code, active: $active) {
      country {
        uid
        name
        code
      }
    }
  }
`;

export const ADD_PROVINCE = gql`
  mutation AddProvince($name: String!, $code: String, $countryUid: Int!) {
    createProvince(name: $name, code: $code, countryUid: $countryUid) {
      province {
        uid
        name
        code
        countryUid
      }
    }
  }
`;

export const UPDATE_PROVINCE = gql`
  mutation editProvince($uid: String!, $name: String!, $code: String, $active: Boolean) {
    updateProvince(uid: $uid, name: $name, code: $code, active: $active) {
      province {
        uid
        name
        code
        countryUid
      }
    }
  }
`;

export const ADD_DISTRICT = gql`
  mutation AddDistrict($name: String!, $code: String, $provinceUid: Int!) {
    createDistrict(name: $name, code: $code, provinceUid: $provinceUid) {
      district {
        uid
        name
        code
        provinceUid
      }
    }
  }
`;


export const UPDATE_DISTRICT = gql`
  mutation editDistrict($uid: String!, $name: String!, $code: String, $active: Boolean) {
    updateDistrict(uid: $uid, name: $name, code: $code, active: $active) {
      district {
        uid
        name
        code
        provinceUid
      }
    }
  }
`;