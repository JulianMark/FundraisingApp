import { OBTAIN_GENDERS, CHANGE_GENDER, LOADING, ERROR } from '../types/gendersTypes'

const INITIAL_STATE = {
    genders: [],
    gender: "F",
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case OBTAIN_GENDERS: return { ...state, genders:action.payload, loading:false };
        case LOADING: return {...state, loading: true };
        case CHANGE_GENDER: return {...state, gender:action.payload};
        case ERROR: return {...state, error: action.payload, loading:false }
        default: return state;
    }
}