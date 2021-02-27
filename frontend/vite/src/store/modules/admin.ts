import { useQuery } from '@urql/vue';
import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IDistrict, IProvince, ICountry } from '../common'

import {
  GET_ALL_COUNTRIES,
  FILTER_PROVINCES_BY_COUNTRY,
  FILTER_DISTRICTS_BY_PROVINCE,
} from '../../graphql/admin/queries';


// state contract
export interface IState {
  confRoute: string;
  countries: ICountry[];
  provinces: IProvince[];
  districts: IDistrict[];
}

export const initialState = () => {
  return <IState>{
    confRoute: "",
    countries: [],
    provinces: [],
    districts: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CONF_ROUTE = 'SET_CONF_ROUTE',
  SET_COUNTRIES = 'SET_COUNTRIES',
  SET_PROVINCES = 'SET_PROVINCES',
  SET_DISTRICTS = 'SET_PROVINCES',  
  SET_DISTRICTS_DIRECT = 'SET_DISTRICTS_DIRECT',
  SET_PROVINCES_DIRECT = 'SET_PROVINCES_DIRECT', 
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CONF_ROUTE = 'SET_CONF_ROUTE',
  FETCH_COUNTRIES = 'FETCH_COUNTRIES',
  FETCH_PROVINCES = 'FETCH_PROVINCES',
  FETCH_DISTRICTS = 'FETCH_DISTRICTS',
  FILTER_DISTRICTS = 'FILTER_DISTRICTS',
  FILTER_PROVINCES = 'FILTER_PROVINCES'
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getConfRoute: (state) => state.confRoute,
  getCountries: (state) => state.countries,
  getProvinces: (state) => state.provinces,
  getDistricts: (state) => state.districts,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_CONF_ROUTE](state: IState, val: string): void {
    state.confRoute = val;
  },

  [MutationTypes.SET_COUNTRIES](state: IState, payload: any[]): void {
    payload?.forEach(obj => state.countries?.push(obj?.node));
  },
};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.SET_CONF_ROUTE]({ commit }, val: string) {
    commit(MutationTypes.SET_CONF_ROUTE, val);
  },

  async [ActionTypes.FETCH_COUNTRIES]({ commit }){
    await useQuery({ query: GET_ALL_COUNTRIES })
          .then(payload => commit(MutationTypes.SET_COUNTRIES, payload.data.value.countryAll.edges));
  },

  async [ActionTypes.SEARCH_PATIENTS]({ commit }, query: string){
    await urqlClient
      .query(SEARCH_PATIENTS, { queryString: query })
      .toPromise()
      .then(result => commit(MutationTypes.DIRECT_SET_PATIENTS, result.data.patientSearch))
  },

  async [ActionTypes.SEARCH_PATIENTS]({ commit }, query: string){
    await urqlClient
      .query(SEARCH_PATIENTS, { queryString: query })
      .toPromise()
      .then(result => commit(MutationTypes.DIRECT_SET_PATIENTS, result.data.patientSearch))
  }
};

// namespaced: true,
export const admin = {
  state,
  mutations,
  actions,
  getters,
};
