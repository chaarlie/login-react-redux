import axios from 'axios';

export const signInReqStart = () => ({  
  type: 'SIGNIN_REQ_START',
});

export const signInReqSuccess = token => ({  
    type: 'SIGNIN_REQ_SUCCESS',
    token,
});

export const signInReqFail = error => ({  
    type: 'SIGNIN_REQ_FAIL',
    error
});


export const signInAction = (credentials)  => async dispatch => {  
    try {
        const url = `http://178.62.101.205/auth/login`;
        const data =  JSON.stringify(credentials);
        const reqConfig = {
            headers: {
                    'Content-Type': 'application/json'
            }
        };
        dispatch(signInReqStart());
        const request = await axios.post(url, data, reqConfig);
        dispatch(signInReqSuccess(request.data.access_token));
    } catch (error) {
      console.error(error);
      dispatch(signInReqFail(error));
    }
}

export default {
    signInAction
}