import axios from 'axios';

const initialState = {
    companies: [],
    isLoggedIn: false,
    user: {}
}

const UPDATE_USER = 'UPDATE_USER';
const ADMIN_GET_COMPANIES = 'ADMIN_GET_COMPANIES';

console.log('initialized baseReducer')

export function adminGetCompanies(companies) {
    // console.log('UpdateUser:', companyList)
    return {
        // type: ADMIN_GET_COMPANIES,
        // payload: companies
    }
}


export function updateUser(user) {
    console.log('UpdateUser:', user)
    return {
        type: UPDATE_USER,
        payload: user
    }
}


export default function (state = initialState, action) {
    const { type, payload } = action
    console.log("Switch case:", action)
    switch (action.type) {
        case UPDATE_USER:
            console.log("UPDATE_USER")
            return { ...state, user: payload }
        case ADMIN_GET_COMPANIES:
            console.log("ADMIN_GET_COMPANIES", payload, state)
            // console.log(state)
            return { ...state, companies: payload }
        default:
            return initialState
    }
}