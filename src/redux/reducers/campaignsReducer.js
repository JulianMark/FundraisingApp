import { OBTAIN_CAMPAIGN, LOADING, ERROR } from '../types/campaignsTypes'

const INITIAL_STATE = {
    employeeList: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OBTAIN_CAMPAIGN:
            return {
                ...state,
                employeeList:action.payload,
                loading:false};
        
        case LOADING:
            return {...state, loading: true};
        
        case ERROR:
            return {...state, error: action.payload, loading:false}
        default: return state;
    }
}