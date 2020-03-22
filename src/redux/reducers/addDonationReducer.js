import {  
    CHANGE_NAME,
    CHANGE_LASTNAME,
    CHANGE_AGE,
    CHANGE_DNI, 
    CHANGE_AMOUNT, 
    RELOAD,
    ADD_DONATION,
    LOADING,
    ERROR,
} from '../types/addDonationTypes';

const initialState = {
    idEmployee: 1,
    idCampaign: 2,
    name: '',
    lastname: '',
    age: '',
    dni: '',
    amount: '',
    response: '',
    loading: false,
    error: false,
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: return {...state, name:action.payload};
        case CHANGE_LASTNAME: return {...state, lastname:action.payload};
        case CHANGE_AGE: return {...state, age:action.payload};
        case CHANGE_DNI: return {...state, dni:action.payload};
        case CHANGE_AMOUNT: return {...state, amount:action.payload};
        case ADD_DONATION: return {...state, response:action.payload, loading: false, error: false};
        case LOADING: return {...state, loading: true, error: false};
        case ERROR: return {...state, error: action.payload, loading:false};
        case RELOAD: return initialState;
        default: return state;
    }
};


