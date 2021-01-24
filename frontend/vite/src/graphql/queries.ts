import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
  query userAll {
    userAll {
      edges {
        node {
          uid
          firstName
          lastName
          email
          isActive
          isSuperuser
          mobilePhone
          auth {
            uid
            userName
            isBlocked
            userType          
          }
        }
      }
    }
  }`;

export const GET_ALL_PATIENTS = gql`
  query getAllPatients {
    patientAll {
      edges {
        node {
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
    }
  }`;