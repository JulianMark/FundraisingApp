import { OBTAIN_PAYTYPES, CHANGE_PAYTYPE, LOADING, ERROR } from '../types/payTypesTypes';
import { createSelector } from "reselect";


const INITIAL_STATE = {
    paytypes: [],
    paytype: 1,
    loading: false,
    error: ''
};

function payTypesReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case OBTAIN_PAYTYPES: return { ...state, paytypes:action.payload, loading:false };
        case LOADING: return {...state, loading: true };
        case CHANGE_PAYTYPE: return {...state, paytype:action.payload};
        case ERROR: return {...state, error: action.payload, loading:false }
        default: return state;
    }
}

const obtainPayTypesList = createSelector(
    state => state.paytypesreducer.paytypes,
    paytypesreducer => paytypesreducer
);

const obtainPayType = createSelector(
    state => state.paytypesreducer.paytype,
    paytypesreducer => paytypesreducer
);

export default payTypesReducer;

export {
    obtainPayTypesList,
    obtainPayType,
}