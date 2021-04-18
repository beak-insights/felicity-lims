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
          groups {
            edges {
              node {
                uid
                name
              }
            }
          }
        }
      }
    }
  }`;




export const GET_GROUPS_AND_PERMISSIONS = gql`
  query groupsAndPermissions {
    groupAll {
      edges {
        node {
          uid
          name
          active
          permissions {
            edges {
              node {
                uid
                action
                target
              }
            }
          }
        }
      }
    }
    
    permissionAll {
      edges {
        node {
          uid
          action
          target
        }
      }
    }
  }`;

