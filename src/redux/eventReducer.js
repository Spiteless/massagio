import axios from 'axios';

const initialState = {
    events: []
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

console.log('initialized eventReducer')

export function loginUser(user) {
    console.log('loginUser:', user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUserBase() {
    const info = {
        idea: 'result'
    }
    return {
        type: GET_USER,
        payload: info
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    // console.log("Switch case:", action)
    switch (action.type) {
        default:
            return initialState
    }
}