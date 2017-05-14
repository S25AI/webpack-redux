'use strict';

import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  EDIT_STATUS,
  DEFAULT_STATUS,
  GET_VIRTUAL_DATA_REQUEST,
  GET_VIRTUAL_DATA_SUCCESS,
  GET_VIRTUAL_DATA_FAILED
} from '../constants/';

import {combineReducers} from 'redux';

const initialState = [
  {
    id: 1,
    val: 'Сделать домашнюю работу'
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TASK:
    return [...state, {
      id: state.length ? state[state.length - 1].id + 1 : 1,
      val: action.payload.val
    }];
  case REMOVE_TASK:
    return state.filter(task => task.id !== action.payload.id);
  case EDIT_TASK:
    return state.map((task) => task.id === action.payload.id ?
        {id: task.id, val: action.payload.val} : task);
  default:
    return state;
  }
};

const statusReducer = (state = {status: 'default'}, action) => {
  switch (action.type) {
  case EDIT_STATUS:
    return {status: 'edit', prevData: action.payload};
  case DEFAULT_STATUS:
    return {status: 'default'};
  default:
    return state;
  }
};

const gettingDataReducer = (state = {loading: false}, action) => {
  switch(action.type ) {
  case GET_VIRTUAL_DATA_REQUEST:
    return {loading: true};
  case GET_VIRTUAL_DATA_SUCCESS:
  case GET_VIRTUAL_DATA_FAILED:
    return {loading: false};
  default:
    return state;
  }
};

export default combineReducers({todos, statusReducer, gettingDataReducer});