import {
  SIGNIN_REQ_START,
  SIGNIN_REQ_SUCCESS, 
  SIGNIN_REQ_FAIL,
  LOGOUT_REQ_START
} from './actions';

import { combineReducers } from 'redux';

let initialState = {
  isFetching: false,
  payload: {},
  errMsg: ''
}
export const loginActions = (state = initialState, action) => {  
    switch (action.type) {
      case SIGNIN_REQ_START:
        return {
          isFetching: true,
          payload: {},
          errMsg: ''
        };
      case SIGNIN_REQ_SUCCESS:
        return {
          isFetching: false,
          payload: action.payload,
          errMsg: ''
        };
      case SIGNIN_REQ_FAIL:
        return {
          isFetching: false,
          payload: {},          
          errMsg: action.error.message
        };
      case LOGOUT_REQ_START:
        return {
          isFetching: false,
          payload: {},
          errMsg: ''
        };
      default:
        return state;
    }
};
  
export default combineReducers({ loginActions });