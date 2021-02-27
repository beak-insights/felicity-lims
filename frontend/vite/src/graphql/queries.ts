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