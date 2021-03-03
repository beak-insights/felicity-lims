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

export const SEARCH_CLIENTS = gql`
  query searchClients($queryString: String!) {
    clientSearch(queryString: $queryString){
        uid
        name
        code
    }
  }`;