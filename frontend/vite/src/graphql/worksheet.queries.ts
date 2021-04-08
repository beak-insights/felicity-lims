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
