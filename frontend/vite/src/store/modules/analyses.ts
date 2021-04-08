import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { parseEdgeNodeToList } from '../../utils'
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_ANALYSES_SERVICES, GET_ALL_ANALYSES_PROFILES, GET_ALL_ANALYSES_CATEGORIES,
  GET_ALL_ANALYSES_PROFILES_AND_SERVICES
} from '../../graphql/analyses.queries';
import { ISampleType } from './samples';
import { IPatient } from './patients';
import { IClient } from '../common';
import { Client } from './clients';

export interface IAnalysisCategory {
  uid?: string;
  name?: string;
  abbr?: string;
  description?: string;
  active?: boolean;
}

export class AnalysisCategory implements IAnalysisCategory {
  constructor(
    public uid?: string,
    public name?: string,
    public description?: string,
    public active?: boolean,
  ) {
    this.active = true;
  }
}

export interface IAnalysisService {
  uid?: string;
  name?: string;
  keyword?: string;
  description?: string;
  profiles?: IAnalysisProfile[];
  category?: IAnalysisCategory;
  categoryUid?: string,
  active?: boolean;
  checked?: boolean;
}

export class AnalysisService implements IAnalysisService {
  constructor(
    public uid?: string,
    public name?: string,
    public description?: string,
    public keyword?: string,
    public profiles?: IAnalysisProfile[],
    public category?: IAnalysisCategory,
    public categoryUid?: string,
    public active?: boolean,
    public checked?: boolean,
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
    public uid?: string,
    public name?: string,
    public description?: string,
    public keyword?: string,
    public analyses?: IAnalysisService[],
    public active?: boolean,
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
    public sampleType?: ISampleType,
    public profiles?: IAnalysisProfile[],
    public analyses?: IAnalysisService[],
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
}

export class AnalysisRequest implements IAnalysisRequest {
  constructor(
 public patient?: IPatient, 
 public client?: IClient, 
 public samples?: ISample[],
 public clientRequestId?: string,
 public priority?: number,
  ){
    this.samples = [new Sample()];
    this.client = new Client;
  }
}

// state contract
export interface IState {
  analysesCategories: IAnalysisCategory[];
  analysesServices: IAnalysisService[];
  analysesProfiles: IAnalysisProfile[];
}

export const initialState = () => {
  return <IState>{
    analysesCategories: [],
    analysesServices: [],
    analysesProfiles: [],
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
  UPDATE_ANALYSES_PROFILE = 'UPDATE_ANALYSES_PROFILE'
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

  FETCH_SAMPLES = 'FETCH_SAMPLES',
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
      service.profiles = parseEdgeNodeToList(service?.profiles) || [];
    })
    state.analysesServices = services;
  },

  [MutationTypes.UPDATE_ANALYSES_SERVICE](state: IState, payload: IAnalysisService): void {
    const index = state.analysesServices.findIndex(x => x.uid === payload.uid);
    state!.analysesServices[index] = payload;
  },

  [MutationTypes.ADD_ANALYSES_SERVICE](state: IState, payload: IAnalysisService): void {
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

};

// namespaced: true,
export const analyses = {
  state,
  mutations,
  actions,
  getters,
};