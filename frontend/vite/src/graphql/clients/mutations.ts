import gql from 'graphql-tag';


export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $code: String!, $districtUid: Int!) {
    createClient(name: $name, code: $code, districtUid: $districtUid) {
      client {
        uid
        name
        code
        districtUid
      }
    }
  }
`;
