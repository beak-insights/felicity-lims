import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';

export interface IPatient {
  firstName?: string;
  lastName?: string;
  clientName?: string;
  districtName?: string;
  provinceName?: string;
  age?: number;
  dob?: Date;
  gender?: string;
  patientId?: string;
  clientPatientId?: string;
}

export class Patient implements IPatient {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public clientName?: string,
    public districtName?: string,
    public provinceName?: string,
    public age?: number,
    public dob?: Date,
    public gender?: string,
    public patientId?: string,
    public clientPatientId?: string,
  ) {}
}

// state contract
export interface IState {
  patient?: IPatient | null;
  patients?: IPatient[];
}

export const initialState = () => {
  return <IState>{
    patient: null,
    patients: [
      new Patient(
        'Aurthur',
        'Musendame',
        'Adura Clinic',
        'Nkulumane',
        'Matabeleland South',
        24,
        new Date('01/01/2020 00:00:00'),
        'Male',
        'P21-00976',
        'TTTTTT',
      ),
    ],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_PATIENT = 'SET_PATIENT',
  CLEAR_PATIENT = 'CLEAR_PATIENT',
  SET_PATIENTS = 'SET_PATIENTS',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_PATIENT = 'SET_PATIENT',
  CLEAR_PATIENT = 'CLEAR_PATIENT',
  SET_PATIENTS = 'SET_PATIENTS',
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getPatient: (state) => state.patient,
  getPatients: (state) => state.patients,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_PATIENT](state: IState, payload: IPatient): void {
    state.patient = payload;
  },
};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.SET_PATIENT]({ commit }, payload: IPatient) {
    commit(MutationTypes.SET_PATIENT, payload);
  },
};

// namespaced: true,
export const patients = {
  state,
  mutations,
  actions,
  getters,
};
