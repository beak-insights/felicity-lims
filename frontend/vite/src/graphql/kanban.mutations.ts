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


export const EDIT_LISTING_TASK = gql`
  mutation editListingTask($uid: String!, $title: String, $description: String, $listingUid: String, $dueDate: String, 
    $assigneeUid: String, $members: [String], $tags: [String], $status: String, $archived: Boolean) {
    updateListingTask(uid: $uid, title: $title, description: $description, listingUid: $listingUid, dueDate: $dueDate, 
    assigneeUid: $assigneeUid, members: $members, tags: $tags, status: $status, archived: $archived){
      task {
      uid
      listingUid
      title
      description
      assigneeUid
      assignee {
        uid
        firstName
        lastName
        auth {
          userName
        }
      }
      dueDate
      members {
        edges {
          node {
            uid
            firstName
            lastName
            auth {
              userName
            }
          }
        }
      }
      tags {
        edges {
          node {
            uid
            name
          }
        }
      }
      taskMilestones {
        edges {
          node {
            uid
            title
            done
            assigneeUid
            assignee {
              lastName
              firstName
              auth {
                userName
              }
            }
            createdAt
            createdByUid
            createdBy {
              firstName
              lastName
              auth {
                userName
              }
            }
          }
        }
      }
      taskComments {
        edges {
          node {
            uid
            comment
            updatedAt
            updatedByUid
            updatedBy {
              firstName
              lastName
              auth {
                userName
              }
            }
          }
        }
      }
      status
      }
    }
  }
`;

export const DELETE_LISTING_TASK = gql`
  mutation removeListingTask($uid: String!) {
    deleteListingTask(uid: $uid){
      taskUid
      ok
    }
  }
`;

export const DUPLICATE_LISTING_TASK = gql`
  mutation copyListingTask($uid: String!, $title: String!) {
    duplicateListingTask(uid: $uid, title: $title){
      task {
          uid
          listingUid
          title
          description
          listingUid
      }
    }
  }
`;

export const ADD_TASK_COMMENT = gql`
  mutation addTaskComment($comment: String!, $taskUid: String!) {
    createTaskComment(comment: $comment, taskUid: $taskUid){
      taskComment {
      uid
      comment
      updatedByUid
      updatedBy {
        firstName
        lastName
        auth {
          userName
        }
      }
      updatedAt
      }
    }
  }
`;

export const ADD_TASK_MILESTONE = gql`
  mutation addTaskMIlestone($title: String!, $taskUid: String!, $done: Boolean, $assigneeUid: String) {
    createTaskMilestone(title: $title, taskUid: $taskUid, done: $done, assigneeUid: $assigneeUid){
      taskMilestone {
      uid
      title
      done
      assigneeUid
      assignee {
        firstName
        lastName
        auth {
          userName
        }
      }
      updatedByUid
      updatedBy {
        firstName
        lastName
        auth {
          userName
        }
      }
      updatedAt
      }
    }
  }
`;