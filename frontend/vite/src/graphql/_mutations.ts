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


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!) {
    createUser(
    firstName: $firstName, 
    lastName: $lastName, 
    email: $email,
  ){
    ok
    user {
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
`;


export const EDIT_USER = gql`
  mutation editUser($userUid: Int!, $firstName: String!, $lastName: String, $email: String) {
    updateUser(
      userUid: $userUid,
      firstName: $firstName, 
      lastName: $lastName, 
      email: $email,
    ){
      ok
      user {
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
`;


export const ADD_USER_AUTH = gql`
  mutation addUserAuth($userUid: Int!, $username: String!, $password: String!, $passwordc: String!) {
    createUserAuth(
      userUid: $userUid, 
      username: $username, 
      password: $password, 
      passwordc: $passwordc, 
    ){
      ok
      userAuth {
        uid
        userName
        userType
        isBlocked
        loginRetry
      }
    }
  }
`;


export const EDIT_USER_AUTH = gql`
  mutation  editUserAuth($userUid: Int!, $username: String!, $password: String!, $passwordc: String!) {
    updateUserAuth(
      userUid: $userUid, 
      username: $username, 
      password: $password, 
      passwordc: $passwordc, 
    ){
      ok
      user {
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
`;


export const UPDATE_GROUP_PERMS = gql`
  mutation updateGroupsAndPermissions($groupUid: String!, $permissionUid: String!) {
    updateGroupsAndPermissions(groupUid: $groupUid, permissionUid: $permissionUid) {
      ok
      group {
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
  }`;


export const ADD_DEPARTMENT = gql`
  mutation addDepartment($name: String!) {
    createDepartment(name: $name) {
      ok
      department {
        uid
        name
      }
    }
  }`;


export const UPDATE_DEPARTMENT = gql`
  mutation editDepartment($uid: String!, $name: String!) {
    updateDepartment(uid: $uid, name: $name) {
      ok
      department {
        uid
        name
      }
    }
  }`;
