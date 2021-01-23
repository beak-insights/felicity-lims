import { MutationTree } from 'vuex';
import { IState, initialState, IAuth } from './state';

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  PERSIST_AUTH_DATA = 'PERSIST_AUTH_DATA',
}

export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.PERSIST_AUTH_DATA](state: IState, authData): void {
    state.auth = authData.user;
    state.token = authData.token;
    state.isAuthenticated = true;
  },
};
