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