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

export const addTodo = val => ({
  type: ADD_TASK,
  payload: {val}
});

export const editTodo = (val, id) => ({
  type: EDIT_TASK,
  payload: {id, val}
});

export const removeTodo = id => ({
  type: REMOVE_TASK,
  payload: {id}
});

export const editStatus = payload => ({
  type: EDIT_STATUS,
  payload
});

export const doAsyncAction = () => dispatch => {
  dispatch({type: GET_VIRTUAL_DATA_REQUEST});

  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  })
  .then(() => dispatch({type: GET_VIRTUAL_DATA_SUCCESS}))
  .catch(() => dispatch({type: GET_VIRTUAL_DATA_FAILED}));
};

export const setDefaultStatus = () => ({type: DEFAULT_STATUS});