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


export const GET_AUDIT_LOG_FOR_TARGET = gql`
  query getAuditLogs($targetType: String!, $targetId: String!) {
    auditLogsFilter(targetType:$targetType, targetId:$targetId){
      edges {
        node {
          uid
          userId
          targetType
          targetId
          action
          stateBefore
          stateAfter
        }
      }
    }
  }`;


export const GET_DEPARTMENTS = gql`
  query getAllDepartments {
    departmentAll {
      edges {
        node {
          uid
          name
          code
          description
        }
      }
    }
  }`;
