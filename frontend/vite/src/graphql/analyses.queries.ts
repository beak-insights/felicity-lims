import gql from 'graphql-tag';

export const GET_ALL_SAMPLE_TYPES = gql`
    query getAllSampleTypes {
        sampleTypeAll {
            edges{
            node {
                uid
                name
                abbr
                description
                active
            }
        }
    }
}`;

export const GET_ALL_ANALYSES_SERVICES = gql`
    query getAllAnalysesServices {
        analysisAll{
            edges {
                node {
                    uid
                    name
                    keyword
                    active
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
}`;



export const GET_ALL_ANALYSES_PROFILES = gql`
    query getAllAnalysesProfiles {
        profileAll {
            edges {
                node {
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
    }
}`;
