import gql from 'graphql-tag';

export const GET_ALL_SAMPLE_TYPES = gql`
    query getAllSampleTypes {
        sampletypeAll {
            edges{
            node {
                uid
                name
                abbr
            }
            }
            }
        }
    }`;
