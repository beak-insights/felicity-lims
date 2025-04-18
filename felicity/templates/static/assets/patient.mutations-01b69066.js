import{g as i}from"./index-d30fd8e2.js";const t=i`
    mutation AddIdentification($name: String!) {
  createIdentification(name: $name) {
    ... on IdentificationType {
      __typename
      uid
      name
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `,n=i`
    mutation EditIdentification($uid: String!, $name: String!) {
  updateIdentification(uid: $uid, name: $name) {
    ... on IdentificationType {
      __typename
      uid
      name
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `,a=i`
    mutation AddPatient($payload: PatientInputType!) {
  createPatient(payload: $payload) {
    ... on PatientType {
      __typename
      uid
      clientPatientId
      patientId
      firstName
      middleName
      lastName
      age
      gender
      dateOfBirth
      ageDobEstimated
      client {
        uid
        name
        district {
          name
          province {
            name
          }
        }
      }
      phoneHome
      phoneMobile
      consentSms
      identifications {
        uid
        value
        identificationUid
        identification {
          uid
          name
        }
      }
      countryUid
      country {
        uid
        name
      }
      provinceUid
      province {
        uid
        name
      }
      districtUid
      district {
        uid
        name
      }
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `;i`
    mutation EditPatient($uid: String!, $payload: PatientInputType!) {
  updatePatient(uid: $uid, payload: $payload) {
    ... on PatientType {
      __typename
      uid
      clientPatientId
      patientId
      firstName
      middleName
      lastName
      age
      gender
      dateOfBirth
      ageDobEstimated
      client {
        uid
        name
        district {
          name
          province {
            name
          }
        }
      }
      phoneHome
      phoneMobile
      consentSms
      identifications {
        uid
        value
        identificationUid
        identification {
          uid
          name
        }
      }
      countryUid
      country {
        uid
        name
      }
      provinceUid
      province {
        uid
        name
      }
      districtUid
      district {
        uid
        name
      }
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `;export{a as A,n as E,t as a};
