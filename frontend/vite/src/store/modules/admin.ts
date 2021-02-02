import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IClient, IDistrict, IProvince, ICountry } from '../common'


// state contract
export interface IState {
  confRoute: string;
}

export const initialState = () => {
  return <IState>{
    confRoute: "",
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CONF_ROUTE = 'SET_CONF_ROUTE',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_CONF_ROUTE = 'SET_CONF_ROUTE',
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getConfRoute: (state) => state.confRoute,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_CONF_ROUTE](state: IState, val: string): void {
    state.confRoute = val;
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
};

// namespaced: true,
export const admin = {
  state,
  mutations,
  actions,
  getters,
};
