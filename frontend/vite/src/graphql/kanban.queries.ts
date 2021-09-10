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



export const GET_LISTING_TASK_BY_UID = gql`
  query getListingTaskUid($uid: String!) {
    listingTaskByUid(uid: $uid){
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
}`;
