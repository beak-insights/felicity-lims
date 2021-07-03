import gql from 'graphql-tag';

export const ADD_BOARD = gql`
  mutation AddBoard($title: String!, $departmentUid: String, $description: String) {
    createBoard(title: $title, departmentUid: $departmentUid, description: $description){
      board {
          uid
          title
          description
          departmentUid
          department {
            uid
            name
          }
      }
    }
  }
`;

export const EDIT_BOARD = gql`
  mutation editBoard($uid: String!, $title: String!, $departmentUid: String, $description: String){
    updateBoard(uid: $uid, title: $title, departmentUid: $departmentUid, description: $description){
      board {
          uid
          title
          description
          departmentUid
          department {
            uid
            name
        }
      }
    }
  }
`;


// board listing
export const ADD_BOARD_LISTING = gql`
  mutation addBoardListing($title: String!, $boardUid: String!, $description: String) {
    createBoardListing(title: $title, boardUid: $boardUid, description: $description){
      listing {
          uid
          title
          description
          boardUid
      }
    }
  }
`;


export const ADD_LISTING_TASK = gql`
  mutation addListingTask($title: String!, $listingUid: String!, $description: String) {
    createListingTask(title: $title, listingUid: $listingUid, description: $description){
      task {
          uid
          title
          description
          listingUid
      }
    }
  }
`;