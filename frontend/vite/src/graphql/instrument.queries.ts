import gql from 'graphql-tag';

export const GET_ALL_INSTRUMENTS = gql`
    query getAllInstruments {
        instrumentAll {
            edges{
            node {
              uid
              name
              description
              keyword
              supplier {
                uid
                name
              }
            }
        }
    }
}`;



export const GET_ALL_METHODS = gql`
    query getAllMethods {
        methodAll {
            edges{
              node {
                uid
                name
                description
                keyword
              }
          }
      }
  }`;
