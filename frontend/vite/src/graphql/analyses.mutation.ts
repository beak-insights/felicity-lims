import gql from 'graphql-tag';

export const ADD_SAMPLE_TYPE= gql`
  mutation AddSampleType ($name: String!, $abbr: String!, $active: Boolean, $description: String!) {
    createSampletype(name: $name, abbr: $abbr, active: $active, description: $description){
      description
      sampletype {
        uid
        name
        description
      }
    }
  }
`;