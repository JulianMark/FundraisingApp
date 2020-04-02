import { locationTypes } from '../actions/campaignActions';
import { createSelector } from "reselect";

const INITIAL_STATE = {
    locations: [],
    locationId: '',
    error: ''
};

const {
    OBTAIN_LOCATIONS,
    CHANGE_LOCATION,
    ERROR_OBTAIN_LOCATIONS,
} = locationTypes;

function locationsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {

        case OBTAIN_LOCATIONS: return { ...state, locations:action.payload };
        case CHANGE_LOCATION: return {...state, locationId:action.payload};
        case ERROR_OBTAIN_LOCATIONS : return {...state, error: action.payload }
        default: return state;
    }
}

const obtainLocationList = createSelector(
    state => state.campaignreducer.locations,
    campaignreducer => campaignreducer
);

const obtainIdLocation = createSelector(
    state => state.campaignreducer.locationId,
    campaignreducer => campaignreducer
);

export default locationsReducer ;

export {
    obtainLocationList,
    obtainIdLocation,
}
