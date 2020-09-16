import axios from 'axios';

const initialState = {
    companies: [],
    isLoggedIn: false,
    user: {}
}


const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const CHANGE_USER_OBJ_ON_PROFILE_UPDATE = 'CHANGE_USER_OBJ_ON_PROFILE_UPDATE'

console.log('initialized authReducer')

export function loginUser(user) {
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

export function getUser(user) {
    console.log("getUser reducer, user:", user)
    return {
        type: GET_USER,
        payload: user
    }
}

export function changeUserObjOnProfileUpdate(user){
    return {
        type: CHANGE_USER_OBJ_ON_PROFILE_UPDATE,
        payload: user
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    console.log("Switch case:", action)
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, ...payload, isLoggedIn: true }
        case LOGOUT_USER:
            console.log("LOGOUT_USER")
            return { ...initialState }
        case GET_USER + "_PENDING":
            console.log("GET_USER_PENDING")
            return state
        case GET_USER + "_FULFILLED":
            console.log("GET_USER_FULFILLED")
            return { ...state, user: payload, isLoggedIn: true }
        case GET_USER:
            console.log("GET_USER -- just that in switch case")
            return { ...state, user: payload, isLoggedIn: true }
        case GET_USER + "_REJECTED":
            console.log("GET_USER_REJECTED")
            return { ...initialState}
        case CHANGE_USER_OBJ_ON_PROFILE_UPDATE:
            console.log("CHANGE_USER_OBJ_ON_PROFILE_UPDATE")
            return { ...state, ...payload}
        default:
            return { ...state}
    }
}