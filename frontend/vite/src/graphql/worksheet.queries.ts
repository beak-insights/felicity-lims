import gql from 'graphql-tag';


export const GET_ALL_WORKSHEET_TEMPLATES = gql`
  query getAllWorksheetTemplates {
    worksheetTemplateAll {
      edges {
        node {
          uid
          name
          reserved
          plate
          numberOfSamples
          rows
          cols
          rowWise
          worksheetType
          instrument {
            uid
            name
          }
          sampleType {
            uid
            name
          }
          description
          analyses {
            edges {
              node {
                uid
                name
              }
            }
          }
          state
        }
      }
    }
  }`;



export const GET_ALL_WORKSHEETS = gql`
  query getAllWorksheets {
    worksheetAll {
    edges {
      node {
        uid
        worksheetId
        numberOfSamples
        assignedCount
        analyst {
          uid
          auth{
            uid
            userName
          }
          firstName
          lastName
        }
        instrument {
          uid
          name
        }
        analyses {
          edges {
            node {
              uid
              name
            }
          }
        }
        state
        createdAt
      }
    }
  }
  }`;




export const GET_WORKSHEET_BY_UID = gql`
  query getWorkSheetByUid($worksheetUid: String!) {
    worksheetByUid(worksheetUid: $worksheetUid) {
    uid
    worksheetId
    numberOfSamples
    assignedCount
    reserved
    state
    createdAt
    analyst {
      uid
      auth{
        uid
        userName
      }
      firstName
      lastName
    }
    sampleType {
      name
      name
    }
    instrument {
      uid
      name
    }
    template {
      uid
      name
    }
    analyses {
      edges {
        node {
          uid
          name
        }
      }
    }
    plate
    analysisResults {
      edges {
        node {
          uid
          result
          status
          worksheetPosition
          method {
            uid
            name
          }
          instrument {
            uid
            name
          }
          analysis {
            uid
            name
            unit
            resultoptions {
              edges {
                node {
                  uid
                  optionKey
                  value
                }
              }
            }
          }
          sample {
            uid
            sampleId
            priority
            analysisrequest {
              uid
              client {
                uid
                name
              }
              patient {
                uid
                firstName
                lastName
                clientPatientId
                patientId
              }
            }
          }
        }
      }
    }
  }
  }`;
