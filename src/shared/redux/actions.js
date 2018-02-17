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
        const data =  credentials;
        const reqConfig = {
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'multipart/form-data;  boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            }
        };
        dispatch(signInReqStart());
        const token = await axios.post(url, reqConfig);
        dispatch(signInReqSuccess(token));
    } catch (error) {
      console.error(error);
      dispatch(signInReqFail(error));
    }
}

export default {
    signInAction
}