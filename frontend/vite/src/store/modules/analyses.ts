import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { parseEdgeNodeToList } from '../../utils'
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_ANALYSES_SERVICES, GET_ALL_ANALYSES_PROFILES, GET_ALL_ANALYSES_CATEGORIES,
  GET_ALL_ANALYSES_PROFILES_AND_SERVICES, GET_ALL_QC_TEMPLATES, GET_ALL_QC_LEVELS
} from '../../graphql/analyses.queries';
import { ISampleType } from './samples';
import { IPatient } from './patients';
import { IClient } from '../common';
import { Client } from './clients';

export interface IAnalysisCategory {
  uid?: string;
  name?: string;
  description?: string;
  active?: boolean;
}

export class AnalysisCategory implements IAnalysisCategory {
  constructor(
    public uid: string,
    public name: string,
    public description: string,
    public active: boolean,
  ) {
    this.active = true;
  }
}


export interface IResultOption {
  uid?: string;
  analysisUid?: string;
  optionKey?: string;
  value?: string;
}

export interface IAnalysisService {
  uid?: string;
  name?: string;
  keyword?: string;
  description?: string;
  profiles?: IAnalysisProfile[];
  category?: IAnalysisCategory;
  resultoptions?: IResultOption[],
  categoryUid?: string,
  sortKey?: number;
  active?: boolean;
  internalUse?: boolean;
  checked?: boolean;
}

export class AnalysisService implements IAnalysisService {
  constructor(
    public uid: string,
    public name: string,
    public description: string,
    public keyword: string,
    public profiles: IAnalysisProfile[],
    public category: IAnalysisCategory,
    public resultoptions: IResultOption[],
    public categoryUid: string,
    public sortKey: number,
    public active: boolean,
    public internalUse: boolean,
    public checked: boolean,
  ) {
    this.active = true;
  }
}

export interface IAnalysisProfile {
  uid?: string;
  name?: string;
  description?: string;
  keyword?: string,
  analyses?: IAnalysisService[];
  active?: boolean;
}

export class AnalysisProfile implements IAnalysisProfile {
  constructor(
    public uid: string,
    public name: string,
    public description: string,
    public keyword: string,
    public analyses: IAnalysisService[],
    public active: boolean,
  ) {
    this.active = true;
  }
}

export interface ISample {
  sampleType?: ISampleType; 
  profiles?: IAnalysisProfile[];
  analyses?: IAnalysisService[];
}

export class Sample implements ISample {
  constructor(
    public sampleType: ISampleType,
    public profiles: IAnalysisProfile[],
    public analyses: IAnalysisService[],
  ){
    this.analyses = [];
    this.profiles = [];
  }
}

export interface IAnalysisRequest {
  patient?: IPatient; 
  client?: IClient;  
  samples?: ISample[];
  clientRequestId?: string;
  priority?: number;
  createdAt?: Date;
}

export class AnalysisRequest implements IAnalysisRequest {
  constructor(
    public patient: IPatient, 
    public client: IClient, 
    public samples: ISample[],
    public clientRequestId: string,
    public priority: number,
    public createdAt: Date,
  ){
    this.samples = [new Sample()];
    this.client = new Client as IClient;
  }
}


export interface IQCRequest {
  qcTemplateUid?: string;
  qcLevels?: string[]; // uids
  analysisProfiles?: string[]; // uids
  analysisServices?: string[]; // uids
}

export class QCRequest implements IQCRequest {
  constructor(
    public qcTemplateUid: string, 
    public qcLevels: string[], 
    public analysisProfiles: string[],
    public analysisServices: string[],
  ){
    this.qcLevels = []
    this.analysisProfiles = []
    this.analysisServices = []
  }
}


export interface IQCLevel {
  uid?: string;
  level?: string; 
}

export class QCLevel implements IQCLevel {
  constructor(
    public uid: string,
    public level: string, 
  ){
  }
}


export interface IQCTemplate {
  uid?: string;
  name?: string; 
  description?: string;  
  qcLevels?: IQCLevel[];
  departments?: any[];
}

export class QCTemplate implements IQCTemplate {
  constructor(
    public uid: string,
    public name: string, 
    public description: string, 
    public qcLevels: IQCLevel[],
    public departments: any[],
  ){
    this.qcLevels = [];
  }
}


// state contract
export interface IState {
  analysesCategories: IAnalysisCategory[];
  analysesServices: IAnalysisService[];
  analysesProfiles: IAnalysisProfile[];
  qcLevels: IQCLevel[];
  qcTemplates: IQCTemplate[];
}

export const initialState = () => {
  return <IState>{
    analysesCategories: [],
    analysesServices: [],
    analysesProfiles: [],
    qcLevels: [],
    qcTemplates: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',

  SET_ANALYSES_CATEGORIES = 'SET_ANALYSES_CATEGORIES',
  ADD_ANALYSES_CATEGORY = 'ADD_ANALYSES_CATEGORY',
  UPDATE_ANALYSES_CATEGORY = 'UPDATE_ANALYSES_CATEGORY',

  SET_ANALYSES_SERVICES = 'SET_ANALYSES_SERVICES',
  ADD_ANALYSES_SERVICE = 'ADD_ANALYSES_SERVICE',
  UPDATE_ANALYSES_SERVICE = 'UPDATE_ANALYSES_SERVICE',

  SET_ANALYSES_PROFILES = 'SET_ANALYSES_PROFILES',
  ADD_ANALYSES_PROFILE = 'ADD_ANALYSES_PROFILE',
  UPDATE_ANALYSES_PROFILE = 'UPDATE_ANALYSES_PROFILE',
  
  SET_QC_LEVELS = 'SET_QC_LEVELS',
  ADD_QC_LEVEL = 'ADD_QC_LEVEL',
  UPDATE_QC_LEVEL = 'UPDATE_QC_LEVEL',
  
  SET_ANALYSES_QC_TEMPLATES = 'SET_ANALYSES_QC_TEMPLATES',
  ADD_QC_TEMPLATE = 'ADD_QC_TEMPLATE',
  UPDATE_QC_TEMPLATE = 'UPDATE_QC_TEMPLATE',

  SET_RESULT_OPTIONS = 'SET_RESULT_OPTIONS',
  ADD_RESULT_OPTION = 'ADD_RESULT_OPTION',
  UPDATE_RESULT_OPTION = 'UPDATE_RESULT_OPTION',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',

  FETCH_ANALYSES_CATEGORIES = 'FETCH_ANALYSES_CATEGORIES',
  ADD_ANALYSES_CATEGORY = 'ADD_ANALYSES_CATEGORY',
  UPDATE_ANALYSES_CATEGORY = 'UPDATE_ANALYSES_CATEGORY',

  FETCH_ANALYSES_SERVICES = 'FETCH_ANALYSES_SERVICES',
  ADD_ANALYSES_SERVICE = 'ADD_ANALYSES_SERVICE',
  UPDATE_ANALYSES_SERVICE = 'UPDATE_ANALYSES_SERVICE',

  FETCH_ANALYSES_PROFILES = 'FETCH_ANALYSES_PROFILES',
  FETCH_ANALYSES_PROFILES_AND_SERVICES = 'FETCH_ANALYSES_PROFILES_AND_SERVICES',
  ADD_ANALYSES_PROFILE = 'ADD_ANALYSES_PROFILE',
  UPDATE_ANALYSES_PROFILE = 'UPDATE_ANALYSES_PROFILE',

  FETCH_QC_LEVELS = 'FETCH_QC_LEVELS',
  ADD_QC_LEVEL = 'ADD_QC_LEVEL',
  UPDATE_QC_LEVEL = 'UPDATE_QC_LEVEL',

  FETCH_ANALYSES_QC_TEMPLATES = 'FETCH_ANALYSES_QC_TEMPLATES',
  ADD_QC_TEMPLATE = 'ADD_QC_TEMPLATE',
  UPDATE_QC_TEMPLATE = 'UPDATE_QC_TEMPLATE',

  FETCH_SAMPLES = 'FETCH_SAMPLES',

  FETCH_RESULT_OPTIONS = 'FETCH_RESULT_OPTIONS',
  ADD_RESULT_OPTION = 'ADD_RESULT_OPTION',
  UPDATE_RESULT_OPTION = 'UPDATE_RESULT_OPTION',
}

function groupByCategory(analyses: IAnalysisService[]): any {
    const profiled = analyses?.reduce((r: any, obj) => {
    const key = obj.category?.name || 'Un-Categorised';
    r[key] = r[key] || [];
    r[key].push(obj);
    return r;
  }, {});
  return Object.entries(profiled || {}).sort();
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getAnalysesCategories: (state) => state.analysesCategories,
  getAnalysesServices: (state) => groupByCategory(state.analysesServices),
  getAnalysesServicesSimple: (state) => state.analysesServices,
  getAnalysesProfiles: (state) => state.analysesProfiles,
  getQCLevels: (state) => state.qcLevels,
  getQCTemplates: (state) => state.qcTemplates,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  // analysis categories
  [MutationTypes.SET_ANALYSES_CATEGORIES](state: IState, payload: any[]): void {
    state.analysesCategories = [];
    state.analysesCategories = parseEdgeNodeToList(payload)
  },

  [MutationTypes.UPDATE_ANALYSES_CATEGORY](state: IState, payload: IAnalysisCategory): void {
    const index = state.analysesCategories.findIndex(x => x.uid === payload.uid);
    state!.analysesCategories[index] = payload;
  },

  [MutationTypes.ADD_ANALYSES_CATEGORY](state: IState, payload: IAnalysisCategory): void {
    state.analysesCategories.push(payload);
  },

  // analysis services
  [MutationTypes.SET_ANALYSES_SERVICES](state: IState, payload: any[]): void {
    state.analysesServices = [];
    let services =  parseEdgeNodeToList(payload);
    services.forEach((service: IAnalysisService) => {
      service.resultoptions = parseEdgeNodeToList(service?.resultoptions) || [];
      service.profiles = parseEdgeNodeToList(service?.profiles) || [];
    })
    state.analysesServices = services;
  },

  [MutationTypes.UPDATE_ANALYSES_SERVICE](state: IState, payload: IAnalysisService): void {
    const index = state.analysesServices.findIndex(x => x.uid === payload.uid);
    payload.resultoptions = parseEdgeNodeToList(payload?.resultoptions);
    state!.analysesServices[index] = payload;
  },

  [MutationTypes.ADD_ANALYSES_SERVICE](state: IState, payload: IAnalysisService): void {
    payload.resultoptions = parseEdgeNodeToList(payload?.resultoptions);
    state.analysesServices.push(payload);
  },

  // analysis profiles
  [MutationTypes.SET_ANALYSES_PROFILES](state: IState, payload: any[]): void {
    state.analysesProfiles = [];
    let profiles =  parseEdgeNodeToList(payload);
    profiles.forEach((profile: IAnalysisProfile) => {
      profile.analyses = parseEdgeNodeToList(profile?.analyses) || [];
    })
    state.analysesProfiles = profiles;
  },

  [MutationTypes.UPDATE_ANALYSES_PROFILE](state: IState, payload: IAnalysisProfile): void {
    const index = state.analysesProfiles.findIndex(x => x.uid === payload.uid);
    state!.analysesProfiles[index] = payload;
  },

  [MutationTypes.ADD_ANALYSES_PROFILE](state: IState, payload: IAnalysisProfile): void {
    state.analysesProfiles.push(payload);
  },

  // analysis QC Levels
  [MutationTypes.SET_QC_LEVELS](state: IState, payload: any[]): void {
    state.qcLevels = [];
    state.qcLevels = parseEdgeNodeToList(payload);
  },

  [MutationTypes.UPDATE_QC_LEVEL](state: IState, payload: IQCLevel): void {
    const index = state.qcLevels.findIndex(x => x.uid === payload.uid);
    state!.qcLevels[index] = payload;
  },

  [MutationTypes.ADD_QC_LEVEL](state: IState, payload: IQCLevel): void {
    state.qcLevels.push(payload);
  },

  // analysis QC TEMPLATES
  [MutationTypes.SET_ANALYSES_QC_TEMPLATES](state: IState, payload: any[]): void {
    state.qcTemplates = [];
    let templates =  parseEdgeNodeToList(payload);
    templates.forEach((qcTemplate: IQCTemplate) => {
      qcTemplate.qcLevels = parseEdgeNodeToList(qcTemplate?.qcLevels) || [];
      qcTemplate.departments = parseEdgeNodeToList(qcTemplate?.departments) || [];
    })
    state.qcTemplates = templates;
  },

  [MutationTypes.UPDATE_QC_TEMPLATE](state: IState, payload: IQCTemplate): void {
    const index = state.qcTemplates.findIndex(x => x.uid === payload.uid);
    let template = payload;
    template.qcLevels = parseEdgeNodeToList(template?.qcLevels) || [];
    template.departments = parseEdgeNodeToList(template?.departments) || [];
    state!.qcTemplates[index] = template;
  },

  [MutationTypes.ADD_QC_TEMPLATE](state: IState, payload: IQCTemplate): void {
    let template = payload;
    template.qcLevels = parseEdgeNodeToList(template?.qcLevels) || [];
    template.departments = parseEdgeNodeToList(template?.departments) || [];
    state.qcTemplates.push(template);
  },

  // RESULT OPTIONS
  [MutationTypes.UPDATE_RESULT_OPTION](state: IState, payload: any): void {
    console.log(payload);
    state?.analysesServices?.forEach(service => {
      console.log(service?.uid, payload?.analysisUid);
      if (service?.uid == payload?.analysisUid){
        const index = service.resultoptions!.findIndex(ro => ro.uid === payload.uid);
        console.log(service!.resultoptions![index])
        service!.resultoptions![index] = payload;
        console.log(service!.resultoptions![index])
      }
    });
    console.log(state?.analysesServices);
  },

  [MutationTypes.ADD_RESULT_OPTION](state: IState, payload: any): void {
    state?.analysesServices?.forEach(service => {
      if (service?.uid == payload?.analysisUid){
        if(service?.resultoptions){
          service?.resultoptions?.push(payload);
        } else {
          service!.resultoptions = [payload];
        }
      }
    });
  },

};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  // analysis categories
  async [ActionTypes.FETCH_ANALYSES_CATEGORIES]({ commit }){
    await useQuery({ query: GET_ALL_ANALYSES_CATEGORIES })
          .then(payload => commit(MutationTypes.SET_ANALYSES_CATEGORIES, payload.data.value.analysisCategoryAll));
  },

  async [ActionTypes.UPDATE_ANALYSES_CATEGORY]({ commit }, payload ){
    commit(MutationTypes.UPDATE_ANALYSES_CATEGORY, payload.data.updateAnalysisCategory.analysisCategory);
  },

  async [ActionTypes.ADD_ANALYSES_CATEGORY]({ commit }, payload ){
    commit(MutationTypes.ADD_ANALYSES_CATEGORY, payload.data.createAnalysisCategory.analysisCategory);
  },

  // analysis services
  async [ActionTypes.FETCH_ANALYSES_SERVICES]({ commit }){
    await useQuery({ query: GET_ALL_ANALYSES_SERVICES })
          .then(payload => commit(MutationTypes.SET_ANALYSES_SERVICES, payload.data.value.analysisAll));
  },

  async [ActionTypes.UPDATE_ANALYSES_SERVICE]({ commit }, payload ){
    commit(MutationTypes.UPDATE_ANALYSES_SERVICE, payload.data.updateAnalysis.analysis);
  },

  async [ActionTypes.ADD_ANALYSES_SERVICE]({ commit }, payload ){
    commit(MutationTypes.ADD_ANALYSES_SERVICE, payload.data.createAnalysis.analysis);
  },

  // 
  async [ActionTypes.FETCH_ANALYSES_PROFILES_AND_SERVICES]({ commit }){
    await useQuery({ query: GET_ALL_ANALYSES_PROFILES_AND_SERVICES })
          .then(payload => {
            commit(MutationTypes.SET_ANALYSES_PROFILES, payload.data.value.profileAll);
            commit(MutationTypes.SET_ANALYSES_SERVICES, payload.data.value.analysisAll);
          });
  },

  // analysis profiles
  async [ActionTypes.FETCH_ANALYSES_PROFILES]({ commit }){
    await useQuery({ query: GET_ALL_ANALYSES_PROFILES })
          .then(payload => commit(MutationTypes.SET_ANALYSES_PROFILES, payload.data.value.profileAll));
  },

  async [ActionTypes.UPDATE_ANALYSES_PROFILE]({ commit }, payload ){
    commit(MutationTypes.UPDATE_ANALYSES_PROFILE, payload.data.updateProfile.profile);
  },

  async [ActionTypes.ADD_ANALYSES_PROFILE]({ commit }, payload ){
    commit(MutationTypes.ADD_ANALYSES_PROFILE, payload.data.createProfile.profile);
  },

  // QC LEVELS
  async [ActionTypes.FETCH_QC_LEVELS]({ commit }){
    await useQuery({ query: GET_ALL_QC_LEVELS })
          .then(payload => commit(MutationTypes.SET_QC_LEVELS, payload.data.value.qcLevelAll));
  },

  async [ActionTypes.UPDATE_QC_LEVEL]({ commit }, payload ){
    commit(MutationTypes.UPDATE_QC_LEVEL, payload.data.updateQcLevel.qcLevel);
  },

  async [ActionTypes.ADD_QC_LEVEL]({ commit }, payload ){
    commit(MutationTypes.ADD_QC_LEVEL, payload.data.createQcLevel.qcLevel);
  },


  // analysis QC TEMPLATES
  async [ActionTypes.FETCH_ANALYSES_QC_TEMPLATES]({ commit }){
    await useQuery({ query: GET_ALL_QC_TEMPLATES })
          .then(payload => commit(MutationTypes.SET_ANALYSES_QC_TEMPLATES, payload.data.value.qcTemplateAll));
  },

  async [ActionTypes.UPDATE_QC_TEMPLATE]({ commit }, payload ){
    commit(MutationTypes.UPDATE_QC_TEMPLATE, payload.data.updateQcTemplate.qcTemplate);
  },

  async [ActionTypes.ADD_QC_TEMPLATE]({ commit }, payload ){
    commit(MutationTypes.ADD_QC_TEMPLATE, payload.data.createQcTemplate.qcTemplate);
  },

  // Result Options
  async [ActionTypes.ADD_RESULT_OPTION]({ commit }, payload ){
    commit(MutationTypes.ADD_RESULT_OPTION, payload.data.createResultOption.resultOption);
  },

  async [ActionTypes.UPDATE_RESULT_OPTION]({ commit }, payload ){
    commit(MutationTypes.UPDATE_RESULT_OPTION, payload.data.updateResultOption.resultOption);
  },


};

// namespaced: true,
export const analyses = {
  state,
  mutations,
  actions,
  getters,
};