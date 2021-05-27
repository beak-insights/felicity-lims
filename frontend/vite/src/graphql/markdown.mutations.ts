import gql from 'graphql-tag';

export const ADD_MARKDOWN_DOCUMENT = gql`
  mutation AddMDocument($name: String!, $departmentUid: String!) {
    createDocument(name: $name, departmentUid: $departmentUid){
      document {
          uid
          name
          version
          status
          departmentUid
          department {
            uid
            name
          }
      }
    }
  }
`;

export const EDIT_MARKDOWN_DOCUMENT = gql`
  mutation editMDocument($uid: String!, $name: String, $departmentUid: String, $content: String){
    updateDocument(uid: $uid, name: $name, departmentUid: $departmentUid, content: $content){
      document {
          uid
          name
          version
          status
          content
          departmentUid
          department {
            uid
            name
          }
      }
    }
  }
`;
