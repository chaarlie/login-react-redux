import axios from 'axios';

export const SIGNIN_REQ_START = 'SIGNIN_REQ_START';
export const SIGNIN_REQ_SUCCESS = 'SIGNIN_REQ_SUCCESS';
export const SIGNIN_REQ_FAIL = 'SIGNIN_REQ_FAIL'; 
export const LOGOUT_REQ_START = 'LOGOUT_REQ_START';

export const signInReqStart = () => ({  
  type: SIGNIN_REQ_START,
});

export const signInReqSuccess = payload => ({  
    type: SIGNIN_REQ_SUCCESS,
    payload,
});

export const signInReqFail = error => ({  
    type: SIGNIN_REQ_FAIL,
    error
});

export const logoutReqStart = () => ({  
    type: LOGOUT_REQ_START
});


export const signInAction = (credentials)  => async dispatch => {  
    try {
        const url = `/authenticate/login`; 
        const data =  JSON.stringify(credentials);
        const reqConfig = {
            headers: {
                    'Content-Type': 'application/json'
            }
        };
        dispatch(signInReqStart());
        const request = await axios.post(url, data, reqConfig);
        dispatch(signInReqSuccess(request.data));
    } catch (error) {
      console.error(error);
      dispatch(signInReqFail(error));
    }
}

export const logoutAction = ()  => async dispatch => {  
    try {
        //usually some request to destroy payload goes here
        dispatch(logoutReqStart());
    } catch (error) {}
}

export default {
    signInAction,
    logoutAction
}