import { IUser } from './auth';
import { IClient, IClientContact } from './client';
import { IPatient } from './patient';
import { IInstrument, ILaboratoryInstrument, IMethod, IUnit, IDepartment } from './setup';
import { IStorageContainer } from './storage';


export interface ICodingStandard {
    uid?: string;
    name?: string;
    description?: string;
}

export interface ISampleType {
    uid?: string;
    name?: string;
    abbr?: string;
    description?: string;
    active?: boolean;
}

export interface IAnalysisService {
    uid: string;
    name?: string;
    keyword?: string;
    description?: string;
    unitUid?: string;
    unit?: IUnit;
    departmentUid?: string;
    sampleTypes?: ISampleType[] | number[];
    profiles?: IAnalysisProfile[];
    category?: IAnalysisCategory;
    resultOptions?: IResultOption[];
    interims?: IAnalysisInterim[];
    correctionFactors?: IAnalysisCorrectionFactor[];
    specifications?: IAnalysisSpecification[];
    detectionLimits?: IAnalysisDetectionLimit[];
    uncertainties?: IAnalysisUncertainty[];
    instruments?: IInstrument[];
    methods?: IMethod[] | number[];
    categoryUid?: string;
    sortKey?: number;
    active?: boolean;
    internalUse?: boolean;
    tatLengthMinutes: number;
    precision: number;
    requiredVerifications: number;
    selfVerification: boolean;
    checked?: boolean;
}

export interface IAnalysisResult {
    uid?: string;
    analysisUid?: string;
    analysis: IAnalysisService;
    laboratoryInstrumentUid?: string;
    laboratoryInstrument?: ILaboratoryInstrument;
    methodUid?: string;
    method?: IMethod;
    worksheetPosition?: number;
    sampleUid?: string;
    sample?: ISample;
    status?: string;
    result?: string;
    retest?: boolean;
    reportable?: boolean;
    submittedBy?: IUser;
    dateSubmitted?: string;
    verifiedBy?: IUser[];
    dateVerified?: string;
    dueDate?: string;
    editResult?: string;
    createdAt?: string;
    checked?: boolean;
    editable?: boolean;
}

export interface IResultMutation {
    uid: string;
    resultUid: string;
    before: string;
    after: string;
    mutation: string;
    date?: string;
    createdByUid?: string;
    createdBy?: IUser;
  } 

export interface IAnalysisCategory {
    uid?: string;
    name?: string;
    description?: string;
    departmentUid?: string;
    department?: IDepartment;
    active?: boolean;
}

export interface IAnalysisProfile {
    uid?: string;
    name?: string;
    description?: string;
    keyword?: string;
    departmentUid?: string;
    analyses?: IAnalysisService[] | string[];
    sampleTypes?: ISampleType[] | string[];
    active?: boolean;
}

export interface IAnalysisTemplate {
    uid?: string;
    name?: string;
    description?: string;
    departmentUid?: string;
    analyses?: IAnalysisService[] | string[];
    active?: boolean;
}

export interface IQCRequest {
    qcTemplate?: IQCTemplate;
    qcLevels?: IQCLevel[];
    analysisProfiles?: IAnalysisProfile[]; 
    analysisServices?: IAnalysisService[];
}

export interface IQCLevel {
    uid?: string;
    level?: string;
}

export interface IQCTemplate {
    uid?: string;
    name?: string;
    description?: string;
    qcLevels?: IQCLevel[];
    departments?: any[];
    category?: string;
}

export interface IResultOption {
    uid?: string;
    analysisUid?: string;
    optionKey?: number;
    value?: string;
    sampleTypes?: ISampleType[];
}

export interface ISample {
    uid?: string;
    sampleId?: string;
    sampleType?: ISampleType | undefined;
    profiles?: IAnalysisProfile[];
    analyses?: IAnalysisService[];
    assigned?: boolean;
    qcLevel?: IQCLevel;
    analysisRequest?: IAnalysisRequest;
    analysisResults?: IAnalysisResult[];
    rejectionReasons?: IRejectionReason[];
    status?: string;
    priority?: number;
    checked?: boolean;
    dateReceived?: string;
    receivedBy?: any;
    dateCollected?: string;
    dateSubmitted?: string;
    submittedBy?: any;
    dateVerified?: string;
    verifiedBy?: any;
    datePublished?: string;
    datePrinted?: string;
    printedBy?: any;
    dateInvalidated?: string;
    invalidatedBy?: any;
    dateCancelled?: string;
    cancelledBy?: any;
    dueDate?: string;
    dateStored?: string;
    storageContainerUid: string;
    storageContainer: IStorageContainer;
    storageSlotIndex: number;
    storageSlot: string;
    createdByUid?: string;
    createdBy?: any;
    createdAt?: string;
    updatedByUid?: string;
    updatedBy?: any;
    updatedAt?: string;
}

export interface IAnalysisRequest {
    uid?: string;
    clinicalData?: string;
    patient?: IPatient;
    cientUid?: string;
    client?: IClient;
    clientContactUid?: string;
    clientContact?: IClientContact;
    clientName?: string;
    samples?: ISample[];
    requestId?: string;
    clientRequestId?: string;
    priority?: number;
    createdAt?: Date;
}

export interface IQCSet {
    uid?: string;
    name?: string;
    samples?: ISample[];
    analytes?: IAnalysisService;
    createdByUid?: string;
    createdBy?: any;
    createdAt?: string;
    updatedByUid?: string;
    updatedBy?: any;
    updatedAt?: string;
}

export interface IRejectionReason {
    uid?: string;
    reason?: string;
}

export interface IAnalysisInterim {
    uid?: string;
    key?: number;
    value?: string;
    analysisUid?: string;
    instrumentUid?: string;
}

export interface IAnalysisCorrectionFactor {
    uid?: string;
    factor?: string;
    analysisUid?: string;
    instrumentUid?: string;
    methodUid?: string;
}

export interface IAnalysisDetectionLimit {
    uid?: string;
    lowerLimit?: number;
    upperLimit?: number;
    analysisUid?: string;
    instrumentUid?: string;
    methodUid?: string;
}

export interface IAnalysisUncertainty {
    uid?: string;
    min?: number;
    max?: number;
    value?: number;
    analysisUid?: string;
    instrumentUid?: string;
    methodUid?: string;
}

export interface IAnalysisSpecification {
    uid?: string;
    analysisUid?: string;
    unitUid?: string;
    unit?: IUnit[];
    min?: number;
    max?: number;
    minWarn?: number;
    maxWarn?: number;
    minReport?: string;
    maxReport?: string;
    warnValues?: string;
    warnReport?: string;
    gender?: string;
    ageMin?: number;
    ageMax?: number;
    methodUid?: string;
}
