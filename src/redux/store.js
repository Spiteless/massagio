// import reducer from './reducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './authReducer';
import baseReducer from './baseReducer';

const rootReducer = combineReducers({base: baseReducer, auth: authReducer})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware));