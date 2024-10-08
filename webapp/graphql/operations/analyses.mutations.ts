import gql from 'graphql-tag';

export const ADD_CODING_STANDARD = gql`
    mutation AddCodingStandard($payload: CodingStandardInputType!) {
        createCodingStandard(payload: $payload) {
            ... on CodingStandardType {
                __typename
                uid
                name
                description
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_CODING_STANDARD = gql`
    mutation EditCodingStandard($uid: String!, $payload: CodingStandardInputType!) {
        updateCodingStandard(uid: $uid, payload: $payload) {
            ... on CodingStandardType {
                __typename
                uid
                name
                description
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// SAMPLE_TYPE
export const ADD_SAMPLE_TYPE = gql`
    mutation AddSampleType($payload: SampleTypeInputType!) {
        createSampleType(payload: $payload) {
            ... on SampleTypeTyp {
                __typename
                uid
                name
                abbr
                description
                active
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_SAMPLE_TYPE = gql`
    mutation EditSampleType($uid: String!, $payload: SampleTypeInputType!) {
        updateSampleType(uid: $uid, payload: $payload) {
            ... on SampleTypeTyp {
                __typename
                uid
                name
                abbr
                description
                active
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;



export const ADD_SAMPLE_TYPE_MAPPING = gql`
    mutation AddSampleTypeMapping($payload: SampleTypeMappingInputType!) {
        createSampleTypeMapping(payload: $payload) {
            ... on SampleTypeMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                sampleTypeUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_SAMPLE_TYPE_MAPPING = gql`
    mutation EditSampleTypeMapping($uid: String!, $payload: SampleTypeMappingInputType!) {
        updateSampleTypeMapping(uid: $uid, payload: $payload) {
            ... on SampleTypeMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                sampleTypeUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


export const REINSTATE_SAMPLES = gql`
    mutation ReInstateSamples($samples: [String!]!) {
        reInstateSamples(samples: $samples) {
            ... on ResultedSampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const CLONE_SAMPLES = gql`
    mutation CloneSamples($samples: [String!]!) {
        cloneSamples(samples: $samples) {
            ... on SampleListingType {
                __typename
                samples {
                    uid
                    parentId
                    sampleType {
                        uid
                        name
                    }
                    sampleId
                    priority
                    status
                    analyses {
                        uid
                        name
                        sortKey
                    }
                    profiles {
                        uid
                        name
                    }
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const CANCEL_SAMPLES = gql`
    mutation CancelSamples($samples: [String!]!) {
        cancelSamples(samples: $samples) {
            ... on ResultedSampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const RECEIVE_SAMPLES = gql`
    mutation ReceiveSamples($samples: [String!]!) {
        receiveSamples(samples: $samples) {
            ... on ResultedSampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const PUBLISH_SAMPLES = gql`
    mutation PublishSamples($samples: [SamplePublishInputType!]!) {
        publishSamples(samples: $samples) {
            ... on OperationSuccess {
                __typename
                message
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const PRINT_SAMPLES = gql`
    mutation PrintSamples($samples: [String!]!) {
        printSamples(samples: $samples) {
            ... on SampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const INVALIDATE_SAMPLES = gql`
    mutation InvalidateSamples($samples: [String!]!) {
        invalidateSamples(samples: $samples) {
            ... on SampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const VERIFY_SAMPLES = gql`
    mutation VerifySamples($samples: [String!]!) {
        verifySamples(samples: $samples) {
            ... on SampleListingType {
                __typename
                samples {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const REJECT_SAMPLES = gql`
    mutation RejectSamples($samples: [SampleRejectInputType!]!) {
        rejectSamples(samples: $samples) {
            ... on SampleListingType {
                __typename
                samples {
                    uid
                    status
                    rejectionReasons {
                        uid
                        reason
                    }
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// RESULT_OPTION
export const ADD_RESULT_OPTION = gql`
    mutation AddResultOption($payload: ResultOptionInputType!) {
        createResultOption(payload: $payload) {
            ... on ResultOptionType {
                uid
                optionKey
                value
                analysisUid
                sampleTypes{
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
`;

export const EDIT_RESULT_OPTION = gql`
    mutation EditResultOption($uid: String!, $payload: ResultOptionInputType!) {
        updateResultOption(uid: $uid, payload: $payload) {
            ... on ResultOptionType {
                uid
                optionKey
                value
                analysisUid
                sampleTypes{
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
`;

// ANALYSIS_INTERIM
export const ADD_ANALYSIS_INTERIM = gql`
    mutation AddAnalysisInterim($payload: AnalysisInterimInput!) {
        createAnalysisInterim(payload: $payload) {
            ... on AnalysisInterimType {
                uid
                key
                value
                analysisUid
                instrumentUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_INTERIM = gql`
    mutation EditAnalysisInterim($uid: String!, $payload: AnalysisInterimInput!) {
        updateAnalysisInterim(uid: $uid, payload: $payload) {
            ... on AnalysisInterimType {
                uid
                key
                value
                analysisUid
                instrumentUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS_CORRECTION_FACTOR
export const ADD_ANALYSIS_CORRECTION_FACTOR = gql`
    mutation AddAnalysisCorrectionFactor($payload: AnalysisCorrectionFactorInput!) {
        createAnalysisCorrectionFactor(payload: $payload) {
            ... on AnalysisCorrectionFactorType {
                uid
                factor
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_CORRECTION_FACTOR = gql`
    mutation EditAnalysisCorrectionFactor($uid: String!, $payload: AnalysisCorrectionFactorInput!) {
        updateAnalysisCorrectionFactor(uid: $uid, payload: $payload) {
            ... on AnalysisCorrectionFactorType {
                uid
                factor
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS_UNCERTAINTY
export const ADD_ANALYSIS_UNCERTAINTY = gql`
    mutation AddAnalysisUncertainty($payload: AnalysisUncertaintyInput!) {
        createAnalysisUncertainty(payload: $payload) {
            ... on AnalysisUncertaintyType {
                uid
                value
                min
                max
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_UNCERTAINTY = gql`
    mutation EditAnalysisUncertainty($uid: String!, $payload: AnalysisUncertaintyInput!) {
        updateAnalysisUncertainty(uid: $uid, payload: $payload) {
            ... on AnalysisUncertaintyType {
                uid
                value
                min
                max
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS DETECTION LIMIT
export const ADD_ANALYSIS_DETECTION_LIMIT = gql`
    mutation AddAnalysisDetectionLimit($payload: AnalysisDetectionLimitInput!) {
        createAnalysisDetectionLimit(payload: $payload) {
            ... on AnalysisDetectionLimitType {
                uid
                lowerLimit
                upperLimit
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_DETECTION_LIMIT = gql`
    mutation EditAnalysisDetectionLimit($uid: String!, $payload: AnalysisDetectionLimitInput!) {
        updateAnalysisDetectionLimit(uid: $uid, payload: $payload) {
            ... on AnalysisDetectionLimitType {
                uid
                lowerLimit
                upperLimit
                analysisUid
                instrumentUid
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS SPECIFICATION
export const ADD_ANALYSIS_SPECIFICATION = gql`
    mutation AddAnalysisSpecification($payload: AnalysisSpecificationInput!) {
        createAnalysisSpecification(payload: $payload) {
            ... on AnalysisSpecificationType {
                uid
                analysisUid
                min
                max
                minWarn
                maxWarn
                minReport
                maxReport
                warnValues
                warnReport
                gender
                ageMin
                ageMax
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_SPECIFICATION = gql`
    mutation EditAnalysisSpecification($uid: String!, $payload: AnalysisSpecificationInput!) {
        updateAnalysisSpecification(uid: $uid, payload: $payload) {
            ... on AnalysisSpecificationType {
                uid
                analysisUid
                min
                max
                minWarn
                maxWarn
                minReport
                maxReport
                warnValues
                warnReport
                gender
                ageMin
                ageMax
                methodUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS_SERVICE
export const ADD_ANALYSIS_SERVICE = gql`
    mutation AddAnalysisService($payload: AnalysisInputType!) {
        createAnalysis(payload: $payload) {
            ... on AnalysisWithProfiles {
                __typename
                uid
                name
                keyword
                sortKey
                tatLengthMinutes
                precision
                requiredVerifications
                selfVerification
                description
                categoryUid
                departmentUid
                unitUid
                unit {
                    uid
                    name
                }
                sampleTypes {
                    uid
                    name
                }
                methods {
                    uid
                    name
                }
                resultOptions {
                    uid
                    optionKey
                    value
                }
                category {
                    uid
                    name
                }
                profiles {
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
`;

export const EDIT_ANALYSIS_SERVICE = gql`
    mutation EditAnalysisService($uid: String!, $payload: AnalysisInputType!) {
        updateAnalysis(uid: $uid, payload: $payload) {
            ... on AnalysisWithProfiles {
                __typename
                uid
                name
                keyword
                sortKey
                tatLengthMinutes
                precision
                requiredVerifications
                selfVerification
                description
                categoryUid
                departmentUid
                unitUid
                unit {
                    uid
                    name
                }
                sampleTypes {
                    uid
                    name
                }
                methods {
                    uid
                    name
                }
                resultOptions {
                    uid
                    optionKey
                    value
                }
                category {
                    uid
                    name
                }
                profiles {
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
`;



export const ADD_ANALYSIS_MAPPING = gql`
    mutation AddAnalysisMapping($payload: AnalysisMappingInputType!) {
        createAnalysisMapping(payload: $payload) {
            ... on AnalysisMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                analysisUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_MAPPING = gql`
    mutation EditAnalysisMapping($uid: String!, $payload: AnalysisMappingInputType!) {
        updateAnalysisMapping(uid: $uid, payload: $payload) {
            ... on AnalysisMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                analysisUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS_PROFILES
export const ADD_ANALYSIS_PROFILE = gql`
    mutation AddAnalysisProfile($payload: ProfileInputType!) {
        createProfile(payload: $payload) {
            ... on ProfileType {
                uid
                name
                description
                keyword
                active
                departmentUid
                sampleTypes {
                    uid
                    name
                }
                analyses {
                    uid
                    name
                    keyword
                    active
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_PROFILE = gql`
    mutation EditAnalysisProfile($uid: String!, $payload: ProfileInputType!) {
        updateProfile(uid: $uid, payload: $payload) {
            ... on ProfileType {
                uid
                name
                description
                keyword
                active
                departmentUid
                sampleTypes {
                    uid
                    name
                }
                analyses {
                    uid
                    name
                    keyword
                    active
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


export const ADD_PROFILE_MAPPING = gql`
    mutation AddProfileMapping($payload: ProfileMappingInputType!) {
        createProfileMapping(payload: $payload) {
            ... on ProfileMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                profileUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_PROFILE_MAPPING = gql`
    mutation EditProfileMapping($uid: String!, $payload: ProfileMappingInputType!) {
        updateProfileMapping(uid: $uid, payload: $payload) {
            ... on ProfileMappingType {
                uid
                name
                description
                code
                codingStandardUid
                codingStandard {
                    name
                }
                profileUid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


// ANALYSIS_TEMPLATE
export const ADD_ANALYSIS_TEMPLATE = gql`
    mutation AddAnalysisTemplate($payload: AnalysisTemplateInputType!) {
        createAnalysisTemplate(payload: $payload) {
            ... on AnalysisTemplateType {
                uid
                name
                description
                departmentUid
                analyses {
                    uid
                    name
                    keyword
                    active
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_ANALYSIS_TEMPLATE = gql`
    mutation EditAnalysisTemplate($uid: String!, $payload: AnalysisTemplateInputType!) {
        updateAnalysisTemplate(uid: $uid, payload: $payload) {
            ... on AnalysisTemplateType {
                uid
                name
                description
                departmentUid
                analyses {
                    uid
                    name
                    keyword
                    active
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


export const EDIT_SAMPLE_APPLY_TEMPLATE = gql`
    mutation EditWorkSheetApplyTemplate($uid: String!, $analysisTemplateUid: String!) {
        samplesApplyTemplate(uid: $uid, analysisTemplateUid: $analysisTemplateUid) {
            ... on ResultedSampleListingType {
                __typename
                samples {
                    uid
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_SAMPLE_MANAGE_ANALYSIS= gql`
    mutation SampleManageAnalysis($sampleUid: String!, $payload: ManageAnalysisInputType!) {
        manageAnalyses(sampleUid: $sampleUid, payload: $payload) {
            ... on ResultedSampleListingType {
                __typename
                samples {
                    uid
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


// ANALYSIS_CATEGORIES
export const ADD_ANALYSIS_CATEGORY = gql`
    mutation AddAnalysisCategory($payload: AnalysisCategoryInputType!) {
        createAnalysisCategory(payload: $payload) {
            ... on AnalysisCategoryType {
                uid
                name
                active
                description
                department {
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
`;

export const EDIT_ANALYSIS_CATEGORY = gql`
    mutation EditAnalysisCategory($uid: String!, $payload: AnalysisCategoryInputType!) {
        updateAnalysisCategory(uid: $uid, payload: $payload) {
            ... on AnalysisCategoryType {
                uid
                name
                active
                description
                department {
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
`;

// ANALYSIS REQUEST
export const ADD_ANALYSIS_REQUEST = gql`
    mutation AddAnalysisRequest($payload: AnalysisRequestInputType!) {
        createAnalysisRequest(payload: $payload) {
            ... on AnalysisRequestWithSamples {
                __typename
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
                    uid
                    sampleType {
                        uid
                        name
                    }
                    sampleId
                    priority
                    status
                    analyses {
                        uid
                        name
                        sortKey
                    }
                    profiles {
                        uid
                        name
                    }
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS RESULTS
export const SUBMIT_ANALYSIS_RESULTS = gql`
    mutation SubmitAnalysisResults($analysisResults: [ARResultInputType!]!, $sourceObject: String!, $sourceObjectUid: String!) {
        submitAnalysisResults(analysisResults: $analysisResults, sourceObject: $sourceObject, sourceObjectUid: $sourceObjectUid) {
            ... on OperationSuccess {
                message
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const CANCEL_ANALYSIS_RESULTS = gql`
    mutation CancelAnalysisResults($analyses: [String!]!) {
        cancelAnalysisResults(analyses: $analyses) {
            ... on ResultListingType {
                results {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const REINSTATE_ANALYSIS_RESULTS = gql`
    mutation ReInstateAnalysisResults($analyses: [String!]!) {
        reInstateAnalysisResults(analyses: $analyses) {
            ... on ResultListingType {
                results {
                    uid
                    status
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const VERIFY_ANALYSIS_RESULTS = gql`
    mutation VerifyAnalysisResults($analyses: [String!]!, $sourceObject: String!, $sourceObjectUid: String!) {
        verifyAnalysisResults(analyses: $analyses, sourceObject: $sourceObject, sourceObjectUid: $sourceObjectUid) {
            ... on OperationSuccess {
                message
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const RETRACT_ANALYSIS_RESULTS = gql`
    mutation RetractAnalysisResults($analyses: [String!]!) {
        retractAnalysisResults(analyses: $analyses) {
            ... on ResultListingType {
                results {
                    uid
                    status
                    sampleUid
                    result
                    sample {
                        uid
                        sampleId
                        status
                        rejectionReasons {
                            uid
                            reason
                        }
                    }
                    analysisUid
                    analysis {
                        uid
                        name
                        unitUid
                        unit {
                            uid
                            name
                        }
                        sortKey
                        interims {
                            uid
                            key
                            value
                            analysisUid
                            instrumentUid
                        }
                        resultOptions {
                            uid
                            optionKey
                            value
                        }
                    }
                    retest
                    reportable
                    createdAt
                    createdByUid
                    updatedAt
                    updatedByUid
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const RETEST_ANALYSIS_RESULTS = gql`
    mutation RetestAnalysisResults($analyses: [String!]!) {
        retestAnalysisResults(analyses: $analyses) {
            ... on ResultListingType {
                results {
                    uid
                    status
                    sampleUid
                    result
                    sample {
                        uid
                        sampleId
                        status
                        rejectionReasons {
                            uid
                            reason
                        }
                    }
                    analysisUid
                    analysis {
                        uid
                        name
                        unitUid
                        unit {
                            uid
                            name
                        }
                        sortKey
                        interims {
                            uid
                            key
                            value
                            analysisUid
                            instrumentUid
                        }
                        resultOptions {
                            uid
                            optionKey
                            value
                        }
                    }
                    retest
                    reportable
                    createdAt
                    createdByUid
                    updatedAt
                    updatedByUid
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// qc levels
export const ADD_QC_LEVEL = gql`
    mutation AddQCLevel($level: String!) {
        createQcLevel(level: $level) {
            ... on QCLevelType {
                uid
                level
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_QC_LEVEL = gql`
    mutation EditQCLevel($uid: String!, $level: String!) {
        updateQcLevel(uid: $uid, level: $level) {
            ... on QCLevelType {
                uid
                level
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// ANALYSIS_CATEGORIES
export const ADD_QC_TEMPLATE = gql`
    mutation AddQCTemplate($payload: QCTemplateInputType!) {
        createQcTemplate(payload: $payload) {
            ... on QCTemplateType {
                uid
                name
                description
                qcLevels {
                    uid
                    level
                }
                departments {
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
`;

export const EDIT_QC_TEMPLATE = gql`
    mutation EditQCTemplate($uid: String!, $payload: QCTemplateInputType!) {
        updateQcTemplate(uid: $uid, payload: $payload) {
            ... on QCTemplateType {
                uid
                name
                description
                qcLevels {
                    uid
                    level
                }
                departments {
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
`;

// ANALYSIS_CATEGORIES
export const ADD_QC_REQUEST = gql`
    mutation AddQCRequest($samples: [QCSetInputType!]!) {
        createQcSet(samples: $samples) {
            ... on CreateQCSetData {
                __typename
                qcSets {
                    uid
                    name
                    note
                    createdAt
                    samples {
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
                            uid
                            status
                            sampleUid
                            result
                            analysisUid
                            retest
                            reportable
                            analysis {
                                uid
                                name
                                sortKey
                                resultOptions {
                                    uid
                                    optionKey
                                    value
                                    sampleTypes{
                                        uid
                                        name
                                    }
                                }
                            }
                            method {
                                uid
                                name
                            }
                            laboratoryInstrument {
                                uid
                                labName
                                instrument {
                                    uid
                                    name
                                }
                            }
                        }
                        analyses {
                            uid
                            name
                            unitUid
                            unit {
                                uid
                                name
                            }
                            resultOptions {
                                uid
                                optionKey
                                value
                                sampleTypes{
                                    uid
                                    name
                                }
                            }
                        }
                        profiles {
                            uid
                            name
                        }
                    }
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

// REJECTION REASONS
export const ADD_REJECTION_REASON = gql`
    mutation AddRejectionReason($reason: String!) {
        createRejectionReason(reason: $reason) {
            ... on RejectionReasonType {
                __typename
                uid
                reason
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_REJECTION_REASON = gql`
    mutation EditRejectionReason($uid: String!, $reason: String!) {
        updateRejectionReason(uid: $uid, reason: $reason) {
            ... on RejectionReasonType {
                __typename
                uid
                reason
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;
