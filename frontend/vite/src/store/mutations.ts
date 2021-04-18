import { MutationTree } from 'vuex';
import { IState, initialState } from './state';

import { parseEdgeNodeToList } from '../utils'

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  PERSIST_AUTH_DATA = 'PERSIST_AUTH_DATA',
  SET_USERS = 'SET_USERS',

  SET_GROUPS_AND_PERMISSIONS = 'SET_GROUPS_AND_PERMISSIONS',
  UPDATE_GROUPS_PERMISSIONS = 'UPDATE_GROUPS_PERMISSIONS',
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

  [MutationTypes.SET_USERS](state: IState, payload): void {
    state.users = [];
    let users = parseEdgeNodeToList(payload) || [];
    users?.forEach((user: any) => {
      user.groups = parseEdgeNodeToList(user.groups) || [];
    })
    state.users = users;
  },

  [MutationTypes.SET_GROUPS_AND_PERMISSIONS](state: IState, payload): void {
    state.groups = [];
    state.permissions = [];
    let _perms = parseEdgeNodeToList(payload?.permissionAll);
    let _grps = parseEdgeNodeToList(payload?.groupAll);
    _grps?.forEach((grp: any) => {
      grp.permissions = parseEdgeNodeToList(grp.permissions) || [];
    })
    state.groups = _grps;
    state.permissions = _perms;
  },

  [MutationTypes.UPDATE_GROUPS_PERMISSIONS](state: IState, payload): void {
    let group = payload?.group;
    const index = state.groups?.findIndex(g => g.uid === group.uid);
    group.permissions = parseEdgeNodeToList(group?.permissions) || [];
    state!.groups[index] = group;
  },

};
