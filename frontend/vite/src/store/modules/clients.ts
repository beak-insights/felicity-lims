import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IClient, IDistrict } from '../common'


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

// state contract
export interface IState {
  client?: IClient | null;
  clients?: IClient[];
}

export const initialState = () => {
  return <IState>{
    client: null,
    clients: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CLIENT = 'SET_CLIENT',
  CLEAR_CLIENT = 'CLEAR_CLIENT',
  SET_CLIENTS = 'SET_CLIENTS',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CLIENT = 'SET_CLIENT',
  CLEAR_CLIENT = 'CLEAR_CLIENT',
  SET_CLIENTS = 'SET_CLIENTS',
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getClient: (state) => state.client,
  getClients: (state) => state.clients,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_CLIENT](state: IState, payload: IClient): void {
    state.client = payload;
  },
};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.SET_CLIENT]({ commit }, payload: IClient) {
    commit(MutationTypes.SET_CLIENT, payload);
  },
};

// namespaced: true,
export const clients = {
  state,
  mutations,
  actions,
  getters,
};
