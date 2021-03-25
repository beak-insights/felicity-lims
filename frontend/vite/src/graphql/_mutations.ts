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

