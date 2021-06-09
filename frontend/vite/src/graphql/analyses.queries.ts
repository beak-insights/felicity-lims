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
}`;

export const GET_ANALYSES_SERVICES_FOR_QC = gql`
    query getAnalysisForQc {
      analysisForQc{
        uid
        name
        keyword
        active
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
}`;

export const GET_ALL_ANALYSES_PROFILES = gql`
    query getAllAnalysesProfiles {
        profileAll {
            edges {
                node {
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
    }`;


export const GET_ALL_ANALYSES_PROFILES_AND_SERVICES = gql`
    query getAllProfilesANDServices {
        profileAll {
            edges {
                node {
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

        analysisAll{
            edges {
                node {
                    uid
                    name
                    keyword
                    active
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

    }`;

export const GET_ALL_ANALYSES_CATEGORIES = gql`
    query getAllAnalysesCategories {
        analysisCategoryAll {
            edges {
                node {
                    uid
                    name
                    description
                    active
                }
            }
        }
    }`;


export const GET_ALL_SAMPLES = gql`
    query getAllSamples($first: Int!, $after: String, $status: String, $text: String, $clientUid: String) {
      	sampleCount(status:$status, text:$text, clientUid: $clientUid)
        sampleAll(first:$first, after:$after, status:$status, text:$text, clientUid: $clientUid) {
        	pageInfo {
              hasNextPage
              hasPreviousPage
              endCursor
              startCursor
            }
            edges {
                cursor
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
    }`;


export const GET_ANALYSIS_REQUESTS_BY_PATIENT_UID = gql`
query getAnalysesRequestsByPatientUid($uid: String!) {
  analysisRequestsByPatientUid(uid: $uid) {
    uid
    clientRequestId
    createdAt
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
    samples {
      edges {
        node {
          uid
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

}`;




export const GET_ANALYSIS_REQUESTS_BY_CLIENT_UID = gql`
query getAnalysesRequestsByClientUid($uid: String!) {
  analysisRequestsByClientUid(uid: $uid) {
    uid
    clientRequestId
    createdAt
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
    samples {
      edges {
        node {
          uid
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

}`;



export const GET_ANALYSIS_RESULTS_BY_SAMPLE_UID = gql`
    query getAnalysesResultsBySampleUid($uid: String!) {
        analysisResultBySampleUid(uid: $uid) {
        uid
        status
        sampleUid
        result
          method {
            uid
            name
          }
          instrument {
            uid
            name
          }
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

        sampleByUid(uid: $uid){
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

    }`;


export const GET_ALL_QC_LEVELS = gql`
  query getAllQCLevels {
  qcLevelAll {
    edges {
      node {
        uid
        level
      }
    }
  }
}`;

export const GET_ALL_QC_TEMPLATES = gql`
    query getAllQCTemplates {
    qcTemplateAll {
      edges {
        node {
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
  }`;


export const GET_ALL_QC_SETS = gql`
  query getQCSeTs {
    qcSetAll {
      edges {
        node {
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
  }`;


export const GET_QC_SET_BY_UID = gql`
    query getQCSetByUid($uid: String!) {
      qcSetByUid(uid: $uid) {
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
              createdAt
              updatedAt
              assigned
              qcLevel {
                uid
                level
              }
              analysisResults {
                edges {
                  node {
                    status
                    sampleUid
                    result
                    analysisUid
                    analysis {
                      uid
                      name
                    }
                    method {
                      uid
                      name
                    }
                    instrument {
                      uid
                      name
                    }
                  }
                }
              }
              analyses {
                edges {
                  node {
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
    }`;
