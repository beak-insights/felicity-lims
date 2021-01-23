import { GetterTree } from 'vuex';
import { IState, RootState } from './state';

export const getters = <GetterTree<IState, RootState>>{
  getAuth: (state) => state.auth,
};
