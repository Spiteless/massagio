import axios from 'axios';

const initialState = {
    isLoggedIn: false,
    user: {}
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

console.log('initialized authReducer')

export function loginUser(user) {
    console.log('auth.loginUser:', user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    console.log('auth.logoutUser')
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser() {
    console.log('auth.getUser')
    const user = axios.get('/auth/user').then(res => {
        console.log("getUser reducer", res.data)
        return res.data
    })

    return {
        type: GET_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    console.log("Switch case:", action)
    switch (action.type) {
        case LOGIN_USER:
            console.log("hit LOGIN_USER via reducer")
            return { ...state, ...payload, isLoggedIn: true }
        case LOGOUT_USER:
            return { ...state, ...payload }
        case GET_USER + "_PENDING":
            console.log("GET_USER_PENDING")
            return state
        case GET_USER + "_FULFILLED":
            console.log("GET_USER_FULFILLED")
            return { ...state, user: payload, isLoggedIn: true }
        case GET_USER + "_REJECTED":
            console.log("GET_USER_REJECTED")
            return initialState
        default:
            return initialState
    }
}