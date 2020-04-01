import { dniTypes } from '../../actions/commonactions/dniActions';
import { createSelector } from "reselect";

const INITIAL_STATE = {
    dni : ''
};

const {
    CHANGE_DNI
} = dniTypes;

function dniReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_DNI: return {...state, dni:action.payload};
        default: return state;
    }
}

const getDni = createSelector(
    state => state.dnireducer.dni,
    dnireducer => dnireducer
);

export default dniReducer;

export {
    getDni,
}