import axios from 'axios';

const initialState = {
    isLoggedIn: false,
    user: {}
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

console.log('initialized reducer')

export function loginUser(user){
    console.log('loginUser:', user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user =  axios.get('/auth/user').then( res => {
        console.log("getUser reducer", res.data)
        return res.data
    })

    return {
        type: GET_USER,
        payload: user
    }
}

export default function(state = initialState, action){
    const {type, payload} = action
    console.log("Switch case:", action)
    switch(action.type){
        case LOGIN_USER:
            console.log("hit LOGIN_USER via reducer")
            return {...state, ...payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...payload}
        case GET_USER + "_PENDING":
            return state
        case GET_USER + "_FULFILLED":
            return {...state, user: payload, isLoggedIn: true}
        case GET_USER + "_REJECTED":
            return initialState
        default:
            return initialState
    }
}