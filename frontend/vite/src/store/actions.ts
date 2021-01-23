import { ActionTree } from 'vuex';

import { IState, RootState, IAuth } from './state';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  PERSIST_AUTH_DATA = 'PERSIST_AUTH_DATA',
}

export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.PERSIST_AUTH_DATA]({ commit }, payload) {
    console.log(payload.data.authenticateUser)
    const authData = payload.data.authenticateUser;
    localStorage.setItem('fwt', authData.token); // Felicity Web Token
    localStorage.setItem('fuser', authData.user); // Felicity User
    await commit(MutationTypes.PERSIST_AUTH_DATA, authData);
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
