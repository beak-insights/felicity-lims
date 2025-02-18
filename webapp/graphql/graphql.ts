/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BytesScalar: { input: never; output: never; }
  /** Date with time (isoformat) */
  DateTime: { input: never; output: never; }
  /** json field */
  JSONScalar: { input: never; output: never; }
};

export type ArResultInputType = {
  laboratoryInstrumentUid: Scalars['String']['input'];
  methodUid: Scalars['String']['input'];
  reportable?: InputMaybe<Scalars['Boolean']['input']>;
  result: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type ArSampleInputType = {
  analyses: Array<Scalars['String']['input']>;
  dateCollected: Scalars['String']['input'];
  profiles: Array<Scalars['String']['input']>;
  sampleType: Scalars['String']['input'];
};

export type ActivityFeedType = {
  __typename?: 'ActivityFeedType';
  name: Scalars['String']['output'];
  subscribers?: Maybe<Array<UserType>>;
  uid: Scalars['String']['output'];
};

export type ActivityProcessType = {
  __typename?: 'ActivityProcessType';
  objectType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type ActivityStreamType = {
  __typename?: 'ActivityStreamType';
  actionObject: WorkSheetTypeSampleTypeAnalysisResultTypeReportMetaTypeUnknownObjectType;
  actionObjectType?: Maybe<Scalars['String']['output']>;
  actionObjectUid?: Maybe<Scalars['String']['output']>;
  actor: UserType;
  actorUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  feeds?: Maybe<Array<ActivityFeedType>>;
  target?: Maybe<Scalars['String']['output']>;
  targetUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  verb?: Maybe<Scalars['String']['output']>;
  viewers?: Maybe<Array<UserType>>;
};

export type AnalysisCategoryInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Union of possible outcomes when adding a new notice */
export type AnalysisCategoryResponse = AnalysisCategoryType | OperationError;

export type AnalysisCategoryType = {
  __typename?: 'AnalysisCategoryType';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisCorrectionFactorInput = {
  analysisUid: Scalars['String']['input'];
  factor: Scalars['Float']['input'];
  instrumentUid: Scalars['String']['input'];
  methodUid: Scalars['String']['input'];
};

export type AnalysisCorrectionFactorResponse = AnalysisCorrectionFactorType | OperationError;

export type AnalysisCorrectionFactorType = {
  __typename?: 'AnalysisCorrectionFactorType';
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  factor: Scalars['Float']['output'];
  instrumentUid: Scalars['String']['output'];
  methodUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisCursorPage = {
  __typename?: 'AnalysisCursorPage';
  edges?: Maybe<Array<AnalysisEdge>>;
  items?: Maybe<Array<AnalysisWithProfiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AnalysisDetectionLimitInput = {
  analysisUid: Scalars['String']['input'];
  instrumentUid: Scalars['String']['input'];
  lowerLimit: Scalars['Float']['input'];
  methodUid: Scalars['String']['input'];
  upperLimit: Scalars['Float']['input'];
};

export type AnalysisDetectionLimitResponse = AnalysisDetectionLimitType | OperationError;

export type AnalysisDetectionLimitType = {
  __typename?: 'AnalysisDetectionLimitType';
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  instrumentUid: Scalars['String']['output'];
  lowerLimit: Scalars['Float']['output'];
  methodUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  upperLimit: Scalars['Float']['output'];
};

export type AnalysisDiscountResponse = AnalysisDiscountType | OperationError;

export type AnalysisDiscountType = {
  __typename?: 'AnalysisDiscountType';
  analysis: AnalysisType;
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  discountType: Scalars['String']['output'];
  endDate: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  valueAmount: Scalars['Float']['output'];
  valuePercent: Scalars['Float']['output'];
  valueType: Scalars['String']['output'];
  voucher?: Maybe<VoucherType>;
  voucherUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisEdge = {
  __typename?: 'AnalysisEdge';
  cursor: Scalars['String']['output'];
  node: AnalysisWithProfiles;
};

export type AnalysisInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  categoryUid?: InputMaybe<Scalars['String']['input']>;
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  description?: Scalars['String']['input'];
  internalUse?: InputMaybe<Scalars['Boolean']['input']>;
  keyword: Scalars['String']['input'];
  methods?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  precision?: InputMaybe<Scalars['Int']['input']>;
  requiredVerifications?: Scalars['Int']['input'];
  sampleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  selfVerification?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey: Scalars['Int']['input'];
  tatLengthMinutes: Scalars['Int']['input'];
  unitUid?: InputMaybe<Scalars['String']['input']>;
};

export type AnalysisInterimInput = {
  analysisUid: Scalars['String']['input'];
  instrumentUid: Scalars['String']['input'];
  key: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type AnalysisInterimResponse = AnalysisInterimType | OperationError;

export type AnalysisInterimType = {
  __typename?: 'AnalysisInterimType';
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  instrumentUid: Scalars['String']['output'];
  key: Scalars['Int']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type AnalysisMappingInputType = {
  analysisUid: Scalars['String']['input'];
  code: Scalars['String']['input'];
  codingStandardUid: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Union of possible outcomes when adding a new notice */
export type AnalysisMappingResponse = AnalysisMappingType | OperationError;

export type AnalysisMappingType = {
  __typename?: 'AnalysisMappingType';
  analysis?: Maybe<AnalysisType>;
  analysisUid: Scalars['String']['output'];
  code: Scalars['String']['output'];
  codingStandard?: Maybe<CodingStandardType>;
  codingStandardUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisPriceResponse = AnalysisPriceType | OperationError;

export type AnalysisPriceType = {
  __typename?: 'AnalysisPriceType';
  amount: Scalars['Float']['output'];
  analysis: AnalysisType;
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

/** Union of possible outcomes when adding a new notice */
export type AnalysisProfileResponse = OperationError | ProfileType;

export type AnalysisRequestCursorPage = {
  __typename?: 'AnalysisRequestCursorPage';
  edges?: Maybe<Array<AnalysisRequestEdge>>;
  items?: Maybe<Array<AnalysisRequestWithSamples>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AnalysisRequestEdge = {
  __typename?: 'AnalysisRequestEdge';
  cursor: Scalars['String']['output'];
  node: AnalysisRequestWithSamples;
};

export type AnalysisRequestInputType = {
  clientContactUid: Scalars['String']['input'];
  clientRequestId?: InputMaybe<Scalars['String']['input']>;
  clientUid: Scalars['String']['input'];
  clinicalData?: InputMaybe<Scalars['String']['input']>;
  internalUse?: InputMaybe<Scalars['Boolean']['input']>;
  patientUid: Scalars['String']['input'];
  priority?: Scalars['Int']['input'];
  samples: Array<ArSampleInputType>;
};

/** Union of possible outcomes when adding/editing analysis requests  */
export type AnalysisRequestResponse = AnalysisRequestWithSamples | OperationError;

export type AnalysisRequestType = {
  __typename?: 'AnalysisRequestType';
  client?: Maybe<ClientType>;
  clientRequestId: Scalars['String']['output'];
  clientUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  patient: PatientType;
  patientUid: Scalars['String']['output'];
  requestId: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisRequestWithSamples = {
  __typename?: 'AnalysisRequestWithSamples';
  client?: Maybe<ClientType>;
  clientRequestId: Scalars['String']['output'];
  clientUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  patient: PatientType;
  patientUid: Scalars['String']['output'];
  requestId: Scalars['String']['output'];
  samples?: Maybe<Array<SampleType>>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisResultCursorPage = {
  __typename?: 'AnalysisResultCursorPage';
  edges?: Maybe<Array<AnalysisResultEdge>>;
  items?: Maybe<Array<AnalysisResultType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AnalysisResultEdge = {
  __typename?: 'AnalysisResultEdge';
  cursor: Scalars['String']['output'];
  node: AnalysisResultType;
};

/** Union of possible outcomes when actioning samples */
export type AnalysisResultResponse = OperationError | ResultListingType;

/** Union of possible outcomes when submitting/verifying results */
export type AnalysisResultSubmitResponse = OperationError | OperationSuccess;

export type AnalysisResultType = {
  __typename?: 'AnalysisResultType';
  analysis?: Maybe<AnalysisType>;
  analysisUid?: Maybe<Scalars['String']['output']>;
  analyst?: Maybe<UserType>;
  analystUid?: Maybe<Scalars['String']['output']>;
  assigned: Scalars['Boolean']['output'];
  cancelledBy?: Maybe<UserType>;
  cancelledByUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateCancelled?: Maybe<Scalars['DateTime']['output']>;
  dateInvalidated?: Maybe<Scalars['DateTime']['output']>;
  dateSubmitted?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  invalidatedBy?: Maybe<UserType>;
  invalidatedByUid?: Maybe<Scalars['String']['output']>;
  laboratoryInstrument?: Maybe<LaboratoryInstrumentType>;
  laboratoryInstrumentUid?: Maybe<Scalars['String']['output']>;
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  method?: Maybe<MethodType>;
  methodUid?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<AnalysisResultType>;
  parentId?: Maybe<Scalars['String']['output']>;
  reflexLevel?: Maybe<Scalars['Int']['output']>;
  reportable: Scalars['Boolean']['output'];
  result?: Maybe<Scalars['String']['output']>;
  retest: Scalars['Boolean']['output'];
  sample: SampleType;
  sampleUid: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  submittedBy?: Maybe<UserType>;
  submittedByUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  verifiedBy?: Maybe<Array<UserType>>;
  worksheetId?: Maybe<Scalars['String']['output']>;
  worksheetPosition?: Maybe<Scalars['Int']['output']>;
  worksheetUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisSpecificationInput = {
  ageMax?: InputMaybe<Scalars['Int']['input']>;
  ageMin?: InputMaybe<Scalars['Int']['input']>;
  analysisUid: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  maxReport?: InputMaybe<Scalars['String']['input']>;
  maxWarn?: InputMaybe<Scalars['Float']['input']>;
  methodUid?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  minReport?: InputMaybe<Scalars['String']['input']>;
  minWarn?: InputMaybe<Scalars['Float']['input']>;
  unitUid?: InputMaybe<Scalars['String']['input']>;
  warnReport?: InputMaybe<Scalars['String']['input']>;
  warnValues?: InputMaybe<Scalars['String']['input']>;
};

export type AnalysisSpecificationResponse = AnalysisSpecificationType | OperationError;

export type AnalysisSpecificationType = {
  __typename?: 'AnalysisSpecificationType';
  ageMax?: Maybe<Scalars['Int']['output']>;
  ageMin?: Maybe<Scalars['Int']['output']>;
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  maxReport?: Maybe<Scalars['String']['output']>;
  maxWarn?: Maybe<Scalars['Float']['output']>;
  methodUid?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  minReport?: Maybe<Scalars['String']['output']>;
  minWarn?: Maybe<Scalars['Float']['output']>;
  uid: Scalars['String']['output'];
  unit?: Maybe<UnitType>;
  unitUid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  warnReport?: Maybe<Scalars['String']['output']>;
  warnValues?: Maybe<Scalars['String']['output']>;
};

export type AnalysisTemplateInputType = {
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  description?: Scalars['String']['input'];
  name: Scalars['String']['input'];
  services?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Union of possible outcomes */
export type AnalysisTemplateResponse = AnalysisTemplateType | OperationError;

export type AnalysisTemplateType = {
  __typename?: 'AnalysisTemplateType';
  analyses?: Maybe<Array<AnalysisType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisType = {
  __typename?: 'AnalysisType';
  active?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<AnalysisCategoryType>;
  categoryUid?: Maybe<Scalars['String']['output']>;
  correctionFactors?: Maybe<Array<AnalysisCorrectionFactorType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detectionLimits?: Maybe<Array<AnalysisDetectionLimitType>>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  instruments?: Maybe<Array<InstrumentType>>;
  interims?: Maybe<Array<AnalysisInterimType>>;
  internalUse?: Maybe<Scalars['Boolean']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  methods?: Maybe<Array<MethodType>>;
  name: Scalars['String']['output'];
  precision?: Maybe<Scalars['Int']['output']>;
  requiredVerifications?: Maybe<Scalars['Int']['output']>;
  resultOptions?: Maybe<Array<ResultOptionType>>;
  resultType?: Maybe<Scalars['String']['output']>;
  sampleTypes?: Maybe<Array<SampleTypeTyp>>;
  selfVerification?: Maybe<Scalars['Boolean']['output']>;
  sortKey?: Maybe<Scalars['Int']['output']>;
  specifications?: Maybe<Array<AnalysisSpecificationType>>;
  tatLengthMinutes?: Maybe<Scalars['Int']['output']>;
  uid: Scalars['String']['output'];
  uncertainties?: Maybe<Array<AnalysisUncertaintyType>>;
  unit?: Maybe<UnitType>;
  unitUid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type AnalysisUncertaintyInput = {
  analysisUid: Scalars['String']['input'];
  instrumentUid: Scalars['String']['input'];
  max: Scalars['Float']['input'];
  methodUid: Scalars['String']['input'];
  min: Scalars['Float']['input'];
  value: Scalars['Float']['input'];
};

export type AnalysisUncertaintyResponse = AnalysisUncertaintyType | OperationError;

export type AnalysisUncertaintyType = {
  __typename?: 'AnalysisUncertaintyType';
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  instrumentUid: Scalars['String']['output'];
  max: Scalars['Float']['output'];
  methodUid: Scalars['String']['output'];
  min: Scalars['Float']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  value: Scalars['Float']['output'];
};

export type AnalysisWithProfiles = {
  __typename?: 'AnalysisWithProfiles';
  active?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<AnalysisCategoryType>;
  categoryUid?: Maybe<Scalars['String']['output']>;
  correctionFactors?: Maybe<Array<AnalysisCorrectionFactorType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detectionLimits?: Maybe<Array<AnalysisDetectionLimitType>>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  instruments?: Maybe<Array<InstrumentType>>;
  interims?: Maybe<Array<AnalysisInterimType>>;
  internalUse?: Maybe<Scalars['Boolean']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  methods?: Maybe<Array<MethodType>>;
  name: Scalars['String']['output'];
  precision?: Maybe<Scalars['Int']['output']>;
  profiles?: Maybe<Array<ProfileType>>;
  requiredVerifications?: Maybe<Scalars['Int']['output']>;
  resultOptions?: Maybe<Array<ResultOptionType>>;
  resultType?: Maybe<Scalars['String']['output']>;
  sampleTypes?: Maybe<Array<SampleTypeTyp>>;
  selfVerification?: Maybe<Scalars['Boolean']['output']>;
  sortKey?: Maybe<Scalars['Int']['output']>;
  specifications?: Maybe<Array<AnalysisSpecificationType>>;
  tatLengthMinutes?: Maybe<Scalars['Int']['output']>;
  uid: Scalars['String']['output'];
  uncertainties?: Maybe<Array<AnalysisUncertaintyType>>;
  unit?: Maybe<UnitType>;
  unitUid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ApplyVoucherInput = {
  customerUid: Scalars['String']['input'];
  testBillUid: Scalars['String']['input'];
  voucherCode: Scalars['String']['input'];
};

export type AuditLogType = {
  __typename?: 'AuditLogType';
  action?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  stateAfter?: Maybe<Scalars['JSONScalar']['output']>;
  stateBefore?: Maybe<Scalars['JSONScalar']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  targetUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type AuthenticatedData = {
  __typename?: 'AuthenticatedData';
  refresh: Scalars['String']['output'];
  token: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
  user: UserType;
};

export type AuthenticatedDataResponse = AuthenticatedData | OperationError;

export type BillTransactionInput = {
  amount: Scalars['Float']['input'];
  kind: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  testBillUid: Scalars['String']['input'];
};

export type CalibrationCertificateInput = {
  approvedBy?: InputMaybe<Scalars['String']['input']>;
  certificateCode?: InputMaybe<Scalars['String']['input']>;
  dateIssued?: InputMaybe<Scalars['DateTime']['input']>;
  internal?: Scalars['Boolean']['input'];
  issuer?: InputMaybe<Scalars['String']['input']>;
  laboratoryInstrumentUid: Scalars['String']['input'];
  performedBy?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  validFromDate?: InputMaybe<Scalars['String']['input']>;
  validToDate?: InputMaybe<Scalars['String']['input']>;
};

export type CalibrationCertificateResponse = CalibrationCertificateType | OperationError;

export type CalibrationCertificateType = {
  __typename?: 'CalibrationCertificateType';
  approvedBy: Scalars['String']['output'];
  certificateCode: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateIssued: Scalars['DateTime']['output'];
  internal: Scalars['Boolean']['output'];
  issuer: Scalars['String']['output'];
  laboratoryInstrument?: Maybe<LaboratoryInstrumentType>;
  laboratoryInstrumentUid: Scalars['String']['output'];
  performedBy: Scalars['String']['output'];
  remarks: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  validFromDate: Scalars['DateTime']['output'];
  validToDate: Scalars['DateTime']['output'];
};

export type ClientContactInputType = {
  clientUid: Scalars['String']['input'];
  consentSms?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCc?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isActive?: Scalars['Boolean']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
};

export type ClientContactResponse = ClientContactType | OperationError;

export type ClientContactType = {
  __typename?: 'ClientContactType';
  businessPhone?: Maybe<Scalars['String']['output']>;
  client?: Maybe<ClientType>;
  clientUid: Scalars['String']['output'];
  consentSms: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  creatorName?: Maybe<Scalars['String']['output']>;
  creatorUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailCc?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatorName?: Maybe<Scalars['String']['output']>;
  updatorUid?: Maybe<Scalars['String']['output']>;
};

export type ClientCursorPage = {
  __typename?: 'ClientCursorPage';
  edges?: Maybe<Array<ClientEdge>>;
  items?: Maybe<Array<ClientType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientEdge = {
  __typename?: 'ClientEdge';
  cursor: Scalars['String']['output'];
  node: ClientType;
};

export type ClientInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  code: Scalars['String']['input'];
  consentEmail?: InputMaybe<Scalars['Boolean']['input']>;
  consentSms?: InputMaybe<Scalars['Boolean']['input']>;
  districtUid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCc?: InputMaybe<Scalars['String']['input']>;
  internalUse?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phoneBusiness?: InputMaybe<Scalars['String']['input']>;
  phoneMobile?: InputMaybe<Scalars['String']['input']>;
};

export type ClientResponse = ClientType | OperationError;

export type ClientType = {
  __typename?: 'ClientType';
  active: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  consentEmail: Scalars['Boolean']['output'];
  consentSms: Scalars['Boolean']['output'];
  contacts?: Maybe<Array<ClientContactType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  district?: Maybe<DistrictType>;
  districtUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailCc?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phoneBusiness?: Maybe<Scalars['String']['output']>;
  phoneMobile?: Maybe<Scalars['String']['output']>;
  province?: Maybe<ProvinceType>;
  provinceUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type CodingStandardInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CodingStandardResponse = CodingStandardType | OperationError;

export type CodingStandardType = {
  __typename?: 'CodingStandardType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type CountryInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CountryResponse = CountryType | OperationError;

export type CountryType = {
  __typename?: 'CountryType';
  active?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type CreateQcSetData = {
  __typename?: 'CreateQCSetData';
  qcSets: Array<QcSetWithSamples>;
};

export type DeleteContactResponse = DeletedItem | OperationError;

/** Union of possible outcomes when deleting some object */
export type DeleteResponse = DeletedItem | OperationError;

export type DeletedItem = {
  __typename?: 'DeletedItem';
  uid: Scalars['String']['output'];
};

export type DepartmentInputType = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DepartmentResponse = DepartmentType | OperationError;

export type DepartmentType = {
  __typename?: 'DepartmentType';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type DistrictCursorPage = {
  __typename?: 'DistrictCursorPage';
  edges?: Maybe<Array<DistrictEdge>>;
  items?: Maybe<Array<DistrictType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DistrictEdge = {
  __typename?: 'DistrictEdge';
  cursor: Scalars['String']['output'];
  node: DistrictType;
};

export type DistrictInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  businessPhone?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCc?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  provinceUid?: InputMaybe<Scalars['String']['input']>;
};

export type DistrictResponse = DistrictType | OperationError;

export type DistrictType = {
  __typename?: 'DistrictType';
  active?: Maybe<Scalars['Boolean']['output']>;
  businessPhone?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailCc?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  province?: Maybe<ProvinceType>;
  provinceUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type GroupCount = {
  __typename?: 'GroupCount';
  count?: Maybe<Scalars['Int']['output']>;
  group: Scalars['String']['output'];
};

export type GroupData = {
  __typename?: 'GroupData';
  counts?: Maybe<Array<GroupCount>>;
  group: Scalars['String']['output'];
};

export type GroupInputType = {
  active?: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pages: Scalars['String']['input'];
};

export type GroupResponse = GroupType | OperationError;

export type GroupType = {
  __typename?: 'GroupType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<GroupType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<UserType>>;
  name?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionType>>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<GroupType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type GroupedCounts = {
  __typename?: 'GroupedCounts';
  data: Array<GroupCount>;
};

export type GroupedData = {
  __typename?: 'GroupedData';
  data: Array<GroupData>;
};

export type HazardInputType = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type HazardResponse = HazardType | OperationError;

export type HazardType = {
  __typename?: 'HazardType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type IdentificationResponse = IdentificationType | OperationError;

export type IdentificationType = {
  __typename?: 'IdentificationType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type InstrumentCalibrationInput = {
  calibrationId?: InputMaybe<Scalars['String']['input']>;
  dateReported?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  laboratoryInstrumentUid: Scalars['String']['input'];
  notesBefore?: InputMaybe<Scalars['String']['input']>;
  performedBy?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  reportId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  workDone?: InputMaybe<Scalars['String']['input']>;
};

export type InstrumentCalibrationResponse = InstrumentCalibrationType | OperationError;

export type InstrumentCalibrationType = {
  __typename?: 'InstrumentCalibrationType';
  calibrationId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateReported: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  laboratoryInstrument?: Maybe<LaboratoryInstrumentType>;
  laboratoryInstrumentUid: Scalars['String']['output'];
  notesBefore: Scalars['String']['output'];
  performedBy: Scalars['String']['output'];
  remarks: Scalars['String']['output'];
  reportId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  workDone: Scalars['String']['output'];
};

export type InstrumentCompetenceInput = {
  competence: Scalars['String']['input'];
  description: Scalars['String']['input'];
  expiryDate: Scalars['DateTime']['input'];
  instrumentUid: Scalars['String']['input'];
  internal: Scalars['Boolean']['input'];
  issueDate: Scalars['DateTime']['input'];
  userUid: Scalars['String']['input'];
};

export type InstrumentCompetenceResponse = InstrumentCompetenceType | OperationError;

export type InstrumentCompetenceType = {
  __typename?: 'InstrumentCompetenceType';
  competence?: Maybe<Scalars['BytesScalar']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  expiryDate: Scalars['DateTime']['output'];
  instrument?: Maybe<InstrumentType>;
  instrumentUid: Scalars['String']['output'];
  internal: Scalars['Boolean']['output'];
  issueDate: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
  userUid: Scalars['String']['output'];
};

export type InstrumentCursorPage = {
  __typename?: 'InstrumentCursorPage';
  edges?: Maybe<Array<InstrumentEdge>>;
  items?: Maybe<Array<InstrumentType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InstrumentEdge = {
  __typename?: 'InstrumentEdge';
  cursor: Scalars['String']['output'];
  node: InstrumentType;
};

export type InstrumentInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  instrumentTypeUid?: InputMaybe<Scalars['String']['input']>;
  keyword: Scalars['String']['input'];
  manufacturerUid?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  supplierUid?: InputMaybe<Scalars['String']['input']>;
};

export type InstrumentResponse = InstrumentType | OperationError;

export type InstrumentType = {
  __typename?: 'InstrumentType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instrumentType?: Maybe<InstrumentTypeType>;
  instrumentTypeUid?: Maybe<Scalars['String']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  laboratoryInstruments?: Maybe<Array<LaboratoryInstrumentType>>;
  manufacturer?: Maybe<ManufacturerType>;
  manufacturerUid?: Maybe<Scalars['String']['output']>;
  methods?: Maybe<Array<MethodType>>;
  name?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<SupplierType>;
  supplierUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type InstrumentTypeCursorPage = {
  __typename?: 'InstrumentTypeCursorPage';
  edges?: Maybe<Array<InstrumentTypeEdge>>;
  items?: Maybe<Array<InstrumentTypeType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InstrumentTypeEdge = {
  __typename?: 'InstrumentTypeEdge';
  cursor: Scalars['String']['output'];
  node: InstrumentTypeType;
};

export type InstrumentTypeInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type InstrumentTypeResponse = InstrumentTypeType | OperationError;

export type InstrumentTypeType = {
  __typename?: 'InstrumentTypeType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type LaboratoryInputType = {
  address?: InputMaybe<Scalars['String']['input']>;
  banking?: InputMaybe<Scalars['String']['input']>;
  businessPhone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCc?: InputMaybe<Scalars['String']['input']>;
  labManagerUid?: InputMaybe<Scalars['String']['input']>;
  labName: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  qualityStatement?: InputMaybe<Scalars['String']['input']>;
  setupName?: Scalars['String']['input'];
  tagLine?: InputMaybe<Scalars['String']['input']>;
};

export type LaboratoryInstrumentCursorPage = {
  __typename?: 'LaboratoryInstrumentCursorPage';
  edges?: Maybe<Array<LaboratoryInstrumentEdge>>;
  items?: Maybe<Array<LaboratoryInstrumentType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LaboratoryInstrumentEdge = {
  __typename?: 'LaboratoryInstrumentEdge';
  cursor: Scalars['String']['output'];
  node: LaboratoryInstrumentType;
};

export type LaboratoryInstrumentInputType = {
  dateCommissioned?: InputMaybe<Scalars['DateTime']['input']>;
  dateDecommissioned?: InputMaybe<Scalars['DateTime']['input']>;
  instrumentUid: Scalars['String']['input'];
  labName: Scalars['String']['input'];
  serialNumber?: InputMaybe<Scalars['String']['input']>;
};

export type LaboratoryInstrumentResponse = LaboratoryInstrumentType | OperationError;

export type LaboratoryInstrumentType = {
  __typename?: 'LaboratoryInstrumentType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateCommissioned?: Maybe<Scalars['DateTime']['output']>;
  dateDecommissioned?: Maybe<Scalars['DateTime']['output']>;
  instrument?: Maybe<InstrumentType>;
  instrumentUid?: Maybe<Scalars['String']['output']>;
  labName?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type LaboratoryResponse = LaboratoryType | OperationError;

export type LaboratorySettingInputType = {
  allowAutoBilling?: InputMaybe<Scalars['Boolean']['input']>;
  allowBilling?: InputMaybe<Scalars['Boolean']['input']>;
  allowPatientRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  allowSampleRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  allowSelfVerification?: InputMaybe<Scalars['Boolean']['input']>;
  allowWorksheetCreation?: InputMaybe<Scalars['Boolean']['input']>;
  autoReceiveSamples?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  defaultRoute?: InputMaybe<Scalars['String']['input']>;
  defaultTheme?: InputMaybe<Scalars['String']['input']>;
  inactivityLogOut?: InputMaybe<Scalars['Int']['input']>;
  laboratoryUid: Scalars['String']['input'];
  passwordLifetime?: InputMaybe<Scalars['Int']['input']>;
  paymentTermsDays?: InputMaybe<Scalars['Int']['input']>;
  stickerCopies?: InputMaybe<Scalars['Int']['input']>;
};

export type LaboratorySettingResponse = LaboratorySettingType | OperationError;

export type LaboratorySettingType = {
  __typename?: 'LaboratorySettingType';
  allowAutoBilling?: Maybe<Scalars['Boolean']['output']>;
  allowBilling?: Maybe<Scalars['Boolean']['output']>;
  allowPatientRegistration?: Maybe<Scalars['Boolean']['output']>;
  allowSampleRegistration?: Maybe<Scalars['Boolean']['output']>;
  allowSelfVerification?: Maybe<Scalars['Boolean']['output']>;
  allowWorksheetCreation?: Maybe<Scalars['Boolean']['output']>;
  autoReceiveSamples?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  defaultRoute?: Maybe<Scalars['String']['output']>;
  defaultTatMinutes?: Maybe<Scalars['Int']['output']>;
  defaultTheme?: Maybe<Scalars['String']['output']>;
  inactivityLogOut?: Maybe<Scalars['Int']['output']>;
  laboratory: LaboratoryType;
  laboratoryUid: Scalars['String']['output'];
  passwordLifetime?: Maybe<Scalars['Int']['output']>;
  paymentTermsDays?: Maybe<Scalars['Int']['output']>;
  stickerCopies?: Maybe<Scalars['Int']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type LaboratoryType = {
  __typename?: 'LaboratoryType';
  address?: Maybe<Scalars['String']['output']>;
  banking?: Maybe<Scalars['String']['output']>;
  businessPhone?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailCc?: Maybe<Scalars['String']['output']>;
  labManager?: Maybe<UserType>;
  labManagerUid?: Maybe<Scalars['String']['output']>;
  labName: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  qualityStatement?: Maybe<Scalars['String']['output']>;
  setupName: Scalars['String']['output'];
  tagLine?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type LaggardCounts = {
  __typename?: 'LaggardCounts';
  graterThanThirty?: Maybe<Scalars['Int']['output']>;
  lessThanTen?: Maybe<Scalars['Int']['output']>;
  tenToTwenty?: Maybe<Scalars['Int']['output']>;
  totalDelayed?: Maybe<Scalars['Int']['output']>;
  totalIncomplete?: Maybe<Scalars['Int']['output']>;
  totalNotDelayed?: Maybe<Scalars['Int']['output']>;
  twentyToThirty?: Maybe<Scalars['Int']['output']>;
};

export type LaggardData = {
  __typename?: 'LaggardData';
  category: Scalars['String']['output'];
  counts?: Maybe<LaggardCounts>;
};

export type LaggardStatistics = {
  __typename?: 'LaggardStatistics';
  data: Array<LaggardData>;
};

export type ManageAnalysisInputType = {
  add?: InputMaybe<Array<Scalars['String']['input']>>;
  cancel?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ManufacturerInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ManufacturerResponse = ManufacturerType | OperationError;

export type ManufacturerType = {
  __typename?: 'ManufacturerType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

/** Union of possible outcomes when deleting some object */
export type MessageResponse = MessagesType | OperationError;

export type MessageThreadType = {
  __typename?: 'MessageThreadType';
  broadcast: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  deletedBy?: Maybe<Array<UserType>>;
  messages?: Maybe<Array<MessageType>>;
  recipients: Array<UserType>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type MessageType = {
  __typename?: 'MessageType';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  deletedBy?: Maybe<Array<UserType>>;
  left: Scalars['Int']['output'];
  parent?: Maybe<MessageType>;
  parentId: Scalars['String']['output'];
  right: Scalars['Int']['output'];
  thread?: Maybe<MessageThreadType>;
  threadUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  viewers?: Maybe<Array<UserType>>;
};

export type MessagesType = {
  __typename?: 'MessagesType';
  message: Scalars['String']['output'];
};

export type MethodCursorPage = {
  __typename?: 'MethodCursorPage';
  edges?: Maybe<Array<MethodEdge>>;
  items?: Maybe<Array<MethodType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MethodEdge = {
  __typename?: 'MethodEdge';
  cursor: Scalars['String']['output'];
  node: MethodType;
};

export type MethodInputType = {
  analyses?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  instruments?: InputMaybe<Array<Scalars['String']['input']>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MethodResponse = MethodType | OperationError;

export type MethodType = {
  __typename?: 'MethodType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instruments?: Maybe<Array<InstrumentType>>;
  keyword?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  actionShipment: ShipmentResponse;
  actionWorksheets: WorkSheetsResponse;
  applyVoucher: TestBillTransactionResponse;
  approveStockOrder: StockOrderResponse;
  authenticateUser: AuthenticatedDataResponse;
  cancelAnalysisResults: AnalysisResultResponse;
  cancelSamples: ResultedSampleActionResponse;
  cloneSamples: SampleActionResponse;
  confirmTestBillTransaction: TestBillTransactionResponse;
  createAnalysis: ProfilesServiceResponse;
  createAnalysisCategory: AnalysisCategoryResponse;
  createAnalysisCorrectionFactor: AnalysisCorrectionFactorResponse;
  createAnalysisDetectionLimit: AnalysisDetectionLimitResponse;
  createAnalysisInterim: AnalysisInterimResponse;
  createAnalysisMapping: AnalysisMappingResponse;
  createAnalysisRequest: AnalysisRequestResponse;
  createAnalysisSpecification: AnalysisSpecificationResponse;
  createAnalysisTemplate: AnalysisTemplateResponse;
  createAnalysisUncertainty: AnalysisUncertaintyResponse;
  createCaliberationCertificate: CalibrationCertificateResponse;
  createClient: ClientResponse;
  createClientContact: ClientContactResponse;
  createCodingStandard: CodingStandardResponse;
  createCountry: CountryResponse;
  createDepartment: DepartmentResponse;
  createDistrict: DistrictResponse;
  createGroup: GroupResponse;
  createHazard: HazardResponse;
  createIdentification: IdentificationResponse;
  createInstrument: InstrumentResponse;
  createInstrumentCaliberation: InstrumentCalibrationResponse;
  createInstrumentCompetence: InstrumentCompetenceResponse;
  createInstrumentType: InstrumentTypeResponse;
  createLaboratoryInstrument: LaboratoryInstrumentResponse;
  createManufacturer: ManufacturerResponse;
  createMethod: MethodResponse;
  createNotice: NoticeResponse;
  createPatient: PatientResponse;
  createProfile: AnalysisProfileResponse;
  createProfileMapping: ProfileMappingResponse;
  createProvince: ProvinceResponse;
  createQcLevel: QcLevelResponse;
  createQcSet: QcSetResponse;
  createQcTemplate: QcTemplateResponse;
  createReferralLaboratory: ReferralLaboratoryResponse;
  createReflexAction: ReflexActionResponse;
  createReflexBrain: ReflexBrainResponse;
  createReflexRule: ReflexRuleResponse;
  createRejectionReason: RejectionReasonResponse;
  createResultOption: ResultOptionResponse;
  createSampleType: SampleTypeResponse;
  createSampleTypeMapping: SampleTypeMappingResponse;
  createShipment: ShipmentsResponse;
  createStockAdjustment: StockAdjustmentResponse;
  createStockCategory: StockCategoryResponse;
  createStockItem: StockItemResponse;
  createStockItemVariant: StockItemVariantResponse;
  createStockOrder: StockOrderResponse;
  createStockReceipt: StockItemVariantResponse;
  createStockUnit: StockUnitResponse;
  createStorageContainer: StorageContainerResponse;
  createStorageLocation: StorageLocationResponse;
  createStorageSection: StorageSectionResponse;
  createStoreRoom: StoreRoomResponse;
  createSupplier: SupplierResponse;
  createTestBillTransaction: TestBillTransactionResponse;
  createUnit: UnitResponse;
  createUser: UserResponse;
  createVoucher: VoucherResponse;
  createVoucherCode: VoucherCodeResponse;
  createWorksheet: WorkSheetsResponse;
  createWorksheetTemplate: WorkSheetTemplateResponse;
  deleteClientContact: DeleteContactResponse;
  deleteMessage: DeleteResponse;
  deleteNotice: DeleteResponse;
  deleteReflexBrain: DeletedItem;
  deleteStockOrder: StockOrderResponse;
  deleteThread: DeleteResponse;
  invalidateSamples: SampleActionResponse;
  issueStockOrder: StockOrderResponse;
  manageAnalyses: ResultedSampleActionResponse;
  printSamples: SampleActionResponse;
  publishSamples: SuccessErrorResponse;
  reInstateAnalysisResults: AnalysisResultResponse;
  reInstateSamples: ResultedSampleActionResponse;
  receiveSamples: ResultedSampleActionResponse;
  recoverSamples: StoreSampleResponse;
  refresh: AuthenticatedDataResponse;
  rejectSamples: SampleActionResponse;
  replyMessage: MessageResponse;
  requestPasswordReset: MessageResponse;
  resetPassword: MessageResponse;
  retestAnalysisResults: AnalysisResultResponse;
  retractAnalysisResults: AnalysisResultResponse;
  samplesApplyTemplate: ResultedSampleActionResponse;
  sendMessage: MessageResponse;
  shipmentManageSamples: ShipmentResponse;
  storeSamples: StoreSampleResponse;
  submitAnalysisResults: AnalysisResultSubmitResponse;
  submitStockOrder: StockOrderResponse;
  updateAnalysis: ProfilesServiceResponse;
  updateAnalysisCategory: AnalysisCategoryResponse;
  updateAnalysisCorrectionFactor: AnalysisCorrectionFactorResponse;
  updateAnalysisDetectionLimit: AnalysisDetectionLimitResponse;
  updateAnalysisDiscount: AnalysisDiscountResponse;
  updateAnalysisInterim: AnalysisInterimResponse;
  updateAnalysisMapping: AnalysisMappingResponse;
  updateAnalysisPrice: AnalysisPriceResponse;
  updateAnalysisSpecification: AnalysisSpecificationResponse;
  updateAnalysisTemplate: AnalysisTemplateResponse;
  updateAnalysisUncertainty: AnalysisUncertaintyResponse;
  updateCaliberationCertificate: CalibrationCertificateResponse;
  updateClient: ClientResponse;
  updateClientContact: ClientContactResponse;
  updateCodingStandard: CodingStandardResponse;
  updateCountry: CountryResponse;
  updateDepartment: DepartmentResponse;
  updateDistrict: DistrictResponse;
  updateGroup: GroupResponse;
  updateGroupPermissions: UpdatedGroupPermsResponse;
  updateHazard: HazardResponse;
  updateIdentification: IdentificationResponse;
  updateInstrument: InstrumentResponse;
  updateInstrumentCaliberation: InstrumentCalibrationResponse;
  updateInstrumentCompetence: InstrumentCompetenceResponse;
  updateInstrumentType: InstrumentTypeResponse;
  updateLaboratory: LaboratoryResponse;
  updateLaboratoryInstrument: LaboratoryInstrumentResponse;
  updateLaboratorySetting: LaboratorySettingResponse;
  updateManufacturer: ManufacturerResponse;
  updateMethod: MethodResponse;
  updateNotice: NoticeResponse;
  updatePatient: PatientResponse;
  updateProfile: AnalysisProfileResponse;
  updateProfileDiscount: ProfileDiscountResponse;
  updateProfileMapping: ProfileMappingResponse;
  updateProfilePrice: ProfilePriceResponse;
  updateProvince: ProvinceResponse;
  updateQcLevel: QcLevelResponse;
  updateQcTemplate: QcTemplateResponse;
  updateReferralLaboratory: ReferralLaboratoryResponse;
  updateReflexAction: ReflexActionResponse;
  updateReflexBrain: ReflexBrainResponse;
  updateReflexRule: ReflexRuleResponse;
  updateRejectionReason: RejectionReasonResponse;
  updateResultOption: ResultOptionResponse;
  updateSampleType: SampleTypeResponse;
  updateSampleTypeMapping: SampleTypeMappingResponse;
  updateShipment: ShipmentResponse;
  updateStockCategory: StockCategoryResponse;
  updateStockItem: StockItemResponse;
  updateStockItemVariant: StockItemVariantResponse;
  updateStockOrder: StockOrderResponse;
  updateStockUnit: StockUnitResponse;
  updateStorageContainer: StorageContainerResponse;
  updateStorageLocation: StorageLocationResponse;
  updateStorageSection: StorageSectionResponse;
  updateStoreRoom: StoreRoomResponse;
  updateSupplier: SupplierResponse;
  updateUnit: UnitResponse;
  updateUser: UserResponse;
  updateVoucher: VoucherResponse;
  updateVoucherCode: VoucherCodeResponse;
  updateWorksheet: WorkSheetResponse;
  updateWorksheetApplyTemplate: WorkSheetResponse;
  updateWorksheetManualAssign: WorkSheetResponse;
  updateWorksheetTemplate: WorkSheetTemplateResponse;
  validatePasswordResetToken: PasswordResetValidityResponse;
  verifyAnalysisResults: AnalysisResultSubmitResponse;
  verifySamples: SampleActionResponse;
  viewMessage: MessageResponse;
  viewNotice: NoticeType;
};


export type MutationActionShipmentArgs = {
  action: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationActionWorksheetsArgs = {
  action: Scalars['String']['input'];
  uids: Array<Scalars['String']['input']>;
};


export type MutationApplyVoucherArgs = {
  payload: ApplyVoucherInput;
};


export type MutationApproveStockOrderArgs = {
  payload: StockOrderApprovalInputType;
  uid: Scalars['String']['input'];
};


export type MutationAuthenticateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCancelAnalysisResultsArgs = {
  analyses: Array<Scalars['String']['input']>;
};


export type MutationCancelSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationCloneSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationConfirmTestBillTransactionArgs = {
  notes?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};


export type MutationCreateAnalysisArgs = {
  payload: AnalysisInputType;
};


export type MutationCreateAnalysisCategoryArgs = {
  payload: AnalysisCategoryInputType;
};


export type MutationCreateAnalysisCorrectionFactorArgs = {
  payload: AnalysisCorrectionFactorInput;
};


export type MutationCreateAnalysisDetectionLimitArgs = {
  payload: AnalysisDetectionLimitInput;
};


export type MutationCreateAnalysisInterimArgs = {
  payload: AnalysisInterimInput;
};


export type MutationCreateAnalysisMappingArgs = {
  payload: AnalysisMappingInputType;
};


export type MutationCreateAnalysisRequestArgs = {
  payload: AnalysisRequestInputType;
};


export type MutationCreateAnalysisSpecificationArgs = {
  payload: AnalysisSpecificationInput;
};


export type MutationCreateAnalysisTemplateArgs = {
  payload: AnalysisTemplateInputType;
};


export type MutationCreateAnalysisUncertaintyArgs = {
  payload: AnalysisUncertaintyInput;
};


export type MutationCreateCaliberationCertificateArgs = {
  payload: CalibrationCertificateInput;
};


export type MutationCreateClientArgs = {
  payload: ClientInputType;
};


export type MutationCreateClientContactArgs = {
  payload: ClientContactInputType;
};


export type MutationCreateCodingStandardArgs = {
  payload: CodingStandardInputType;
};


export type MutationCreateCountryArgs = {
  payload: CountryInputType;
};


export type MutationCreateDepartmentArgs = {
  payload: DepartmentInputType;
};


export type MutationCreateDistrictArgs = {
  payload: DistrictInputType;
};


export type MutationCreateGroupArgs = {
  payload: GroupInputType;
};


export type MutationCreateHazardArgs = {
  payload: HazardInputType;
};


export type MutationCreateIdentificationArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateInstrumentArgs = {
  payload: InstrumentInputType;
};


export type MutationCreateInstrumentCaliberationArgs = {
  payload: InstrumentCalibrationInput;
};


export type MutationCreateInstrumentCompetenceArgs = {
  payload: InstrumentCompetenceInput;
};


export type MutationCreateInstrumentTypeArgs = {
  payload: InstrumentTypeInputType;
};


export type MutationCreateLaboratoryInstrumentArgs = {
  payload: LaboratoryInstrumentInputType;
};


export type MutationCreateManufacturerArgs = {
  payload: ManufacturerInputType;
};


export type MutationCreateMethodArgs = {
  payload: MethodInputType;
};


export type MutationCreateNoticeArgs = {
  payload: NoticeInputType;
};


export type MutationCreatePatientArgs = {
  payload: PatientInputType;
};


export type MutationCreateProfileArgs = {
  payload: ProfileInputType;
};


export type MutationCreateProfileMappingArgs = {
  payload: ProfileMappingInputType;
};


export type MutationCreateProvinceArgs = {
  payload: ProvinceInputType;
};


export type MutationCreateQcLevelArgs = {
  level: Scalars['String']['input'];
};


export type MutationCreateQcSetArgs = {
  samples: Array<QcSetInputType>;
};


export type MutationCreateQcTemplateArgs = {
  payload: QcTemplateInputType;
};


export type MutationCreateReferralLaboratoryArgs = {
  payload: ReferralLaboratoryInputType;
};


export type MutationCreateReflexActionArgs = {
  payload: ReflexActionInput;
};


export type MutationCreateReflexBrainArgs = {
  payload: ReflexBrainInput;
};


export type MutationCreateReflexRuleArgs = {
  payload: ReflexRuleInput;
};


export type MutationCreateRejectionReasonArgs = {
  reason: Scalars['String']['input'];
};


export type MutationCreateResultOptionArgs = {
  payload: ResultOptionInputType;
};


export type MutationCreateSampleTypeArgs = {
  payload: SampleTypeInputType;
};


export type MutationCreateSampleTypeMappingArgs = {
  payload: SampleTypeMappingInputType;
};


export type MutationCreateShipmentArgs = {
  payload: ShipmentInputType;
};


export type MutationCreateStockAdjustmentArgs = {
  payload: StockAdjustmentInputType;
};


export type MutationCreateStockCategoryArgs = {
  payload: StockCategoryInputType;
};


export type MutationCreateStockItemArgs = {
  payload: StockItemInputType;
};


export type MutationCreateStockItemVariantArgs = {
  payload: StockItemVariantInputType;
  stockItemUid: Scalars['String']['input'];
};


export type MutationCreateStockOrderArgs = {
  payload: StockOrderInputType;
};


export type MutationCreateStockReceiptArgs = {
  payload: StockReceiptInputType;
};


export type MutationCreateStockUnitArgs = {
  payload: StockUnitInputType;
};


export type MutationCreateStorageContainerArgs = {
  payload: StorageContainerInputType;
};


export type MutationCreateStorageLocationArgs = {
  payload: StorageLocationInputType;
};


export type MutationCreateStorageSectionArgs = {
  payload: StorageSectionInputType;
};


export type MutationCreateStoreRoomArgs = {
  payload: StoreRoomInputType;
};


export type MutationCreateSupplierArgs = {
  payload: SupplierInputType;
};


export type MutationCreateTestBillTransactionArgs = {
  payload: BillTransactionInput;
};


export type MutationCreateUnitArgs = {
  payload: UnitInputType;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  groupUid?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  openReg?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  passwordc: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationCreateVoucherArgs = {
  payload: VoucherInput;
};


export type MutationCreateVoucherCodeArgs = {
  payload: VoucherCodeInput;
};


export type MutationCreateWorksheetArgs = {
  analystUid: Scalars['String']['input'];
  count?: InputMaybe<Scalars['Int']['input']>;
  templateUid: Scalars['String']['input'];
};


export type MutationCreateWorksheetTemplateArgs = {
  payload: WorksheetTemplateInputType;
};


export type MutationDeleteClientContactArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteMessageArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteNoticeArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteReflexBrainArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteStockOrderArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteThreadArgs = {
  uid: Scalars['String']['input'];
};


export type MutationInvalidateSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationIssueStockOrderArgs = {
  payload: Array<StockOrderProductLineInputType>;
  uid: Scalars['String']['input'];
};


export type MutationManageAnalysesArgs = {
  payload: ManageAnalysisInputType;
  sampleUid: Scalars['String']['input'];
};


export type MutationPrintSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationPublishSamplesArgs = {
  samples: Array<SamplePublishInputType>;
};


export type MutationReInstateAnalysisResultsArgs = {
  analyses: Array<Scalars['String']['input']>;
};


export type MutationReInstateSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationReceiveSamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationRecoverSamplesArgs = {
  sampleUids: Array<Scalars['String']['input']>;
};


export type MutationRefreshArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRejectSamplesArgs = {
  samples: Array<SampleRejectInputType>;
};


export type MutationReplyMessageArgs = {
  body: Scalars['String']['input'];
  threadUid: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  passwordc: Scalars['String']['input'];
  userUid: Scalars['String']['input'];
};


export type MutationRetestAnalysisResultsArgs = {
  analyses: Array<Scalars['String']['input']>;
};


export type MutationRetractAnalysisResultsArgs = {
  analyses: Array<Scalars['String']['input']>;
};


export type MutationSamplesApplyTemplateArgs = {
  analysisTemplateUid: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationSendMessageArgs = {
  body: Scalars['String']['input'];
  recipients: Array<Scalars['String']['input']>;
};


export type MutationShipmentManageSamplesArgs = {
  payload: ShipmentManageSamplesInput;
  uid: Scalars['String']['input'];
};


export type MutationStoreSamplesArgs = {
  payload: Array<StoreSamplesInputType>;
};


export type MutationSubmitAnalysisResultsArgs = {
  analysisResults: Array<ArResultInputType>;
  sourceObject: Scalars['String']['input'];
  sourceObjectUid: Scalars['String']['input'];
};


export type MutationSubmitStockOrderArgs = {
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisArgs = {
  payload: AnalysisInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisCategoryArgs = {
  payload: AnalysisCategoryInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisCorrectionFactorArgs = {
  payload: AnalysisCorrectionFactorInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisDetectionLimitArgs = {
  payload: AnalysisDetectionLimitInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisDiscountArgs = {
  payload: PriceDiscountInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisInterimArgs = {
  payload: AnalysisInterimInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisMappingArgs = {
  payload: AnalysisMappingInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisPriceArgs = {
  payload: PriceInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisSpecificationArgs = {
  payload: AnalysisSpecificationInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisTemplateArgs = {
  payload: AnalysisTemplateInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateAnalysisUncertaintyArgs = {
  payload: AnalysisUncertaintyInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateCaliberationCertificateArgs = {
  payload: CalibrationCertificateInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateClientArgs = {
  payload: ClientInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateClientContactArgs = {
  payload: ClientContactInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateCodingStandardArgs = {
  payload: CodingStandardInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateCountryArgs = {
  payload: CountryInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateDepartmentArgs = {
  payload: DepartmentInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateDistrictArgs = {
  payload: DistrictInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateGroupArgs = {
  payload: GroupInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateGroupPermissionsArgs = {
  groupUid: Scalars['String']['input'];
  permissionUid: Scalars['String']['input'];
};


export type MutationUpdateHazardArgs = {
  payload: HazardInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateIdentificationArgs = {
  name: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationUpdateInstrumentArgs = {
  payload: InstrumentInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateInstrumentCaliberationArgs = {
  payload: InstrumentInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateInstrumentCompetenceArgs = {
  payload: InstrumentInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateInstrumentTypeArgs = {
  payload: InstrumentTypeInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateLaboratoryArgs = {
  payload: LaboratoryInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateLaboratoryInstrumentArgs = {
  payload: LaboratoryInstrumentInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateLaboratorySettingArgs = {
  payload: LaboratorySettingInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateManufacturerArgs = {
  payload: ManufacturerInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateMethodArgs = {
  payload: MethodInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateNoticeArgs = {
  payload: NoticeInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdatePatientArgs = {
  payload: PatientInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  payload: ProfileInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateProfileDiscountArgs = {
  payload: PriceDiscountInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateProfileMappingArgs = {
  payload: ProfileMappingInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateProfilePriceArgs = {
  payload: PriceInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateProvinceArgs = {
  payload: ProvinceInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateQcLevelArgs = {
  level: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationUpdateQcTemplateArgs = {
  payload: QcTemplateInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateReferralLaboratoryArgs = {
  payload: ReferralLaboratoryInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateReflexActionArgs = {
  payload: ReflexActionInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateReflexBrainArgs = {
  payload: ReflexBrainInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateReflexRuleArgs = {
  payload: ReflexRuleInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateRejectionReasonArgs = {
  reason: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationUpdateResultOptionArgs = {
  payload: ResultOptionInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateSampleTypeArgs = {
  payload: SampleTypeInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateSampleTypeMappingArgs = {
  payload: SampleTypeMappingInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateShipmentArgs = {
  payload: ShipmentUpdateInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStockCategoryArgs = {
  payload: StockCategoryInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStockItemArgs = {
  payload: StockItemInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStockItemVariantArgs = {
  payload: StockItemVariantInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStockOrderArgs = {
  payload: StockOrderInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStockUnitArgs = {
  payload: StockUnitInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStorageContainerArgs = {
  payload: StorageContainerInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStorageLocationArgs = {
  payload: StorageLocationInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStorageSectionArgs = {
  payload: StorageSectionInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateStoreRoomArgs = {
  payload: StoreRoomInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateSupplierArgs = {
  payload: SupplierInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateUnitArgs = {
  payload: UnitInputType;
  uid: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groupUid?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordc?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};


export type MutationUpdateVoucherArgs = {
  payload: VoucherInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateVoucherCodeArgs = {
  payload: VoucherCodeInput;
  uid: Scalars['String']['input'];
};


export type MutationUpdateWorksheetArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  analystUid?: InputMaybe<Scalars['String']['input']>;
  instrumentUid?: InputMaybe<Scalars['String']['input']>;
  methodUid?: InputMaybe<Scalars['String']['input']>;
  samples?: InputMaybe<Array<Scalars['String']['input']>>;
  worksheetUid: Scalars['String']['input'];
};


export type MutationUpdateWorksheetApplyTemplateArgs = {
  templateUid: Scalars['String']['input'];
  worksheetUid: Scalars['String']['input'];
};


export type MutationUpdateWorksheetManualAssignArgs = {
  analysesUids: Array<Scalars['String']['input']>;
  qcTemplateUid?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};


export type MutationUpdateWorksheetTemplateArgs = {
  payload: WorksheetTemplateInputType;
  uid: Scalars['String']['input'];
};


export type MutationValidatePasswordResetTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyAnalysisResultsArgs = {
  analyses: Array<Scalars['String']['input']>;
  sourceObject: Scalars['String']['input'];
  sourceObjectUid: Scalars['String']['input'];
};


export type MutationVerifySamplesArgs = {
  samples: Array<Scalars['String']['input']>;
};


export type MutationViewMessageArgs = {
  uid: Scalars['String']['input'];
};


export type MutationViewNoticeArgs = {
  uid: Scalars['String']['input'];
  viewer: Scalars['String']['input'];
};

export type Nothing = {
  __typename?: 'Nothing';
  data?: Maybe<Scalars['String']['output']>;
};

export type NoticeInputType = {
  body: Scalars['String']['input'];
  departments?: InputMaybe<Array<Scalars['String']['input']>>;
  expiry: Scalars['String']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

/** Union of possible outcomes when adding a new notice */
export type NoticeResponse = NoticeType | OperationError;

export type NoticeType = {
  __typename?: 'NoticeType';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  departments?: Maybe<Array<DepartmentType>>;
  expiry: Scalars['String']['output'];
  groups?: Maybe<Array<GroupType>>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  viewers?: Maybe<Array<UserType>>;
};

export type NotificationType = {
  __typename?: 'NotificationType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  departments?: Maybe<DepartmentType>;
  groups?: Maybe<GroupType>;
  message: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  users?: Maybe<UserType>;
  viewers?: Maybe<UserType>;
};

export type OperationError = {
  __typename?: 'OperationError';
  error: Scalars['String']['output'];
  suggestion?: Maybe<Scalars['String']['output']>;
};

export type OperationSuccess = {
  __typename?: 'OperationSuccess';
  message: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetValidityResponse = OperationError | PasswordResetValidityType;

export type PasswordResetValidityType = {
  __typename?: 'PasswordResetValidityType';
  authUid: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type PatientCursorPage = {
  __typename?: 'PatientCursorPage';
  edges?: Maybe<Array<PatientEdge>>;
  items?: Maybe<Array<PatientType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PatientEdge = {
  __typename?: 'PatientEdge';
  cursor: Scalars['String']['output'];
  node: PatientType;
};

export type PatientIdentificationType = {
  __typename?: 'PatientIdentificationType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  identification?: Maybe<IdentificationType>;
  identificationUid: Scalars['String']['output'];
  patientUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type PatientInputType = {
  age?: InputMaybe<Scalars['Int']['input']>;
  ageDobEstimated?: InputMaybe<Scalars['Boolean']['input']>;
  clientPatientId: Scalars['String']['input'];
  clientUid: Scalars['String']['input'];
  consentSms?: InputMaybe<Scalars['Boolean']['input']>;
  countryUid?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  districtUid?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  identifications?: InputMaybe<Array<PatientidentificationInput>>;
  internalUse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  phoneHome?: InputMaybe<Scalars['String']['input']>;
  phoneMobile?: InputMaybe<Scalars['String']['input']>;
  provinceUid?: InputMaybe<Scalars['String']['input']>;
};

export type PatientResponse = OperationError | PatientType;

export type PatientType = {
  __typename?: 'PatientType';
  active: Scalars['Boolean']['output'];
  age?: Maybe<Scalars['Int']['output']>;
  ageDobEstimated: Scalars['Boolean']['output'];
  client?: Maybe<ClientType>;
  clientPatientId: Scalars['String']['output'];
  clientUid: Scalars['String']['output'];
  consentSms: Scalars['Boolean']['output'];
  country?: Maybe<CountryType>;
  countryUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  district?: Maybe<DistrictType>;
  districtUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  identifications?: Maybe<Array<PatientIdentificationType>>;
  internalUse: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  patientId: Scalars['String']['output'];
  phoneHome?: Maybe<Scalars['String']['output']>;
  phoneMobile?: Maybe<Scalars['String']['output']>;
  province?: Maybe<ProvinceType>;
  provinceUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type PatientidentificationInput = {
  identificationUid: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PermissionType = {
  __typename?: 'PermissionType';
  action?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<PermissionType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<PermissionType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type PriceDiscountInput = {
  discountType: Scalars['String']['input'];
  endDate: Scalars['DateTime']['input'];
  isActive: Scalars['Boolean']['input'];
  startDate: Scalars['DateTime']['input'];
  valueAmount?: InputMaybe<Scalars['Float']['input']>;
  valuePercent?: InputMaybe<Scalars['Float']['input']>;
  valueType?: InputMaybe<Scalars['String']['input']>;
  voucherUid?: InputMaybe<Scalars['String']['input']>;
};

export type PriceInput = {
  amount: Scalars['Float']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProcessCounts = {
  __typename?: 'ProcessCounts';
  avgExtraDays?: Maybe<Scalars['Int']['output']>;
  processAverage?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Scalars['String']['output']>;
  totalLate?: Maybe<Scalars['Int']['output']>;
  totalNotLate?: Maybe<Scalars['Int']['output']>;
  totalSamples?: Maybe<Scalars['Int']['output']>;
};

export type ProcessData = {
  __typename?: 'ProcessData';
  counts?: Maybe<ProcessCounts>;
  groups?: Maybe<Array<ProcessCounts>>;
  process: Scalars['String']['output'];
};

export type ProcessStatistics = {
  __typename?: 'ProcessStatistics';
  data: Array<ProcessData>;
};

export type ProfileDiscountResponse = OperationError | ProfileDiscountType;

export type ProfileDiscountType = {
  __typename?: 'ProfileDiscountType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  discountType: Scalars['String']['output'];
  endDate: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  profile: ProfileType;
  profileUid: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  valueAmount: Scalars['Float']['output'];
  valuePercent: Scalars['Float']['output'];
  valueType: Scalars['String']['output'];
  voucher?: Maybe<VoucherType>;
  voucherUid?: Maybe<Scalars['String']['output']>;
};

export type ProfileInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  description?: Scalars['String']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sampleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProfileMappingInputType = {
  code: Scalars['String']['input'];
  codingStandardUid: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profileUid: Scalars['String']['input'];
};

/** Union of possible outcomes when adding a new notice */
export type ProfileMappingResponse = OperationError | ProfileMappingType;

export type ProfileMappingType = {
  __typename?: 'ProfileMappingType';
  code: Scalars['String']['output'];
  codingStandard?: Maybe<CodingStandardType>;
  codingStandardUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<ProfileType>;
  profileUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ProfilePriceResponse = OperationError | ProfilePriceType;

export type ProfilePriceType = {
  __typename?: 'ProfilePriceType';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  profile: ProfileType;
  profileUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  active: Scalars['Boolean']['output'];
  analyses?: Maybe<Array<AnalysisType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sampleTypes?: Maybe<Array<SampleTypeTyp>>;
  tatLengthMinutes?: Maybe<Scalars['Int']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ProfilesServiceResponse = AnalysisWithProfiles | OperationError;

export type ProvinceCursorPage = {
  __typename?: 'ProvinceCursorPage';
  edges?: Maybe<Array<ProvinceEdge>>;
  items?: Maybe<Array<ProvinceType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProvinceEdge = {
  __typename?: 'ProvinceEdge';
  cursor: Scalars['String']['output'];
  node: ProvinceType;
};

export type ProvinceInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  businessPhone?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  countryUid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCc?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProvinceResponse = OperationError | ProvinceType;

export type ProvinceType = {
  __typename?: 'ProvinceType';
  active?: Maybe<Scalars['Boolean']['output']>;
  businessPhone?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryType>;
  countryUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailCc?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type QcLevelResponse = OperationError | QcLevelType;

export type QcLevelType = {
  __typename?: 'QCLevelType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  level: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type QcSetCursorPage = {
  __typename?: 'QCSetCursorPage';
  edges?: Maybe<Array<QcSetEdge>>;
  items?: Maybe<Array<QcSetWithSamples>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QcSetEdge = {
  __typename?: 'QCSetEdge';
  cursor: Scalars['String']['output'];
  node: QcSetWithSamples;
};

export type QcSetInputType = {
  analysisProfiles: Array<Scalars['String']['input']>;
  analysisServices: Array<Scalars['String']['input']>;
  qcLevels: Array<Scalars['String']['input']>;
  qcTemplateUid?: InputMaybe<Scalars['String']['input']>;
};

export type QcSetResponse = CreateQcSetData | OperationError;

export type QcSetType = {
  __typename?: 'QCSetType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  status: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type QcSetWithSamples = {
  __typename?: 'QCSetWithSamples';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  samples?: Maybe<Array<SamplesWithResults>>;
  status: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type QcTemplateInputType = {
  departments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: Scalars['String']['input'];
  levels?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
};

export type QcTemplateResponse = OperationError | QcTemplateType;

export type QcTemplateType = {
  __typename?: 'QCTemplateType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  departments: Array<DepartmentType>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  qcLevels: Array<QcLevelType>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  analysisAll: AnalysisCursorPage;
  analysisByUid: AnalysisType;
  analysisCategoryAll: Array<AnalysisCategoryType>;
  analysisCategoryByUid: AnalysisCategoryType;
  analysisCorrectionFactorAll: Array<AnalysisCorrectionFactorType>;
  analysisCorrectionFactorByUid: AnalysisCorrectionFactorType;
  analysisDetectionLimitAll: Array<AnalysisDetectionLimitType>;
  analysisDetectionLimitByUid: AnalysisDetectionLimitType;
  analysisInterimAll: Array<AnalysisInterimType>;
  analysisInterimByUid: AnalysisInterimType;
  analysisMappingsByAnalysis: Array<AnalysisMappingType>;
  analysisProcessPerformance: ProcessStatistics;
  analysisRequestAll: AnalysisRequestCursorPage;
  analysisRequestByUid: AnalysisRequestWithSamples;
  analysisRequestsByClientUid: Array<AnalysisRequestWithSamples>;
  analysisRequestsByPatientUid: Array<AnalysisRequestWithSamples>;
  analysisResultBySampleUid: Array<AnalysisResultType>;
  analysisResultByUid: AnalysisResultType;
  analysisResultsForWsAssign: AnalysisResultCursorPage;
  analysisSpecificationAll: Array<AnalysisSpecificationType>;
  analysisSpecificationUid: AnalysisSpecificationType;
  analysisTemplateAll: Array<AnalysisTemplateType>;
  analysisTemplateByUid: AnalysisTemplateType;
  analysisUncertaintyAll: Array<AnalysisUncertaintyType>;
  analysisUncertaintyByUid: AnalysisUncertaintyType;
  analysisWithoutProfile: Array<AnalysisType>;
  auditLogsFilter?: Maybe<Array<AuditLogType>>;
  barcodeSamples?: Maybe<Array<Scalars['BytesScalar']['output']>>;
  billByUid?: Maybe<TestBillType>;
  billInvoice?: Maybe<TestBillInvoiceType>;
  billInvoiceCreate?: Maybe<Scalars['BytesScalar']['output']>;
  billInvoices?: Maybe<Array<TestBillInvoiceType>>;
  billTransactions?: Maybe<Array<TestBillTransactionType>>;
  bills: TestBillCursorPage;
  billsForClient?: Maybe<Array<TestBillType>>;
  billsForPatient?: Maybe<Array<TestBillType>>;
  clientAll: ClientCursorPage;
  clientByCode: ClientType;
  clientByUid: ClientType;
  clientContactAll: Array<ClientContactType>;
  clientContactByClientUid: Array<ClientContactType>;
  clientContactUid: ClientContactType;
  clientSearch: Array<ClientType>;
  clientsByName: Array<ClientType>;
  codingStandardAll: Array<CodingStandardType>;
  countAnalyteGroupByInstrument: GroupedCounts;
  countAnalyteGroupByStatus: GroupedCounts;
  countExtrasGroupByStatus: GroupedCounts;
  countSampleGroupByAction: GroupedData;
  countSampleGroupByStatus: GroupedCounts;
  countWorksheetGroupByStatus: GroupedCounts;
  countryAll: Array<CountryType>;
  countryByUid: CountryType;
  departmentAll: Array<DepartmentType>;
  departmentByUid: DepartmentType;
  discountForAnalysis?: Maybe<AnalysisDiscountType>;
  discountForProfile?: Maybe<ProfileDiscountType>;
  districtAll: DistrictCursorPage;
  districtByUid: DistrictType;
  districtsByProvinceUid: Array<DistrictType>;
  groupAll: Array<GroupType>;
  groupByUid?: Maybe<GroupType>;
  hazardAll: Array<HazardType>;
  hazardByUid?: Maybe<HazardType>;
  identificationAll: Array<IdentificationType>;
  identificationByUid: IdentificationType;
  impressReportDownload?: Maybe<Scalars['BytesScalar']['output']>;
  impressReportsDownload?: Maybe<Scalars['BytesScalar']['output']>;
  impressReportsMeta: Array<ReportImpressType>;
  instrumentAll: InstrumentCursorPage;
  instrumentByUid: InstrumentType;
  instrumentTypeAll: InstrumentTypeCursorPage;
  instrumentTypeByUid: InstrumentTypeType;
  laboratory: LaboratoryType;
  laboratoryInstrumentAll: LaboratoryInstrumentCursorPage;
  laboratoryInstrumentByUid: LaboratoryInstrumentType;
  laboratorySetting: LaboratorySettingType;
  manifestReportDownload?: Maybe<Scalars['BytesScalar']['output']>;
  manufacturerAll: Array<ManufacturerType>;
  manufacturerByUid: ManufacturerType;
  methodAll: MethodCursorPage;
  methodByUid: MethodType;
  noticeByUid?: Maybe<NoticeType>;
  noticeFilter: Array<NoticeType>;
  noticesByCreator?: Maybe<Array<NoticeType>>;
  notificationByUid?: Maybe<NotificationType>;
  notificationFilter: Array<NotificationType>;
  patientAll: PatientCursorPage;
  patientByPatientId?: Maybe<PatientType>;
  patientByUid?: Maybe<PatientType>;
  patientSearch: Array<PatientType>;
  permissionAll: Array<PermissionType>;
  permissionByUid?: Maybe<PermissionType>;
  priceForAnalysis?: Maybe<AnalysisPriceType>;
  priceForProfile?: Maybe<ProfilePriceType>;
  profileAll: Array<ProfileType>;
  profileByUid: ProfileType;
  profileMappingsByProfile: Array<ProfileMappingType>;
  provinceAll: ProvinceCursorPage;
  provinceByUid: ProvinceType;
  provincesByCountryUid: Array<ProvinceType>;
  qcChartData: Array<AnalysisResultType>;
  qcLevelAll: Array<QcLevelType>;
  qcLevelByUid: QcLevelType;
  qcSetAll: QcSetCursorPage;
  qcSetByUid: QcSetWithSamples;
  qcTemplateAll: Array<QcTemplateType>;
  qcTemplateByUid: QcTemplateType;
  referralLaboratoryAll: Array<ReferralLaboratoryType>;
  referralLaboratoryByCode: ReferralLaboratoryType;
  referralLaboratoryByUid: ReferralLaboratoryType;
  reflexRuleAll: ReflexRuleCursorPage;
  reflexRuleByUid?: Maybe<ReflexRuleType>;
  rejectionReasonByUid: RejectionReasonType;
  rejectionReasonsAll: Array<RejectionReasonType>;
  resultMutationByResultUid?: Maybe<ResultMutationType>;
  resultOptionsByAnalysisUid: ResultOptionType;
  sampleAll: SampleCursorPage;
  sampleByParentId: Array<SampleType>;
  sampleByUid: SampleType;
  sampleCount: Scalars['Int']['output'];
  sampleLaggards: LaggardStatistics;
  sampleProcessPerformance: ProcessStatistics;
  sampleSearch: Array<SampleType>;
  sampleTypeAll: Array<SampleTypeTyp>;
  sampleTypeByUid: SampleTypeTyp;
  sampleTypeMappingsBySampleType: Array<SampleTypeMappingType>;
  samplesByStorageContainerUid: Array<SampleType>;
  samplesByUids: Array<SamplesWithResults>;
  samplesForShipmentAssign: SampleCursorPage;
  shipmentAll: ShipmentCursorPage;
  shipmentById: ShipmentType;
  shipmentByStatus: Array<ShipmentType>;
  shipmentByUid: ShipmentType;
  stockAdjustmentAll: StockAdjustmentCursorPage;
  stockAdjustmentByUid?: Maybe<StockAdjustmentType>;
  stockCategoryAll: Array<StockCategoryType>;
  stockCategoryByUid?: Maybe<StockCategoryType>;
  stockItemAll: StockItemCursorPage;
  stockItemByUid?: Maybe<StockItemType>;
  stockItemVariants: Array<StockItemVariantType>;
  stockLots: Array<StockLotType>;
  stockOrderAll: StockOrderCursorPage;
  stockOrderByUid?: Maybe<StockOrderType>;
  stockOrderProductAll: Array<StockOrderProductType>;
  stockOrderProductByUid?: Maybe<StockOrderProductType>;
  stockProductAll: StockItemVariantCursorPage;
  stockProductByUid?: Maybe<StockItemVariantType>;
  stockProductInventory?: Maybe<StockProductInventoryType>;
  stockReceipt: Array<StockReceiptType>;
  stockUnitAll: Array<StockUnitType>;
  stockUnitByUid?: Maybe<StockUnitType>;
  storageContainerByUid?: Maybe<StorageContainerType>;
  storageContainers: Array<StorageContainerType>;
  storageLocationByUid?: Maybe<StorageLocationType>;
  storageLocations: Array<StorageLocationType>;
  storageSectionByUid?: Maybe<StorageSectionType>;
  storageSections: Array<StorageSectionType>;
  storeRoomAll: Array<StoreRoomType>;
  storeRoomByUid?: Maybe<StoreRoomType>;
  supplierAll: Array<SupplierType>;
  supplierByUid: SupplierType;
  threadByUid?: Maybe<MessageThreadType>;
  threadsForUser?: Maybe<Array<MessageThreadType>>;
  unitAll: Array<UnitType>;
  unitByUid: UnitType;
  userAll: UserCursorPage;
  userByEmail?: Maybe<UserType>;
  userMe?: Maybe<UserType>;
  voucherAll?: Maybe<Array<VoucherType>>;
  voucherByUid?: Maybe<VoucherType>;
  voucherCodes?: Maybe<Array<VoucherCodeType>>;
  worksheetAll: WorkSheetCursorPage;
  worksheetByAnalyst: Array<WorkSheetType>;
  worksheetById: WorkSheetType;
  worksheetByStatus: Array<WorkSheetType>;
  worksheetByUid: WorkSheetType;
  worksheetTemplateAll: Array<WorkSheetTemplateType>;
  worksheetTemplateByUid: Array<WorkSheetType>;
};


export type QueryAnalysisAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  qcOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalysisByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisCategoryByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisCorrectionFactorByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisDetectionLimitByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisInterimByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisMappingsByAnalysisArgs = {
  analysisUid: Scalars['String']['input'];
};


export type QueryAnalysisProcessPerformanceArgs = {
  endDate: Scalars['String']['input'];
  process: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryAnalysisRequestAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalysisRequestByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisRequestsByClientUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisRequestsByPatientUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisResultBySampleUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisResultByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisResultsForWsAssignArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  analysisUid?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sampleTypeUid?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalysisSpecificationUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisTemplateByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAnalysisUncertaintyByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAuditLogsFilterArgs = {
  targetType: Scalars['String']['input'];
  targetUid: Scalars['String']['input'];
};


export type QueryBarcodeSamplesArgs = {
  sampleUids: Array<Scalars['String']['input']>;
};


export type QueryBillByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryBillInvoiceArgs = {
  invoiceUid: Scalars['String']['input'];
};


export type QueryBillInvoiceCreateArgs = {
  billUid: Scalars['String']['input'];
};


export type QueryBillInvoicesArgs = {
  billUid: Scalars['String']['input'];
};


export type QueryBillTransactionsArgs = {
  billUid: Scalars['String']['input'];
};


export type QueryBillsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  clientUid?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  partial?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBillsForClientArgs = {
  clientUid: Scalars['String']['input'];
};


export type QueryBillsForPatientArgs = {
  patientUid: Scalars['String']['input'];
};


export type QueryClientAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryClientByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryClientContactByClientUidArgs = {
  clientUid: Scalars['String']['input'];
};


export type QueryClientContactUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryClientSearchArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryClientsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryCountAnalyteGroupByInstrumentArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountSampleGroupByActionArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountryByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryDepartmentByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryDiscountForAnalysisArgs = {
  analysisUid: Scalars['String']['input'];
};


export type QueryDiscountForProfileArgs = {
  profileUid: Scalars['String']['input'];
};


export type QueryDistrictAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDistrictByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryDistrictsByProvinceUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryGroupByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryHazardByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryIdentificationByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryImpressReportDownloadArgs = {
  uid: Scalars['String']['input'];
};


export type QueryImpressReportsDownloadArgs = {
  sampleIds: Array<Scalars['String']['input']>;
};


export type QueryImpressReportsMetaArgs = {
  uids: Array<Scalars['String']['input']>;
};


export type QueryInstrumentAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstrumentByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryInstrumentTypeAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstrumentTypeByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryLaboratoryArgs = {
  setupName: Scalars['String']['input'];
};


export type QueryLaboratoryInstrumentAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLaboratoryInstrumentByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryLaboratorySettingArgs = {
  setupName: Scalars['String']['input'];
};


export type QueryManifestReportDownloadArgs = {
  uid: Scalars['String']['input'];
};


export type QueryManufacturerByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryMethodAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMethodByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryNoticeByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryNoticeFilterArgs = {
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  groupUid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNoticesByCreatorArgs = {
  uid: Scalars['String']['input'];
};


export type QueryNotificationByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryNotificationFilterArgs = {
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  groupUid?: InputMaybe<Scalars['String']['input']>;
  userUid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatientAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatientByPatientIdArgs = {
  patientId: Scalars['String']['input'];
};


export type QueryPatientByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryPatientSearchArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryPermissionByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryPriceForAnalysisArgs = {
  analysisUid: Scalars['String']['input'];
};


export type QueryPriceForProfileArgs = {
  profileUid: Scalars['String']['input'];
};


export type QueryProfileByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryProfileMappingsByProfileArgs = {
  profileUid: Scalars['String']['input'];
};


export type QueryProvinceAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProvinceByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryProvincesByCountryUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryQcChartDataArgs = {
  analyses: Array<Scalars['String']['input']>;
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};


export type QueryQcLevelByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryQcSetAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: Array<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQcSetByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryQcTemplateByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryReferralLaboratoryByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryReferralLaboratoryByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryReflexRuleAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReflexRuleByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryRejectionReasonByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryResultMutationByResultUidArgs = {
  resultUid: Scalars['String']['input'];
};


export type QueryResultOptionsByAnalysisUidArgs = {
  uid: Scalars['String']['input'];
};


export type QuerySampleAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  clientUid?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySampleByParentIdArgs = {
  parentId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySampleByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QuerySampleCountArgs = {
  clientUid: Scalars['String']['input'];
  status: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type QuerySampleProcessPerformanceArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};


export type QuerySampleSearchArgs = {
  clientUid: Scalars['String']['input'];
  status: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type QuerySampleTypeByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QuerySampleTypeMappingsBySampleTypeArgs = {
  sampleTypeUid: Scalars['String']['input'];
};


export type QuerySamplesByStorageContainerUidArgs = {
  uid: Scalars['String']['input'];
};


export type QuerySamplesByUidsArgs = {
  sampleUids?: Array<Scalars['String']['input']>;
};


export type QuerySamplesForShipmentAssignArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  analysisUid?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sampleTypeUid?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShipmentAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  incoming?: Scalars['Boolean']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShipmentByIdArgs = {
  shipmentId: Scalars['String']['input'];
};


export type QueryShipmentByStatusArgs = {
  shipmentStatus: Scalars['String']['input'];
};


export type QueryShipmentByUidArgs = {
  shipmentUid: Scalars['String']['input'];
};


export type QueryStockAdjustmentAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productUid?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStockAdjustmentByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockCategoryByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockItemAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStockItemByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockItemVariantsArgs = {
  stockItemUid: Scalars['String']['input'];
};


export type QueryStockLotsArgs = {
  productUid: Scalars['String']['input'];
};


export type QueryStockOrderAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStockOrderByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockOrderProductAllArgs = {
  stockOrderUid: Scalars['String']['input'];
};


export type QueryStockOrderProductByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockProductAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStockProductByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStockProductInventoryArgs = {
  productUid: Scalars['String']['input'];
  stockLotUid: Scalars['String']['input'];
};


export type QueryStockReceiptArgs = {
  productUid: Scalars['String']['input'];
  stockLotUid: Scalars['String']['input'];
};


export type QueryStockUnitByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStorageContainerByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStorageContainersArgs = {
  storageSectionUid: Scalars['String']['input'];
};


export type QueryStorageLocationByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStorageLocationsArgs = {
  storeRoomUid: Scalars['String']['input'];
};


export type QueryStorageSectionByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryStorageSectionsArgs = {
  storageLocationUid: Scalars['String']['input'];
};


export type QueryStoreRoomByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QuerySupplierByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryThreadByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryThreadsForUserArgs = {
  uid: Scalars['String']['input'];
};


export type QueryUnitByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryUserAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserMeArgs = {
  token: Scalars['String']['input'];
};


export type QueryVoucherByUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryVoucherCodesArgs = {
  voucherUid: Scalars['String']['input'];
};


export type QueryWorksheetAllArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWorksheetByAnalystArgs = {
  analystUid: Scalars['String']['input'];
};


export type QueryWorksheetByIdArgs = {
  worksheetId: Scalars['String']['input'];
};


export type QueryWorksheetByStatusArgs = {
  worksheetStatus: Scalars['String']['input'];
};


export type QueryWorksheetByUidArgs = {
  worksheetUid: Scalars['String']['input'];
};


export type QueryWorksheetTemplateByUidArgs = {
  worksheetUid: Scalars['String']['input'];
};

export type ReferenceSampleInput = {
  analyses: Array<Scalars['String']['input']>;
  sampleUid?: InputMaybe<Scalars['String']['input']>;
  shipedSampleUid?: InputMaybe<Scalars['String']['input']>;
};

export type ReferralLaboratoryInputType = {
  code: Scalars['String']['input'];
  isReference?: Scalars['Boolean']['input'];
  isReferral?: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  url: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ReferralLaboratoryResponse = OperationError | ReferralLaboratoryType;

export type ReferralLaboratoryType = {
  __typename?: 'ReferralLaboratoryType';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isReference?: Maybe<Scalars['Boolean']['output']>;
  isReferral?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ReflexActionInput = {
  analyses: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
  reflexRuleUid: Scalars['String']['input'];
  sampleTypeUid?: InputMaybe<Scalars['String']['input']>;
};

export type ReflexActionResponse = OperationError | ReflexActionType;

export type ReflexActionType = {
  __typename?: 'ReflexActionType';
  analyses?: Maybe<Array<AnalysisType>>;
  brains?: Maybe<Array<ReflexBrainType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  reflexRule?: Maybe<ReflexRuleType>;
  reflexRuleUid: Scalars['String']['output'];
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReflexAddNewInput = {
  analysisUid: Scalars['String']['input'];
  count: Scalars['Int']['input'];
};

export type ReflexBrainActionInput = {
  addNew?: InputMaybe<Array<ReflexAddNewInput>>;
  finalise?: InputMaybe<Array<ReflexFinalInput>>;
};

export type ReflexBrainActionType = {
  __typename?: 'ReflexBrainActionType';
  addNew?: Maybe<Array<ReflexBrainAdditionType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  finalise?: Maybe<Array<ReflexBrainFinalType>>;
  priority: Scalars['Int']['output'];
  reflexBrain?: Maybe<ReflexBrainType>;
  reflexBrainUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReflexBrainAdditionType = {
  __typename?: 'ReflexBrainAdditionType';
  analysis?: Maybe<AnalysisType>;
  analysisUid: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  reflexBrainAction?: Maybe<ReflexBrainActionType>;
  reflexBrainActionUid: Scalars['String']['output'];
};

export type ReflexBrainConditionCriteriaType = {
  __typename?: 'ReflexBrainConditionCriteriaType';
  analysis?: Maybe<AnalysisType>;
  analysisUid: Scalars['String']['output'];
  operator: Scalars['String']['output'];
  reflexBrainCondition?: Maybe<ReflexBrainConditionType>;
  reflexBrainConditionUid: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ReflexBrainConditionInput = {
  criteria?: InputMaybe<Array<ReflexBrainCriteriaInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type ReflexBrainConditionType = {
  __typename?: 'ReflexBrainConditionType';
  criteria?: Maybe<Array<ReflexBrainConditionCriteriaType>>;
  description?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  reflexBrain: ReflexBrainType;
  reflexBrainUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type ReflexBrainCriteriaInput = {
  analysisUid: Scalars['String']['input'];
  operator: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ReflexBrainFinalType = {
  __typename?: 'ReflexBrainFinalType';
  analysis?: Maybe<AnalysisType>;
  analysisUid: Scalars['String']['output'];
  reflexBrainAction?: Maybe<ReflexBrainActionType>;
  reflexBrainActionUid: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ReflexBrainInput = {
  actions?: InputMaybe<Array<ReflexBrainActionInput>>;
  conditions?: InputMaybe<Array<ReflexBrainConditionInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  reflexActionUid: Scalars['String']['input'];
};

export type ReflexBrainResponse = OperationError | ReflexBrainType;

export type ReflexBrainType = {
  __typename?: 'ReflexBrainType';
  actions: Array<ReflexBrainActionType>;
  conditions: Array<ReflexBrainConditionType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  reflexAction?: Maybe<ReflexBrainType>;
  reflexActionUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReflexFinalInput = {
  analysisUid: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ReflexRuleCursorPage = {
  __typename?: 'ReflexRuleCursorPage';
  edges?: Maybe<Array<ReflexRuleEdge>>;
  items?: Maybe<Array<ReflexRuleType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReflexRuleEdge = {
  __typename?: 'ReflexRuleEdge';
  cursor: Scalars['String']['output'];
  node: ReflexRuleType;
};

export type ReflexRuleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ReflexRuleResponse = OperationError | ReflexRuleType;

export type ReflexRuleType = {
  __typename?: 'ReflexRuleType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  reflexActions?: Maybe<Array<ReflexActionType>>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type RejectionReasonResponse = OperationError | RejectionReasonType;

export type RejectionReasonType = {
  __typename?: 'RejectionReasonType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  reason: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReportImpressType = {
  __typename?: 'ReportImpressType';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  emailRequired?: Maybe<Scalars['Boolean']['output']>;
  emailSent?: Maybe<Scalars['Boolean']['output']>;
  generatedBy?: Maybe<UserType>;
  generatedByUid?: Maybe<Scalars['String']['output']>;
  jsonContent?: Maybe<Scalars['JSONScalar']['output']>;
  sample?: Maybe<SampleType>;
  sampleUid?: Maybe<Scalars['String']['output']>;
  smsRequired?: Maybe<Scalars['Boolean']['output']>;
  smsSent?: Maybe<Scalars['Boolean']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReportMetaType = {
  __typename?: 'ReportMetaType';
  analyses?: Maybe<Array<AnalysisType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateColumn: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  periodEnd: Scalars['DateTime']['output'];
  periodStart: Scalars['DateTime']['output'];
  reportType: Scalars['String']['output'];
  sampleStates?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  temp?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ReservedInputType = {
  levelUid?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['Int']['input'];
};

export type ResultListingType = {
  __typename?: 'ResultListingType';
  results: Array<AnalysisResultType>;
};

export type ResultMutationType = {
  __typename?: 'ResultMutationType';
  after: Scalars['String']['output'];
  before: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  mutation: Scalars['String']['output'];
  resultUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ResultOptionInputType = {
  analysisUid: Scalars['String']['input'];
  optionKey: Scalars['Int']['input'];
  sampleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  value: Scalars['String']['input'];
};

export type ResultOptionResponse = OperationError | ResultOptionType;

export type ResultOptionType = {
  __typename?: 'ResultOptionType';
  analysisUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  optionKey: Scalars['Int']['output'];
  sampleTypes?: Maybe<Array<SampleTypeTyp>>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** Union of possible outcomes when actioning samples */
export type ResultedSampleActionResponse = OperationError | ResultedSampleListingType;

export type ResultedSampleListingType = {
  __typename?: 'ResultedSampleListingType';
  samples: Array<SamplesWithResults>;
};

/** Union of possible outcomes when actioning samples */
export type SampleActionResponse = OperationError | SampleListingType;

export type SampleCursorPage = {
  __typename?: 'SampleCursorPage';
  edges?: Maybe<Array<SampleEdge>>;
  items?: Maybe<Array<SamplesWithResults>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SampleEdge = {
  __typename?: 'SampleEdge';
  cursor: Scalars['String']['output'];
  node: SamplesWithResults;
};

export type SampleListingType = {
  __typename?: 'SampleListingType';
  samples: Array<SampleType>;
};

export type SamplePublishInputType = {
  action?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type SampleRejectInputType = {
  other?: InputMaybe<Scalars['String']['input']>;
  reasons: Array<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};

export type SampleType = {
  __typename?: 'SampleType';
  analyses?: Maybe<Array<AnalysisType>>;
  analysisRequest?: Maybe<AnalysisRequestType>;
  analysisRequestUid: Scalars['String']['output'];
  assigned: Scalars['Boolean']['output'];
  cancelledBy?: Maybe<UserType>;
  cancelledByUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateCancelled?: Maybe<Scalars['DateTime']['output']>;
  dateCollected?: Maybe<Scalars['DateTime']['output']>;
  dateInvalidated?: Maybe<Scalars['DateTime']['output']>;
  datePrinted?: Maybe<Scalars['DateTime']['output']>;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  dateReceived?: Maybe<Scalars['DateTime']['output']>;
  dateRetrievedFromStorage?: Maybe<Scalars['DateTime']['output']>;
  dateStored?: Maybe<Scalars['DateTime']['output']>;
  dateSubmitted?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  invalidatedBy?: Maybe<UserType>;
  invalidatedByUid?: Maybe<Scalars['String']['output']>;
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  parent?: Maybe<SampleType>;
  parentId?: Maybe<Scalars['String']['output']>;
  printed?: Maybe<Scalars['Boolean']['output']>;
  printedBy?: Maybe<UserType>;
  printedByUid?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  profiles: Array<ProfileType>;
  publishedBy?: Maybe<UserType>;
  publishedByUid?: Maybe<Scalars['String']['output']>;
  qcLevel?: Maybe<QcLevelType>;
  qcLevelUid?: Maybe<Scalars['String']['output']>;
  qcSet?: Maybe<QcSetType>;
  qcSetUid?: Maybe<Scalars['String']['output']>;
  receivedBy?: Maybe<UserType>;
  receivedByUid?: Maybe<Scalars['String']['output']>;
  rejectionReasons?: Maybe<Array<RejectionReasonType>>;
  sampleId: Scalars['String']['output'];
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  storageContainer?: Maybe<StorageContainerType>;
  storageContainerUid?: Maybe<Scalars['String']['output']>;
  storageSlot?: Maybe<Scalars['String']['output']>;
  storageSlotIndex?: Maybe<Scalars['Int']['output']>;
  storedBy?: Maybe<UserType>;
  storedByUid?: Maybe<Scalars['String']['output']>;
  submittedBy?: Maybe<UserType>;
  submittedByUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  verifiedBy?: Maybe<UserType>;
  verifiedByUid?: Maybe<Scalars['String']['output']>;
};

export type SampleTypeInputType = {
  abbr: Scalars['String']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalUse?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type SampleTypeMappingInputType = {
  code: Scalars['String']['input'];
  codingStandardUid: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sampleTypeUid: Scalars['String']['input'];
};

/** Union of possible outcomes when adding a new notice */
export type SampleTypeMappingResponse = OperationError | SampleTypeMappingType;

export type SampleTypeMappingType = {
  __typename?: 'SampleTypeMappingType';
  code: Scalars['String']['output'];
  codingStandard?: Maybe<CodingStandardType>;
  codingStandardUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type SampleTypeResponse = OperationError | SampleTypeTyp;

export type SampleTypeTyp = {
  __typename?: 'SampleTypeTyp';
  abbr: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type SamplesWithResults = {
  __typename?: 'SamplesWithResults';
  analyses?: Maybe<Array<AnalysisType>>;
  analysisRequest?: Maybe<AnalysisRequestType>;
  analysisRequestUid: Scalars['String']['output'];
  analysisResults?: Maybe<Array<AnalysisResultType>>;
  assigned: Scalars['Boolean']['output'];
  cancelledBy?: Maybe<UserType>;
  cancelledByUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateCancelled?: Maybe<Scalars['DateTime']['output']>;
  dateCollected?: Maybe<Scalars['DateTime']['output']>;
  dateInvalidated?: Maybe<Scalars['DateTime']['output']>;
  datePrinted?: Maybe<Scalars['DateTime']['output']>;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  dateReceived?: Maybe<Scalars['DateTime']['output']>;
  dateRetrievedFromStorage?: Maybe<Scalars['DateTime']['output']>;
  dateStored?: Maybe<Scalars['DateTime']['output']>;
  dateSubmitted?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  internalUse: Scalars['Boolean']['output'];
  invalidatedBy?: Maybe<UserType>;
  invalidatedByUid?: Maybe<Scalars['String']['output']>;
  metadataSnapshot?: Maybe<Scalars['JSONScalar']['output']>;
  parent?: Maybe<SampleType>;
  parentId?: Maybe<Scalars['String']['output']>;
  printed?: Maybe<Scalars['Boolean']['output']>;
  printedBy?: Maybe<UserType>;
  printedByUid?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  profiles: Array<ProfileType>;
  publishedBy?: Maybe<UserType>;
  publishedByUid?: Maybe<Scalars['String']['output']>;
  qcLevel?: Maybe<QcLevelType>;
  qcLevelUid?: Maybe<Scalars['String']['output']>;
  qcSet?: Maybe<QcSetType>;
  qcSetUid?: Maybe<Scalars['String']['output']>;
  receivedBy?: Maybe<UserType>;
  receivedByUid?: Maybe<Scalars['String']['output']>;
  rejectionReasons?: Maybe<Array<RejectionReasonType>>;
  sampleId: Scalars['String']['output'];
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  storageContainer?: Maybe<StorageContainerType>;
  storageContainerUid?: Maybe<Scalars['String']['output']>;
  storageSlot?: Maybe<Scalars['String']['output']>;
  storageSlotIndex?: Maybe<Scalars['Int']['output']>;
  storedBy?: Maybe<UserType>;
  storedByUid?: Maybe<Scalars['String']['output']>;
  submittedBy?: Maybe<UserType>;
  submittedByUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  verifiedBy?: Maybe<UserType>;
  verifiedByUid?: Maybe<Scalars['String']['output']>;
};

export type ShipmentCursorPage = {
  __typename?: 'ShipmentCursorPage';
  edges?: Maybe<Array<ShipmentEdge>>;
  items?: Maybe<Array<ShipmentType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Scalars['String']['output'];
  node: ShipmentType;
};

export type ShipmentInputType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  courier: Scalars['String']['input'];
  laboratoryUid?: InputMaybe<Scalars['String']['input']>;
};

export type ShipmentListingType = {
  __typename?: 'ShipmentListingType';
  shipments?: Maybe<Array<ShipmentType>>;
};

export type ShipmentManageSamplesInput = {
  action: Scalars['String']['input'];
  samples: Array<ReferenceSampleInput>;
};

export type ShipmentResponse = OperationError | ShipmentType;

export type ShipmentType = {
  __typename?: 'ShipmentType';
  assignedCount?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  courier?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSONScalar']['output']>;
  dateDispatched?: Maybe<Scalars['DateTime']['output']>;
  dateFinalised?: Maybe<Scalars['DateTime']['output']>;
  dateRecalled?: Maybe<Scalars['DateTime']['output']>;
  dateReceived?: Maybe<Scalars['DateTime']['output']>;
  dateRejected?: Maybe<Scalars['DateTime']['output']>;
  dispatchedBy?: Maybe<UserType>;
  dispatchedByUid?: Maybe<Scalars['String']['output']>;
  finalisedBy?: Maybe<UserType>;
  finalisedByUid?: Maybe<Scalars['String']['output']>;
  incoming: Scalars['Boolean']['output'];
  jsonContent?: Maybe<Scalars['JSONScalar']['output']>;
  laboratory?: Maybe<ReferralLaboratoryType>;
  laboratoryUid?: Maybe<Scalars['String']['output']>;
  pdfContent?: Maybe<Scalars['BytesScalar']['output']>;
  recalledBy?: Maybe<UserType>;
  recalledByUid?: Maybe<Scalars['String']['output']>;
  receivedBy?: Maybe<UserType>;
  receivedByUid?: Maybe<Scalars['String']['output']>;
  rejectedBy?: Maybe<UserType>;
  rejectedByUid?: Maybe<Scalars['String']['output']>;
  samples?: Maybe<Array<SampleType>>;
  shipmentId?: Maybe<Scalars['String']['output']>;
  shippedSamples?: Maybe<Array<ShippedSampleType>>;
  state?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type ShipmentUpdateInputType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  courier: Scalars['String']['input'];
  laboratoryUid?: InputMaybe<Scalars['String']['input']>;
};

export type ShipmentsResponse = OperationError | ShipmentListingType;

export type ShippedSampleType = {
  __typename?: 'ShippedSampleType';
  extSampleId?: Maybe<Scalars['String']['output']>;
  extSampleUid?: Maybe<Scalars['String']['output']>;
  resultNotified?: Maybe<Scalars['Boolean']['output']>;
  sample: SampleType;
  sampleUid: Scalars['String']['output'];
  shipment: ShipmentType;
  shipmentUid: Scalars['String']['output'];
};

export type StockAdjustmentCursorPage = {
  __typename?: 'StockAdjustmentCursorPage';
  edges?: Maybe<Array<StockAdjustmentEdge>>;
  items?: Maybe<Array<StockAdjustmentType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StockAdjustmentEdge = {
  __typename?: 'StockAdjustmentEdge';
  cursor: Scalars['String']['output'];
  node: StockAdjustmentType;
};

export type StockAdjustmentInputType = {
  adjust: Scalars['Int']['input'];
  adjustmentType: Scalars['String']['input'];
  productUid: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  stockLotUid: Scalars['String']['input'];
};

export type StockAdjustmentResponse = OperationError | StockAdjustmentType;

export type StockAdjustmentType = {
  __typename?: 'StockAdjustmentType';
  adjust?: Maybe<Scalars['Int']['output']>;
  adjustmentBy?: Maybe<UserType>;
  adjustmentByUid?: Maybe<Scalars['String']['output']>;
  adjustmentDate?: Maybe<Scalars['String']['output']>;
  adjustmentFor?: Maybe<UserType>;
  adjustmentForUid?: Maybe<Scalars['String']['output']>;
  adjustmentType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  product?: Maybe<StockItemVariantType>;
  productUid?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  stockLot?: Maybe<StockLotType>;
  stockLotUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockCategoryInputType = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type StockCategoryResponse = OperationError | StockCategoryType;

export type StockCategoryType = {
  __typename?: 'StockCategoryType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockItemCursorPage = {
  __typename?: 'StockItemCursorPage';
  edges?: Maybe<Array<StockItemEdge>>;
  items?: Maybe<Array<StockItemType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StockItemEdge = {
  __typename?: 'StockItemEdge';
  cursor: Scalars['String']['output'];
  node: StockItemType;
};

export type StockItemInputType = {
  categoryUid?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  hazardUid?: InputMaybe<Scalars['String']['input']>;
  maximumLevel?: InputMaybe<Scalars['Int']['input']>;
  minimumLevel?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type StockItemResponse = OperationError | StockItemType;

export type StockItemType = {
  __typename?: 'StockItemType';
  category?: Maybe<StockCategoryType>;
  categoryUid?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hazard?: Maybe<HazardType>;
  hazardUid?: Maybe<Scalars['String']['output']>;
  maximumLevel?: Maybe<Scalars['Int']['output']>;
  minimumLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<StockItemVariantType>>;
};

export type StockItemVariantCursorPage = {
  __typename?: 'StockItemVariantCursorPage';
  edges?: Maybe<Array<StockItemVariantType>>;
  items?: Maybe<Array<StockItemVariantType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StockItemVariantEdge = {
  __typename?: 'StockItemVariantEdge';
  cursor: Scalars['String']['output'];
  node: StockItemVariantType;
};

export type StockItemVariantInputType = {
  description: Scalars['String']['input'];
  maximumLevel?: InputMaybe<Scalars['Int']['input']>;
  minimumLevel?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type StockItemVariantResponse = OperationError | StockItemVariantType;

export type StockItemVariantType = {
  __typename?: 'StockItemVariantType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  maximumLevel?: Maybe<Scalars['Int']['output']>;
  minimumLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  stockItem?: Maybe<StockItemType>;
  stockItemUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockLotType = {
  __typename?: 'StockLotType';
  expiryDate: Scalars['DateTime']['output'];
  lotNumber: Scalars['String']['output'];
  product?: Maybe<StockItemVariantType>;
  productUid: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
};

export type StockOrderApprovalInputType = {
  remarks: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type StockOrderCursorPage = {
  __typename?: 'StockOrderCursorPage';
  edges?: Maybe<Array<StockOrderEdge>>;
  items?: Maybe<Array<StockOrderType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StockOrderEdge = {
  __typename?: 'StockOrderEdge';
  cursor: Scalars['String']['output'];
  node: StockOrderType;
};

export type StockOrderInputType = {
  departmentUid?: InputMaybe<Scalars['String']['input']>;
  orderProducts: Array<StockOrderProductLineInputType>;
};

export type StockOrderLineType = {
  __typename?: 'StockOrderLineType';
  orderProducts: Array<StockOrderProductType>;
  stockOrder: StockOrderType;
};

export type StockOrderProductLineInputType = {
  price?: Scalars['Float']['input'];
  productUid: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  stockLotUid: Scalars['String']['input'];
};

export type StockOrderProductType = {
  __typename?: 'StockOrderProductType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  order?: Maybe<StockOrderType>;
  orderUid?: Maybe<Scalars['String']['output']>;
  product?: Maybe<StockItemVariantType>;
  productUid?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  stockLot?: Maybe<StockLotType>;
  stockLotUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockOrderResponse = OperationError | StockOrderLineType | StockOrderType;

export type StockOrderType = {
  __typename?: 'StockOrderType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  fulfilledBy?: Maybe<UserType>;
  fulfilledByUid?: Maybe<Scalars['String']['output']>;
  orderBy?: Maybe<UserType>;
  orderByUid?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockPackagingType = {
  __typename?: 'StockPackagingType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockProductInventoryType = {
  __typename?: 'StockProductInventoryType';
  product?: Maybe<StockItemVariantType>;
  productUid: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  stockLot?: Maybe<StockLotType>;
  stockLotUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type StockReceiptInputType = {
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  lotNumber: Scalars['String']['input'];
  packageFactor: Scalars['Int']['input'];
  packagesReceived: Scalars['Int']['input'];
  productUid: Scalars['String']['input'];
  quantityReceived: Scalars['Int']['input'];
  receiptByUid: Scalars['String']['input'];
  receiptDate?: InputMaybe<Scalars['DateTime']['input']>;
  receiptType: Scalars['String']['input'];
  singlesReceived: Scalars['Int']['input'];
  supplierUid: Scalars['String']['input'];
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  unitUid: Scalars['String']['input'];
};

export type StockReceiptType = {
  __typename?: 'StockReceiptType';
  packageFactor?: Maybe<Scalars['Int']['output']>;
  packagesReceived?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<StockItemVariantType>;
  productUid?: Maybe<Scalars['String']['output']>;
  quantityReceived?: Maybe<Scalars['Int']['output']>;
  receiptBy?: Maybe<UserType>;
  receiptByUid: Scalars['String']['output'];
  receiptDate: Scalars['DateTime']['output'];
  receiptType: Scalars['String']['output'];
  singlesReceived?: Maybe<Scalars['Int']['output']>;
  stockLot?: Maybe<StockLotType>;
  stockLotUid?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<SupplierType>;
  supplierUid?: Maybe<Scalars['String']['output']>;
  totalPrice: Scalars['Float']['output'];
  uid: Scalars['String']['output'];
  unit?: Maybe<StockUnitType>;
  unitPrice: Scalars['Float']['output'];
  unitUid: Scalars['String']['output'];
};

export type StockTransactionCursorPage = {
  __typename?: 'StockTransactionCursorPage';
  edges?: Maybe<Array<StockTransactionEdge>>;
  items?: Maybe<Array<StockTransactionType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StockTransactionEdge = {
  __typename?: 'StockTransactionEdge';
  cursor: Scalars['String']['output'];
  node: StockTransactionType;
};

export type StockTransactionType = {
  __typename?: 'StockTransactionType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateIssued?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<DepartmentType>;
  departmentUid?: Maybe<Scalars['String']['output']>;
  issued?: Maybe<Scalars['Int']['output']>;
  issuedTo?: Maybe<UserType>;
  issuedToUid?: Maybe<Scalars['String']['output']>;
  product?: Maybe<StockItemVariantType>;
  productUid?: Maybe<Scalars['String']['output']>;
  transactionBy?: Maybe<UserType>;
  transactionByUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StockUnitInputType = {
  name: Scalars['String']['input'];
};

export type StockUnitResponse = OperationError | StockUnitType;

export type StockUnitType = {
  __typename?: 'StockUnitType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  synonyms: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StorageContainerInputType = {
  cols?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grid?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  rowWise?: InputMaybe<Scalars['Boolean']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  storageSectionUid: Scalars['String']['input'];
};

export type StorageContainerResponse = OperationError | StorageContainerType;

export type StorageContainerType = {
  __typename?: 'StorageContainerType';
  cols?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  grid?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  rowWise?: Maybe<Scalars['Boolean']['output']>;
  rows?: Maybe<Scalars['Int']['output']>;
  slots?: Maybe<Scalars['Int']['output']>;
  storageSection?: Maybe<StorageSectionType>;
  storageSectionUid: Scalars['String']['output'];
  storedCount?: Maybe<Scalars['Int']['output']>;
  tag: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StorageLocationInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  storeRoomUid: Scalars['String']['input'];
};

export type StorageLocationResponse = OperationError | StorageLocationType;

export type StorageLocationType = {
  __typename?: 'StorageLocationType';
  children?: Maybe<Array<StorageSectionType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  storeRoom?: Maybe<StoreRoomType>;
  storeRoomUid: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StorageSectionInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  storageLocationUid: Scalars['String']['input'];
};

export type StorageSectionResponse = OperationError | StorageSectionType;

export type StorageSectionType = {
  __typename?: 'StorageSectionType';
  children?: Maybe<Array<StorageContainerType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  storageLocation?: Maybe<StorageLocationType>;
  storageLocationUid: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StoreRoomInputType = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type StoreRoomResponse = OperationError | StoreRoomType;

export type StoreRoomType = {
  __typename?: 'StoreRoomType';
  children?: Maybe<Array<StorageLocationType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type StoreSampleResponse = OperationError | StoredSamplesType;

export type StoreSamplesInputType = {
  sampleUid: Scalars['String']['input'];
  storageContainerUid: Scalars['String']['input'];
  storageSlot: Scalars['String']['input'];
  storageSlotIndex: Scalars['Int']['input'];
};

export type StoredSamplesType = {
  __typename?: 'StoredSamplesType';
  samples: Array<SampleType>;
};

export type Subscription = {
  __typename?: 'Subscription';
  latestActivity: ActivityStreamType;
  streamAll: ActivityStreamType;
  streamProcesses: ActivityProcessType;
};

/** Union of possible outcomes when deleting some object */
export type SuccessErrorResponse = OperationError | OperationSuccess;

export type SupplierInputType = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SupplierResponse = OperationError | SupplierType;

export type SupplierType = {
  __typename?: 'SupplierType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type TestBillCursorPage = {
  __typename?: 'TestBillCursorPage';
  edges?: Maybe<Array<TestBillEdge>>;
  items?: Maybe<Array<TestBillType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TestBillEdge = {
  __typename?: 'TestBillEdge';
  cursor: Scalars['String']['output'];
  node: TestBillType;
};

export type TestBillInvoiceType = {
  __typename?: 'TestBillInvoiceType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  jsonContent?: Maybe<Scalars['JSONScalar']['output']>;
  pdfContent?: Maybe<Scalars['BytesScalar']['output']>;
  testBill: TestBillType;
  testBillUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type TestBillTransactionResponse = OperationError | TestBillTransactionType;

export type TestBillTransactionType = {
  __typename?: 'TestBillTransactionType';
  actionMessage: Scalars['String']['output'];
  actionRequired: Scalars['Boolean']['output'];
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  message: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  processed: Scalars['Boolean']['output'];
  testBill: TestBillType;
  testBillUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type TestBillType = {
  __typename?: 'TestBillType';
  billId: Scalars['String']['output'];
  client: ClientType;
  clientUid: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  jsonContent?: Maybe<Scalars['JSONScalar']['output']>;
  orders?: Maybe<Array<AnalysisRequestType>>;
  partial: Scalars['Boolean']['output'];
  patient: PatientType;
  patientUid: Scalars['String']['output'];
  toConfirm: Scalars['Boolean']['output'];
  totalCharged: Scalars['Float']['output'];
  totalPaid: Scalars['Float']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type UnitInputType = {
  isSiUnit: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type UnitResponse = OperationError | UnitType;

export type UnitType = {
  __typename?: 'UnitType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type UnknownObjectType = {
  __typename?: 'UnknownObjectType';
  message: Scalars['String']['output'];
};

export type UpdatedGroupPerms = {
  __typename?: 'UpdatedGroupPerms';
  group: GroupType;
  permission: PermissionType;
};

export type UpdatedGroupPermsResponse = OperationError | UpdatedGroupPerms;

export type UserCursorPage = {
  __typename?: 'UserCursorPage';
  edges?: Maybe<Array<UserEdge>>;
  items?: Maybe<Array<UserType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: UserType;
};

export type UserPreferenceType = {
  __typename?: 'UserPreferenceType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserPreferenceType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  departments?: Maybe<Array<DepartmentType>>;
  expandedMenu?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserPreferenceType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
};

export type UserResponse = OperationError | UserType;

export type UserType = {
  __typename?: 'UserType';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  businessPhone?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  defaultRoute?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<GroupType>>;
  isActive: Scalars['Boolean']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  loginRetry: Scalars['Int']['output'];
  mobilePhone?: Maybe<Scalars['String']['output']>;
  preference?: Maybe<UserPreferenceType>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type VoucherCodeInput = {
  code: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  usageLimit: Scalars['Int']['input'];
  voucherUid: Scalars['String']['input'];
};

export type VoucherCodeResponse = OperationError | VoucherCodeType;

export type VoucherCodeType = {
  __typename?: 'VoucherCodeType';
  code: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  usageLimit: Scalars['Int']['output'];
  used: Scalars['Int']['output'];
  voucher: VoucherType;
  voucherUid: Scalars['String']['output'];
};

export type VoucherCustomerType = {
  __typename?: 'VoucherCustomerType';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  patient: PatientType;
  patientUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  voucherCode: VoucherCodeType;
  voucherCodeUid: Scalars['String']['output'];
};

export type VoucherInput = {
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  oncePerCustomer: Scalars['Boolean']['input'];
  oncePerOrder: Scalars['Boolean']['input'];
  startDate: Scalars['DateTime']['input'];
  usageLimit: Scalars['Int']['input'];
};

export type VoucherResponse = OperationError | VoucherType;

export type VoucherType = {
  __typename?: 'VoucherType';
  codes?: Maybe<Array<VoucherCodeType>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['String']['output'];
  name: Scalars['String']['output'];
  oncePerCustomer: Scalars['Boolean']['output'];
  oncePerOrder: Scalars['Boolean']['output'];
  startDate: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  usageLimit: Scalars['Int']['output'];
  used: Scalars['Int']['output'];
};

export type WorkSheetCursorPage = {
  __typename?: 'WorkSheetCursorPage';
  edges?: Maybe<Array<WorkSheetEdge>>;
  items?: Maybe<Array<WorkSheetType>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkSheetEdge = {
  __typename?: 'WorkSheetEdge';
  cursor: Scalars['String']['output'];
  node: WorkSheetType;
};

export type WorkSheetResponse = OperationError | WorkSheetType;

export type WorkSheetTemplateResponse = OperationError | WorkSheetTemplateType;

export type WorkSheetTemplateType = {
  __typename?: 'WorkSheetTemplateType';
  analysis?: Maybe<AnalysisType>;
  analysisUid?: Maybe<Scalars['String']['output']>;
  cols?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instrument?: Maybe<InstrumentType>;
  instrumentUid?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numberOfSamples?: Maybe<Scalars['Int']['output']>;
  qcLevels?: Maybe<Array<QcLevelType>>;
  qcTemplate?: Maybe<QcTemplateType>;
  qcTemplateUid?: Maybe<Scalars['String']['output']>;
  reserved?: Maybe<Scalars['JSONScalar']['output']>;
  rowWise: Scalars['Boolean']['output'];
  rows?: Maybe<Scalars['Int']['output']>;
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  worksheetType: Scalars['String']['output'];
};

export type WorkSheetType = {
  __typename?: 'WorkSheetType';
  analysis?: Maybe<AnalysisType>;
  analysisResults?: Maybe<Array<AnalysisResultType>>;
  analysisUid?: Maybe<Scalars['String']['output']>;
  analyst?: Maybe<UserType>;
  analystUid?: Maybe<Scalars['String']['output']>;
  assignedCount: Scalars['Int']['output'];
  cols?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<UserType>;
  createdByUid?: Maybe<Scalars['String']['output']>;
  dateSubmitted?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  instrument?: Maybe<InstrumentType>;
  instrumentUid?: Maybe<Scalars['String']['output']>;
  numberOfSamples?: Maybe<Scalars['Int']['output']>;
  reserved?: Maybe<Scalars['JSONScalar']['output']>;
  rowWise: Scalars['Boolean']['output'];
  rows?: Maybe<Scalars['Int']['output']>;
  sampleType?: Maybe<SampleTypeTyp>;
  sampleTypeUid?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  submittedBy?: Maybe<UserType>;
  submittedByUid?: Maybe<Scalars['String']['output']>;
  template?: Maybe<WorkSheetTemplateType>;
  templateUid?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<UserType>;
  updatedByUid?: Maybe<Scalars['String']['output']>;
  verifiedBy?: Maybe<UserType>;
  verifiedByUid?: Maybe<Scalars['String']['output']>;
  worksheetId: Scalars['String']['output'];
  worksheetType: Scalars['String']['output'];
};

export type WorkSheetTypeSampleTypeAnalysisResultTypeReportMetaTypeUnknownObjectType = AnalysisResultType | ReportMetaType | SampleType | UnknownObjectType | WorkSheetType;

export type WorkSheetsResponse = OperationError | WorksheetListingType;

export type WorksheetListingType = {
  __typename?: 'WorksheetListingType';
  worksheets?: Maybe<Array<WorkSheetType>>;
};

export type WorksheetTemplateInputType = {
  analysisUid?: InputMaybe<Scalars['String']['input']>;
  cols?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  instrumentUid?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberOfSamples?: InputMaybe<Scalars['Int']['input']>;
  profiles?: InputMaybe<Array<Scalars['String']['input']>>;
  qcTemplateUid?: InputMaybe<Scalars['String']['input']>;
  reserved?: InputMaybe<Array<ReservedInputType>>;
  rowWise?: InputMaybe<Scalars['Boolean']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sampleTypeUid: Scalars['String']['input'];
  worksheetType?: InputMaybe<Scalars['String']['input']>;
};
