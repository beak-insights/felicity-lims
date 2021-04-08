import gql from 'graphql-tag';

export const ADD_WORKSHEET_TEMPLATE= gql`
  mutation AddWorkSheetTemplate($name: String!, $sampleTypeUid: String!, $description: String, $reserved: [ReservedInputType]!, $numberOfSamples: String!, $worksheetType: String, $instrumentUid: String, $cols:  String, $rows:  String, $analyses: [String]!, $rowWise: Boolean){
  createWorksheetTemplate(name:$name, sampleTypeUid: $sampleTypeUid, description: $description reserved: $reserved, numberOfSamples: $numberOfSamples, worksheetType: $worksheetType, instrumentUid: $instrumentUid, cols: $cols, rows: $rows, analyses: $analyses, rowWise: $rowWise)
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
}`;