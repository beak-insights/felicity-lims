import gql from 'graphql-tag';

export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $code: String!, $districtUid: Int!) {
    createClient(name: $name, code: $code, districtUid: $districtUid) {
      client {
        uid
        name
        code
        districtUid
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
`;

export const EDIT_CLIENT = gql`
  mutation editClient($uid: String!, $name: String!, $code: String!, $districtUid: Int!){
    updateClient(uid: $uid, name: $name, code: $code, districtUid: $districtUid){
      client{
        uid
        name
        code
        districtUid
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
`;

export const ADD_CLIENT_CONTACT = gql`
  mutation AddClientContact($clientUid: String!, $firstName: String!, $email: String, $mobilePhone: String) {
    createClientContact(clientUid: $clientUid, firstName:$firstName, email: $email, mobilePhone: $mobilePhone, isActive:false){
      clientContact{
        uid
        firstName
        lastName
        email
        mobilePhone
        consentSms
      }
    }
  }
`;

export const EDIT_CLIENT_CONTACT = gql`
  mutation editClientContact($uid: String!, $firstName: String!, $email: String, $mobilePhone: String){
    updateClientContact(uid: $uid, firstName: $firstName, email: $email, mobilePhone: $mobilePhone){
      clientContact{
        uid
        firstName
        lastName
        email
        mobilePhone
        consentSms
      }
    }
  }
`;