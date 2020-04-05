import { campaignTypes } from '../actions/campaignActions';
import { createSelector } from "reselect";

const INITIAL_STATE = {
    locations: [],
    locationId: '',
    errorLocation: '',
    oscs: [],
    oscId: '',
    errorOsc: '',
    campaignTypes: [],
    campaignId: '',
    errorCampaignTypes: '',
    campaignMaodalities: [],
    campaignModalityId: '',
    errorCampaignModalities: '',
};

const {
    OBTAIN_LOCATIONS,
    CHANGE_LOCATION,
    ERROR_OBTAIN_LOCATIONS,
    OBTAIN_OSCS,
    ERROR_OBTAIN_OSCS,
    CHANGE_OSC,
    OBTAIN_CAMPAIGN_TYPES,
    ERROR_OBTAIN_CAMPAIGN_TYPES,
    CHANGE_CAMPAIGN_TYPE,
    OBTAIN_CAMPAIGN_MODALITIES,
    ERROR_OBTAIN_CAMPAIGN_MODALITIES,
    CHANGE_CAMPAIGN_MODALITY,
} = campaignTypes;



function campaignReducer (state = INITIAL_STATE, action) {
    switch (action.type) {

        case OBTAIN_LOCATIONS: return { ...state, locations:action.payload };
        case CHANGE_LOCATION: return {...state, locationId:action.payload};
        case ERROR_OBTAIN_LOCATIONS : return {...state, errorLocation: action.payload }
        case OBTAIN_OSCS: return { ...state, oscs:action.payload };
        case CHANGE_OSC: return {...state, oscId:action.payload};
        case ERROR_OBTAIN_OSCS: return {...state, errorOsc: action.payload };
        case OBTAIN_CAMPAIGN_TYPES: return { ...state, campaignTypes:action.payload };
        case CHANGE_CAMPAIGN_TYPE: return {...state, campaignId:action.payload};
        case ERROR_OBTAIN_CAMPAIGN_TYPES: return {...state, errorCampaignTypes: action.payload };
        case OBTAIN_CAMPAIGN_MODALITIES: return { ...state, campaignMaodalities:action.payload };
        case CHANGE_CAMPAIGN_MODALITY: return {...state, campaignModalityId:action.payload};
        case ERROR_OBTAIN_CAMPAIGN_MODALITIES: return {...state, errorCampaignModalities: action.payload };
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

const obtainOscList = createSelector(
    state => state.campaignreducer.oscs,
    campaignreducer => campaignreducer
);

const obtainIdOsc = createSelector(
    state => state.campaignreducer.oscId,
    campaignreducer => campaignreducer
);

const obtainCampaignTypesList = createSelector(
    state => state.campaignreducer.campaignTypes,
    campaignreducer => campaignreducer
);

const obtainIdCampaignType = createSelector(
    state => state.campaignreducer.campaignId,
    campaignreducer => campaignreducer
);

const obtainCampaignModalitiesList = createSelector(
    state => state.campaignreducer.campaignMaodalities,
    campaignreducer => campaignreducer
);

const obtainIdCampaignModalityId = createSelector(
    state => state.campaignreducer.campaignModalityId,
    campaignreducer => campaignreducer
);

export default campaignReducer;

export {
    obtainLocationList,
    obtainIdLocation,
    obtainOscList,
    obtainIdOsc,
    obtainCampaignTypesList,
    obtainIdCampaignType,
    obtainCampaignModalitiesList,
    obtainIdCampaignModalityId,
}