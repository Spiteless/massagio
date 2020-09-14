// import reducer from './reducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './authReducer';
import baseReducer from './baseReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    base: baseReducer,
    auth: authReducer,
    event: eventReducer
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware));