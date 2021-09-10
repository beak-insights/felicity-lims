import gql from 'graphql-tag';

export const ADD_WORKSHEET_TEMPLATE= gql`
  mutation AddWorkSheetTemplate($name: String!, $sampleTypeUid: String!, $description: String, $qcTemplateUid: String, $reserved: [ReservedInputType]!, $numberOfSamples: String!, $worksheetType: String, $instrumentUid: String, $cols:  String, $rows:  String, $analyses: [String]!, $rowWise: Boolean){
  createWorksheetTemplate(name: $name, sampleTypeUid: $sampleTypeUid, description: $description, qcTemplateUid: $qcTemplateUid, reserved: $reserved, numberOfSamples: $numberOfSamples, worksheetType: $worksheetType, instrumentUid: $instrumentUid, cols: $cols, rows: $rows, analyses: $analyses, rowWise: $rowWise)
  {
    worksheetTemplate {
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
          qcTemplate {
            uid
            name
            description
            qcLevels {
              edges {
                node {
                  uid
                  level
                }
              }
            }
          }
          qcLevels {
            edges {
              node {
                uid
                level
              }
            }
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
        }
  }
}`;

export const EDIT_WORKSHEET_TEMPLATE= gql`
  mutation EditWorkSheetTemplate($uid:String!, $name: String!, $sampleTypeUid: String!, $description: String, $qcTemplateUid: String, $reserved: [ReservedInputType]!, $numberOfSamples: String!, $worksheetType: String, $instrumentUid: String, $cols:  String, $rows:  String, $analyses: [String]!, $rowWise: Boolean){
  updateWorksheetTemplate(uid: $uid, name: $name, sampleTypeUid: $sampleTypeUid, description: $description, qcTemplateUid: $qcTemplateUid, reserved: $reserved, numberOfSamples: $numberOfSamples, worksheetType: $worksheetType, instrumentUid: $instrumentUid, cols: $cols, rows: $rows, analyses: $analyses, rowWise: $rowWise)
  {
    worksheetTemplate {
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
          qcTemplate {
            uid
            name
            description
            qcLevels {
              edges {
                node {
                  uid
                  level
                }
              }
            }
          }
          qcLevels {
            edges {
              node {
                uid
                level
              }
            }
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
        }
  }
}`;


export const ADD_WORKSHEET = gql`
  mutation AddWorkSheet($analystUid:Int!, $templateUid: Int!){
    createWorksheet(analystUid: $analystUid, templateUid: $templateUid)
    {
      worksheet {
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
  }`;



export const WORKSHEET_UPDATE = gql`
  mutation UpdateWorkSheet ($worksheetUid:Int!, $analystUid: Int, $action: String, $samples: [Int]) {
    updateWorksheet(worksheetUid: $worksheetUid, analystUid: $analystUid, action: $action, samples: $samples )
    {
      worksheet {
        uid
        numberOfSamples
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
        plate
      }
    }
  }`;


export const EDIT_WORKSHEET_APPLY_TEMPLATE= gql`
  mutation EditWorkSheetApplyTemplate($worksheetUid:Int!, $templateUid: Int!){
    updateWorksheetApplyTemplate(worksheetUid: $worksheetUid, templateUid: $templateUid)
  {
    worksheet {
      uid
      numberOfSamples
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
      plate
    }
  }
}`;