import gql from 'graphql-tag';

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($username: String!, $password: String!) {
    authenticateUser(password: $password, username: $username) {
      token
      tokenType
      user {
        uid
        firstName
        lastName
      }
    }
  }`;

export const ADD_PATIENT = gql`
  mutation AddPatient(
    $clientPatientId: String!,
    $firstName: String!,
    $middleName: String,
    $lastName: String!,
    $age: String!,
    $gender: Int!,
    $dateOfBirth: String,
    $ageDobEstimated: Boolean,
    $clientUid: Int!,
    $phoneMobile: String!,
    $consentSms: Boolean,       
  ){
  createPatient(
      clientPatientId: $clientPatientId,
      firstName: $firstName,
      middleName: $middleName,
      lastName: $lastName,
      age: $age,
      gender: $gender
      dateOfBirth: $dateOfBirth,
      ageDobEstimated: $ageDobEstimated,
      clientUid: $clientUid,
      phoneMobile: $phoneMobile,
      consentSms: $consentSms   
  ) {
    patient {
      clientPatientId
      firstName
      middleName
      lastName
      age
      gender
      dateOfBirth
      ageDobEstimated
      client {      
        uid
        name
        code
      }
      phoneHome
      phoneMobile
      consentSms
    }
  }
}`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String) {
    createCountry(name: $name, code: $code) {
      country {
        uid
        name
        code
      }
    }
  }`;

export const ADD_PROVINCE = gql`
  ,mutation AddProvince($name: String!, $code: String, $countryUid: Int!) {
  createProvince( name: $name,  code: $code, countryUid: $countryUid ) {
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
}`;

export const ADD_DISTRICT = gql`
  mutation AddDistrict($name: String!, $code: String, $provinceUid: Int!) {
    createDistrict( name: $name,  code: $code, provinceUid: $provinceUid ) {
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
  }`;

export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $code: String!, $districtUid: Int!) {
  createClient( name: $name,  code: $code, districtUid: $districtUid ){
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
}`;