import { combineReducers } from 'redux';

export const loginActions = (state = {}, action) => {  
    switch (action.type) {
      case 'SIGNIN_REQ_START':
        return {
          isFetching: true,
          token:'',
          errMsg: ''
        }
      case 'SIGNIN_REQ_SUCCESS':
        return {
          isFetching: false,
          token: action.token,
          errMsg: ''
        };
      case 'SIGNIN_REQ_FAIL':
        return {
          isFetching: false,
          token: '',          
          errMsg: action.error.message
        };
      default:
        return state;
    }
};
  
export default combineReducers({ loginActions });