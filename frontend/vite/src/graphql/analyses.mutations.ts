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
  mutation AddAnalysisService ($name: String!, $keyword: String!, $active: Boolean, $description: String!, $sampleTypes: List<string>, profiles: List<string>) {
    createAnalysis(name: $name, keyword: $keyword, active: $active, description: $description, profiles: $profiles, sampleTypes:$sampleTypes){
    analysis {
      uid
      name
      keyword
      description
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
  mutation EditAnalysisService ($uid: Int!, $name: String!, $keyword: String!, $active: Boolean, $description: String!, $sampleTypes: List<string>, profiles: List<string>) {
    createAnalysis(uid: $uid, name: $name, keyword: $keyword, active: $active, description: $description, profiles: $profiles, sampleTypes:$sampleTypes){
    analysis {
      uid
      name
      keyword
      description
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
  mutation AddAnalysisProfile ($name: String!, $keyword: String!, $active: Boolean, $description: String!) {
    createProfile(name: $name, keyword: $keyword, active: $active, description: $description){
      profile {
      uid
      name
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
  mutation EditAnalysisProfile ($uid: Int!, $name: String!, $keyword: String!, $active: Boolean, $description: String!) {
    createProfile(uid: $uid, name: $name, keyword: $keyword, active: $active, description: $description){
      profile {
      uid
      name
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