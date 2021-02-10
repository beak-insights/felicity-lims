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
        country {
          uid
          name
          code
        }
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
        province {
          uid
          name
          code
          country {
            uid
            name
            code
          }
        }
      }
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $code: String!, $districtUid: Int!) {
    createClient(name: $name, code: $code, districtUid: $districtUid) {
      client {
        uid
        name
        code
        district {
          uid
          name
          code
          province {
            uid
            name
            code
            country {
              uid
              name
              code
            }
          }
        }
      }
    }
  }
`;
