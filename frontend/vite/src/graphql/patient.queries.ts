import gql from 'graphql-tag';


export const GET_ALL_PATIENTS = gql`
  query getAllPatients {
    patientAll {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      items {
        uid
        clientPatientId
        patientId
        firstName
        middleName
        lastName
        age
        gender
        dateOfBirth
        ageDobEstimated
        client { 
          name
          district {
            name
            province {
              name
            }
          }
        }
        phoneHome
        phoneMobile
        consentSms
        }
      }
  }`;



export const SEARCH_PATIENTS = gql`
  query searchPatients($queryString: String!) {
    patientSearch(queryString: $queryString){
        uid
        clientPatientId
        patientId
        firstName
        middleName
        lastName
        age
        gender
        dateOfBirth
        ageDobEstimated
        client { 
          name
          district {
            name
            province {
              name
            }
          }
        }
        phoneHome
        phoneMobile
        consentSms
    }
  }`;


export const GET_PATIENT_BY_UID = gql`
  query getPatientByUid($uid: Int!) {
    patientByUid(uid: $uid){
        uid
        clientPatientId
        patientId
        firstName
        middleName
        lastName
        age
        gender
        dateOfBirth
        ageDobEstimated
        client { 
          name
          district {
            name
            province {
              name
            }
          }
        }
        phoneHome
        phoneMobile
        consentSms
    }
  }`;
