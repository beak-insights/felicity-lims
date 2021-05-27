import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { parseEdgeNodeToList } from '../../utils'
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_BOARDS,
  GET_BOARD_BY_UID
} from '../../graphql/kanban.queries';



export interface IComment {
  uid?: string;
  comment?: string;
  dateCommented?: string;
  commentBy?: string;
}

export class Comment implements IComment {
  constructor(
    public uid?: string,
    public comment?: string,
    public dateCommented?: string,
    public commentBy?: string,
  ) {
  }
}

export interface IMileStone {
  uid?: string;
  name?: string;
  done?: boolean;
  assignee?: string;
}

export class MileStone implements IMileStone {
  constructor(
    public uid?: string,
    public name?: string,
    public done?: boolean,
    public assignee?: string,
  ) {
  }
}

export interface ITask {
  uid?: string;
  title?: string;
  description?: string;
  listingUid?: string;
  milestones?: IMileStone[];
  comment?: IComment[];
  status?: string;
  assignee?: string;
  dueDate?: string,
  members?: string[];
}

export class Task implements ITask {
  constructor(
    public uid?: string,
    public title?: string,
    public description?: string,
    public listingUid?: string,
    public milestones?: IMileStone[],
    public status?: string,
    public assignee?: string,
    public dueDate?: string,
    public members?: string[],
  ) {
  }
}

 export interface IListing {
    uid?: string;
    name?: string;
    description?: string;
    listingTasks?: ITask[];
  }
  
  export class Listing implements IListing {
    constructor(
      public uid?: string,
      public name?: string,
      public description?: string,
      public listingTasks?: ITask[],
    ) {
    }
  }
  

export interface IBoard {
  uid?: string;
  title?: string;
  description?: string;
  departmentUid?: string;
  department?: any;
  boardListings?: IListing[];
}

export class Board implements IBoard {
  constructor(
    public uid?: string,
    public title?: string,
    public description?: string,
    public boardListings?: IListing[],
    public departmentUid?: string,
    public department?: any,
  ) {
  }
}

// state contract
export interface IState {
  boards: IBoard[];
  board: IBoard | null;
}

export const initialState = () => {
  return <IState>{
    boards: [],
    board: null
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',

  SET_BOARDS = 'SET_BOARDS',
  SET_BOARD = 'SET_BOARD',
  ADD_BOARD = 'ADD_BOARD',

  ADD_BOARD_LISTING = 'ADD_BOARD_LISTING',

  ADD_LISTING_TASK = 'ADD_LISTING_TASK',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',

  FETCH_BOARDS = 'FETCH_BOARDS',
  FETCH_BOARD_BY_UID = 'FETCH_BOARD_BY_UID',
  ADD_BOARD = 'ADD_BOARD',

  ADD_BOARD_LISTING = 'ADD_BOARD_LISTING',

  ADD_LISTING_TASK = 'ADD_LISTING_TASK',
  
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getBoards: (state) => state.boards,
  getBoard: (state) => state.board,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_BOARDS](state: IState, payload: any[]): void {
    state.boards  = [];
    let boards = parseEdgeNodeToList(payload)
    state.boards = boards;
  },

  [MutationTypes.ADD_BOARD](state: IState, payload: any): void {
    let board: IBoard = payload.board;
    state.boards.push(board)
  },

  [MutationTypes.SET_BOARD](state: IState, payload: IBoard): void {
    let board = payload;
    board.boardListings = parseEdgeNodeToList(payload?.boardListings)
    board.boardListings!.forEach(board => {
      board.listingTasks = parseEdgeNodeToList(board?.listingTasks)
    })
    state.board = payload;
  },

  [MutationTypes.ADD_BOARD_LISTING](state: IState, payload: any): void {
    let board = state.board;
    if(board) board.boardListings!.push(payload.listing)
    state.board = board;
  },

  [MutationTypes.ADD_LISTING_TASK](state: IState, payload: any): void {
    let board = state.board;
    board!.boardListings?.forEach((listing: IListing) => {
      if (listing.uid?.toString() === payload.task.listingUid?.toString()) {
        if(listing.listingTasks) {
          listing.listingTasks.push(payload.task)
        } else {
          listing.listingTasks = [payload.task]
        }
      }
    })
    state.board = board;
  },

};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },
  
  async [ActionTypes.FETCH_BOARDS]({ commit }, payload){
    await useQuery({ query: GET_ALL_BOARDS })
          .then(payload => commit(MutationTypes.SET_BOARDS, payload.data.value.boardAll));
  },
  
  async [ActionTypes.ADD_BOARD]({ commit }, payload){
    commit(MutationTypes.ADD_BOARD, payload.data.createBoard);
  },

  async [ActionTypes.FETCH_BOARD_BY_UID]({ commit }, uid){
    await urqlClient
    .query( GET_BOARD_BY_UID, { uid })
    .toPromise()
    .then(result => commit(MutationTypes.SET_BOARD, result.data.boardByUid))
  },
  
  async [ActionTypes.ADD_BOARD_LISTING]({ commit }, payload){
    commit(MutationTypes.ADD_BOARD_LISTING, payload.data.createBoardListing);
  },
  
  async [ActionTypes.ADD_LISTING_TASK]({ commit }, payload){
    commit(MutationTypes.ADD_LISTING_TASK, payload.data.createListingTask);
  },

};

// namespaced: true,
export const kanban = {
  state,
  mutations,
  actions,
  getters,
};