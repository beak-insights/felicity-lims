import gql from 'graphql-tag';

export const SUBSCRIBE_TO_ACTIVITY_STREAM = gql`
    subscription getSystemActivity {
        latestActivity {
            uid
            actorUid
            actor {
                uid
                firstName
                lastName
            }
            actionObjectUid
            actionObjectType
            actionObject {
                __typename
                ... on SampleType {
                    uid
                    sampleId
                    status
                    analysisRequest {
                        patientUid
                    }
                }
                ... on WorkSheetType {
                    uid
                    worksheetId
                    state
                }
                ... on AnalysisResultType {
                    uid
                    sampleUid
                    result
                    status
                }
                ... on ReportMetaType {
                    uid
                    status
                    location
                }
            }
            targetUid
            verb
        }
    }
`;
