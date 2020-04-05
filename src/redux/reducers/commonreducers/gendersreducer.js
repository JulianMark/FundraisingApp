import { genderTypes } from '../../actions/commonactions/gendersActions';
import { createSelector } from "reselect";

const INITIAL_STATE = {
    genders: [],
    gender: '',
    error: ''
};

const {
    OBTAIN_GENDERS,
    CHANGE_GENDER,
    ERROR_OBTAIN_GENDERS 
} = genderTypes;

function gendersReducer (state = INITIAL_STATE, action) {
    switch (action.type) {

        case OBTAIN_GENDERS: return { ...state, genders:action.payload };
        case CHANGE_GENDER: return {...state, gender:action.payload};
        case ERROR_OBTAIN_GENDERS : return {...state, error: action.payload }
        default: return state;
    }
}

const obtainGenderList = createSelector(
    state => state.gendersreducer.genders,
    gendersreducer => gendersreducer
);

const obtainIdGender = createSelector(
    state => state.gendersreducer.gender,
    genderreducer => genderreducer
);

export default gendersReducer;

export {
    obtainGenderList,
    obtainIdGender,
}