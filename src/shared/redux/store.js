import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import loginActions from './reducers';

export function configureStore(initialState = {}) {  
    const store = createStore(loginActions, initialState, applyMiddleware(thunk));
    return store;
}
  
  export const store = configureStore(); 