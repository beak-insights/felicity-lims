import gql from 'graphql-tag';

// SAMPLE_TYPE
export const ADD_SAMPLE_TYPE= gql`
  mutation AddSampleType ($name: String!, $abbr: String!, $active: Boolean, $description: String!) {
    createSampleType(name: $name, abbr: $abbr, active: $active, description: $description){
      sampleType {
        uid
        name
        abbr
        description
        active
      }
    }
  }
`;

export const EDIT_SAMPLE_TYPE= gql`
  mutation AddSampleType ($uid: Int!, $name: String, $abbr: String, $active: Boolean, $description: String) {
    updateSampleType(uid: $uid, name: $name, abbr: $abbr, active: $active, description: $description){
      sampleType {
        uid
        name
        abbr
        description
        active
      }
    }
  }
`;

// ANALYSIS_SERVICE
export const ADD_ANALYSIS_SERVICE= gql`
  mutation AddAnalysisService ($name: String!, $keyword: String!, $active: Boolean!, $internalUse: Boolean!, $description: String!, $categoryUid: String!, $sortKey: Int!, $sampleTypes: [String]) {
    createAnalysis(name: $name, keyword: $keyword, active: $active, internalUse: $internalUse, description: $description, sortKey: $sortKey, categoryUid: $categoryUid, sampleTypes:$sampleTypes){
    analysis {
      uid
      name
      keyword
      description   
      categoryUid   
      category {
          uid
          name
      }
      profiles {
        edges {
          node {
            uid
            name
          }
        }
      }
    }
  }
  }
`;

export const EDIT_ANALYSIS_SERVICE= gql`
  mutation EditAnalysisService ($uid: Int!, $name: String!, $keyword: String!, $active: Boolean!, $sortKey: Int! $internalUse: Boolean!, $categoryUid: String!, $description: String!, $sampleTypes: [String]) {
    updateAnalysis(uid: $uid, name: $name, keyword: $keyword, active: $active, internalUse: $internalUse, sortKey: $sortKey, categoryUid: $categoryUid, description: $description, sampleTypes:$sampleTypes){
    analysis {
      uid
      name
      keyword
      description
      categoryUid
      category {
          uid
          name
      }
      profiles {
        edges {
          node {
            uid
            name
          }
        }
      }
    }
  }
  }
`;

// ANALYSIS_PROFILES
export const ADD_ANALYSIS_PROFILE= gql`
  mutation AddAnalysisProfile ($name: String!, $keyword: String!, $active: Boolean!, $description: String!) {
    createProfile(name: $name, keyword: $keyword, active: $active, description: $description){
      profile {
      uid
      name
      description
      keyword
      active
      analyses {
        edges {
          node {
            uid
            name
            keyword
            active
          }
        }
      }
    }
  }
  }
`;

export const EDIT_ANALYSIS_PROFILE= gql`
  mutation EditAnalysisProfile ($uid: Int!, $name: String!, $keyword: String!, $active: Boolean!, $description: String! $services: [String]) {
    updateProfile(uid: $uid, name: $name, keyword: $keyword, active: $active, description: $description, services: $services){
      profile {
      uid
      name     
      description
      keyword
      active
      analyses {
        edges {
          node {
            uid
            name
            keyword
            active
          }
        }
      }
    }
  }
  }
`;


// ANALYSIS_CATEGORIES
export const ADD_ANALYSIS_CATEGORY= gql`
  mutation AddAnalysisCategory ($name: String!, $description: String!, $active: Boolean) {
    createAnalysisCategory(name: $name, description: $description, active: $active){
      analysisCategory {
        uid
        name
        active
        description
    }
  }
  }
`;

export const EDIT_ANALYSIS_CATEGORY= gql`
  mutation EditAnalysisCategory ($uid: Int!, $name: String!, $description: String!, $active: Boolean) {
    updateAnalysisCategory(uid: $uid, name: $name, description: $description, active: $active){
      analysisCategory {
        uid
        name
        active
        description
    }
  }
  }
`;


// ANALYSIS REQUEST
export const ADD_ANALYSIS_REQUEST = gql`
mutation AddAnalysisRequest ($clientRequestId: String!, $clientUid: String!, $patientUid: String!, $samples: [ARSampleInputType]!) {
  createAnalysisRequest(clientRequestId: $clientRequestId, clientUid: $clientUid, patientUid: $patientUid, samples: $samples) {
    analysisrequest {
      uid
      samples {
        edges {
          node {
            uid
            analysisrequest {
              uid
              clientRequestId
              patient {
                uid
                firstName
                lastName
                clientPatientId
                gender
                dateOfBirth
                age
                ageDobEstimated
                consentSms
              }
              client {
                uid
                name
              }
            }
            sampletype {
              uid
              name
            }
            sampleId
            priority
            status
            analyses {
              edges {
                node {
                  uid
                  name
                }
              }
            }
            profiles {
              edges {
                node {
                  uid
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;


// ANALYSIS RESULTS
export const SUBMIT_ANALYSIS_RESULTS = gql`
  mutation SubmitAnalysisResults ($analysisResults: [ARResultInputType]!) {
    submitAnalysisResults(analysisResults: $analysisResults){
      analysisResults {
        uid
        status
        sampleUid
        result
        sample{
          uid
          sampleId
          status
          rejectionReasons {
            edges {
              node {
                uid
                reason
              }
            }
          }
        }
        analysisUid
        analysis{
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
        createdAt
        createdByUid
        updatedAt
        updatedByUid
        }
      }
  }
`; 

export const VERIFY_ANALYSIS_RESULTS = gql`
  mutation VerifyAnalysisResults ($analyses: [String]!) {
    verifyAnalysisResults(analyses: $analyses){
      analysisResults {
        uid
        status
        sampleUid
        result
        sample{
          uid
          sampleId
          status
          rejectionReasons {
            edges {
              node {
                uid
                reason
              }
            }
          }
        }
        analysisUid
        analysis{
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
        createdAt
        createdByUid
        updatedAt
        updatedByUid
        }
      }
  }
`; 
 

// qc levels
export const ADD_QC_LEVEL = gql`
  mutation AddQCLevel($level: String!) {
    createQcLevel(level: $level ){
      qcLevel {
        uid
        level
    }
  }
  }
`;

export const EDIT_QC_LEVEL = gql`
  mutation EditQCLevel ($uid: Int!, $level: String!) {
    updateQcLevel(uid: $uid, level: $level){
      qcLevel {
        uid
        level
      }
    }
  }
`;



// ANALYSIS_CATEGORIES
export const ADD_QC_TEMPLATE = gql`
  mutation AddQCTemplate ($name: String!, $description: String!, $levels: [String], $departments: [String]) {
    createQcTemplate(name: $name, description: $description, levels: $levels, departments: $departments ){
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
          departments {
            edges {
              node {
                uid
                name
              }
            }
          }
    }
  }
  }
`;

export const EDIT_QC_TEMPLATE = gql`
  mutation EditQCTemplate ($uid: Int!, $name: String!, $description: String!, $levels: [String], $departments: [String]) {
    updateQcTemplate(uid: $uid, name: $name, description: $description, levels: $levels, departments: $departments){
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
        departments {
          edges {
            node {
              uid
              name
            }
          }
        }
      }
    }
  }
`;


// ANALYSIS_CATEGORIES
export const ADD_QC_REQUEST = gql`
  mutation AddQCRequest($samples: [QCSetInputType]!) {
    createQcSet(samples: $samples){
      qcSets {
        uid
        name
        note
        createdAt
        samples {
          edges {
            node {
              uid
              sampleId
              status
              qcLevel {
                uid
                level
              }
              analyses {
                edges {
                  node {
                    uid
                    name
                  }
                }
              }
              profiles {
                edges {
                  node {
                    uid
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
