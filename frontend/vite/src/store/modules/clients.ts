import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IClient, IDistrict } from '../common'

import { GET_ALL_CLIENTS, SEARCH_CLIENTS } from '../../graphql/clients/queries';

export class Client implements IClient {
  constructor(
    public uid?: number,
    public name?: string,
    public code?: string,
    public email?: string,
    public emailCc?: string[],
    public consentEmail?: boolean,
    public businessPhone?: string,
    public mobilePhone?: string,
    public consentSms?: boolean,
    public district?: IDistrict,
    public districtUid?: string,
  ) {}
}

export interface IClientContact {

}

// state contract
export interface IState {
  clients?: IClient[];
  clientContacts?: IClientContact[];
}

export const initialState = () => {
  return <IState>{
    clients: [],
    clientContacts: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CLIENT_CONTACTS = 'SET_CLIENT_CONTACTS',
  SET_CLIENTS = 'SET_CLIENTS',
  SET_CLIENTS_DIRECT = 'SET_CLIENTS_DIRECT',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CLIENT_CONTACTS = 'SET_CLIENT_CONTACTS',
  SET_CLIENTS = 'SET_CLIENTS',
  FETCH_CLIENTS = 'FETCH_CLIENTS',
  SEARCH_CLIENTS = 'SEARCH_CLIENTS'
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getClientContacts: (state) => state.clientContacts,
  getClients: (state) => state.clients,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_CLIENT_CONTACTS](state: IState, payload: IClientContact[]): void {
    state.clientContacts = [];
    state.clientContacts = payload;
  },

  [MutationTypes.SET_CLIENTS](state: IState, payload: any[]): void {
    state.clients = [];
    payload?.forEach(obj => state.clients?.push(obj?.node));
  },

  [MutationTypes.SET_CLIENTS_DIRECT](state: IState, clients: IClient[]): void {
    state.clients = [];
    state.clients = clients;
  },


};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.SET_CLIENT_CONTACTS]({ commit }, payload: IClient) {
    commit(MutationTypes.SET_CLIENT_CONTACTS, payload);
  },

  async [ActionTypes.FETCH_CLIENTS]({ commit }){
    await useQuery({ query: GET_ALL_CLIENTS })
          .then(payload => commit(MutationTypes.SET_CLIENTS, payload.data.value.clientAll.edges));
  },

  async [ActionTypes.SEARCH_CLIENTS]({ commit }, query: string){
    await urqlClient
      .query(SEARCH_CLIENTS, { queryString: query })
      .toPromise()
      .then(result => commit(MutationTypes.SET_CLIENTS_DIRECT, result.data.clientSearch))
  }
};

// namespaced: true,
export const clients = {
  state,
  mutations,
  actions,
  getters,
};
