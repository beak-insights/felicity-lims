import gql from 'graphql-tag'

export const GET_ALL_CLIENTS = gql`
  query getAllClients {
    clientAll {
      edges{
        node {
          uid
          name
          code
          district {
            uid
            name
            province {
              uid
              name
              country{
                uid
                name
              }
            }
          }
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
        district {
          uid
          name
          province {
            uid
            name
            country{
              uid
              name
            }
          }
        }
    }
  }`;

export const GET_CLIENT_CONTACTS_BY_CLIENT_UID = gql`
  query getClientContactsByClientUid($clientUid: String!) {
    clientContactByClientUid(clientUid: $clientUid){
      uid
      firstName
      lastName
      email
      mobilePhone
      consentSms
    }
  }`;