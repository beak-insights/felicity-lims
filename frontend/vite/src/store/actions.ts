import { ActionTree } from 'vuex';
import { useQuery } from '@urql/vue';
import { urqlClient } from '../urql';

import { IState, RootState, IAuth } from './state';
import { MutationTypes } from './mutations';

import {
  GET_GROUPS_AND_PERMISSIONS, GET_ALL_USERS, GET_AUDIT_LOG_FOR_TARGET
} from '../graphql/_queries';

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  PERSIST_AUTH_DATA = 'PERSIST_AUTH_DATA',

  FETCH_GROUPS_AND_PERMISSIONS = 'FETCH_GROUPS_AND_PERMISSIONS',
  FETCH_USERS = 'FETCH_USERS',
  UPDATE_GROUPS_PERMISSIONS = 'UPDATE_GROUPS_PERMISSIONS',

  FETCH_AUDIT_LOGS = 'FETCH_AUDIT_LOGS',
  RESET_AUDIT_LOGS = 'RESET_AUDIT_LOGS'
}

export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.FETCH_USERS]({ commit }) {
    await useQuery({ query: GET_ALL_USERS })
          .then(payload => commit(MutationTypes.SET_USERS, payload.data.value.userAll));
  },

  // Auth
  async [ActionTypes.PERSIST_AUTH_DATA]({ commit }, payload) {
    const authData = payload.data.authenticateUser;
    localStorage.setItem('fwt', authData.token); // Felicity Web Token
    localStorage.setItem('fuser', authData.user?.firstName + " " + authData.user?.lastName); // Felicity User
    localStorage.setItem('fuid', authData.user?.uid); // Felicity UserUid
    await commit(MutationTypes.PERSIST_AUTH_DATA, authData);
  },

  // Groups and permissions
  async [ActionTypes.FETCH_GROUPS_AND_PERMISSIONS]({ commit }, payload) {
    await useQuery({ query: GET_GROUPS_AND_PERMISSIONS })
          .then(payload => commit(MutationTypes.SET_GROUPS_AND_PERMISSIONS, payload.data.value));
  },

  async [ActionTypes.UPDATE_GROUPS_PERMISSIONS]({ commit }, payload) {
    commit(MutationTypes.UPDATE_GROUPS_PERMISSIONS, payload.data.updateGroupsAndPermissions);
  },

  // audit logs
  async [ActionTypes.RESET_AUDIT_LOGS]({ commit }) {
    commit(MutationTypes.RESET_AUDIT_LOGS);
  },

  async [ActionTypes.FETCH_AUDIT_LOGS]({ commit }, params){
    await urqlClient
    .query( GET_AUDIT_LOG_FOR_TARGET, params)
    .toPromise()
    .then(result => commit(MutationTypes.SET_AUDIT_LOGS, result.data.auditLogsFilter))
  },

};


// checkTimeLeft() {   
//   let auth = JSON.parse(localStorage.getItem('auth'))
//   if (!auth) {
//     return;
//   } else {
//     let decoded = jwt.decode(auth.access);
//     let decodedTime = new Date(decoded.exp * 1000);
//     let nowTime = Date.now();
//     function timeToSessionExpiry(currentTime, expiryTime) {
//       let currentTimeMinutes = new Date(currentTime).getHours() * 60 + new Date(currentTime).getMinutes()
//       let expiryTimeMinutes = expiryTime.getHours() * 60 + expiryTime.getMinutes()
//       return expiryTimeMinutes - currentTimeMinutes
//     }
//     let minutesLeft = timeToSessionExpiry(nowTime, decodedTime);
//     let hoursLeft = +((minutesLeft/60).toString().substring(0,1));
//     let timeLeft = { 
//       hours: hoursLeft, 
//       minutes: minutesLeft 
//     }
//     return timeLeft
//   }
// }

// async extendSession() {
// let auth = JSON.parse(localStorage.getItem('auth'))
// if (!auth || !auth.refresh) return;
// await this.$axios.post('refresh/', { "refresh": auth.refresh })
//       .then(res => {
//         auth.access = res.data.access
//         // localStorage.removeItem('auth'); 
//         localStorage.setItem('auth', JSON.stringify(auth))
//         return res
//       })
//       .catch(err => console.log(err)) 
// }
