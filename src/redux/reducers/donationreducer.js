import { createSelector } from "reselect";

import {  
    CHANGE_NAME,
    CHANGE_LASTNAME,
    CHANGE_AGE,
    CHANGE_AMOUNT, 
    RELOAD,
    DONATION_REQUEST,
    LOADING,
    ERROR,
} from '../types/donationTypes';

const initialState = {
    name: '',
    lastname: '',
    age: '',
    amount: '',
    response: '',
    loading: false,
    error: false,
}

function donationReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: return {...state, name:action.payload};
        case CHANGE_LASTNAME: return {...state, lastname:action.payload};
        case CHANGE_AGE: return {...state, age:action.payload};
        case CHANGE_AMOUNT: return {...state, amount:action.payload};
        case DONATION_REQUEST: return {...state, response:action.payload, loading: false, error: false};
        case LOADING: return {...state, loading: true, error: false};
        case ERROR: return {...state, error: true, loading:false};
        case RELOAD: return initialState;
        default: return state;
    }
};

const getName = createSelector(
    state => state.donationreducer.name,
    donationreducer => donationreducer
);

const getLastname = createSelector(
    state => state.donationreducer.lastname,
    donationreducer => donationreducer
);

const getAge = createSelector(
    state => state.donationreducer.age,
    donationreducer => donationreducer
);

const getAmount = createSelector(
    state => state.donationreducer.amount,
    donationreducer => donationreducer
);

const getResponse = createSelector(
    state => state.donationreducer.response,
    donationreducer => donationreducer
);

function selectLoading(state) {
    return state.donationreducer.loading;
}

function selectError(state) {
    return state.donationreducer.error;
}

export default donationReducer;

export {
    getName,
    getLastname,
    getAge,
    getAmount,
    getResponse,
    selectLoading,
    selectError
}


