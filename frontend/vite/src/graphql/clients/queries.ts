import gql from 'graphql-tag'

export const GET_ALL_CLIENTS = gql`
  query getAllClients {
    clientAll {
      edges{
        node {
          uid
          name
          code
        }
      }
    }
  }`;
