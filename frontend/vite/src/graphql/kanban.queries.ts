import gql from 'graphql-tag'

export const GET_ALL_BOARDS = gql`
  query getAllBoards {
    boardAll{
      edges {
        node {
          uid
          title
          description
          department {
            uid
            name
          }
        }
      }
    }
  }`;


export const GET_BOARD_BY_UID = gql`
  query getBoardByUid($uid: String!) {
    boardByUid(uid: $uid){
      uid
      title
      description
      department {
        uid
        name
      }
      boardListings {
        edges {
          node {
            uid
            title
            description
            listingTasks {
              edges { 
                node {
                    uid
                    title
                    description
                 }
              }
            }
          }
        }
      }
    }
}`;
