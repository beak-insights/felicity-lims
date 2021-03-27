import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { parseEdgeNodeToList } from '../../utils'
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_SAMPLE_TYPES
} from '../../graphql/analyses.queries';

export interface ISampleType {
  uid?: string;
  name?: string;
  abbr?: string;
  description?: string;
  active?: boolean;
}

export class SampleType implements ISampleType{
  constructor(
    public uid?: string,
    public name?: string,
    public abbr?: string,
    public description?: string,
    public active?: boolean,
  ) {
    this.active = true;
  }
}

// state contract
export interface IState {
  sampleTypes: ISampleType[];
}

export const initialState = () => {
  return <IState>{
    sampleTypes: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_SAMPLE_TYPES = 'SET_SAMPLE_TYPES',
  ADD_SAMPLE_TYPE = 'ADD_SAMPLE_TYPE',
  UPDATE_SAMPLE_TYPE = 'UPDATE_SAMPLE_TYPE'
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  FETCH_SAMPLE_TYPES = 'FETCH_SAMPLE_TYPES',
  ADD_SAMPLE_TYPE = 'ADD_SAMPLE_TYPE',
  UPDATE_SAMPLE_TYPE = 'UPDATE_SAMPLE_TYPE'
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getSampleTypes: (state) => state.sampleTypes,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_SAMPLE_TYPES](state: IState, payload: any[]): void {
    state.sampleTypes = [];
    state.sampleTypes = parseEdgeNodeToList(payload)
  },

  [MutationTypes.UPDATE_SAMPLE_TYPE](state: IState, payload: ISampleType): void {
    const index = state.sampleTypes.findIndex(x => x.uid === payload.uid);
    state!.sampleTypes[index] = payload;
  },

  [MutationTypes.ADD_SAMPLE_TYPE](state: IState, payload: ISampleType): void {
    state.sampleTypes.push(payload);
  },

};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.FETCH_SAMPLE_TYPES]({ commit }){
    await useQuery({ query: GET_ALL_SAMPLE_TYPES })
          .then(payload => commit(MutationTypes.SET_SAMPLE_TYPES, payload.data.value.sampleTypeAll));
  },

  async [ActionTypes.UPDATE_SAMPLE_TYPE]({ commit }, payload ){
    commit(MutationTypes.UPDATE_SAMPLE_TYPE, payload.data.updateSampleType.sampleType);
  },

  async [ActionTypes.ADD_SAMPLE_TYPE]({ commit }, payload ){
    commit(MutationTypes.ADD_SAMPLE_TYPE, payload.data.createSampleType.sampleType);
  },

};

// namespaced: true,
export const samples = {
  state,
  mutations,
  actions,
  getters,
};