import { OBTAIN_PAYTYPES, CHANGE_PAYTYPE, LOADING, ERROR } from '../types/payTypesTypes'

const INITIAL_STATE = {
    payTypes: [],
    payType: 1,
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case OBTAIN_PAYTYPES: return { ...state, payTypes:action.payload, loading:false };
        case LOADING: return {...state, loading: true };
        case CHANGE_PAYTYPE: return {...state, payType:action.payload};
        case ERROR: return {...state, error: action.payload, loading:false }
        default: return state;
    }
}