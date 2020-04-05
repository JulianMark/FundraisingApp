import { createSelector } from "reselect";

const initialState = {
    idEmployee: 1,
    idCampaign: 2,
    name: 'Pedro',
    lastname: 'Perez',
    loading: false,
    error: false,
}

function sessionReducer (state = initialState, action) {
    return state;
};

const getEmployeeId = createSelector(
    state => state.sessionreducer.idEmployee,
    sessionreducer => sessionreducer
);

const getCampaignId = createSelector(
    state => state.sessionreducer.idCampaign,
    sessionreducer => sessionreducer
);

const getName = createSelector(
    state => state.sessionreducer.name,
    sessionreducer => sessionreducer
);

const getLastname = createSelector(
    state => state.sessionreducer.lastname,
    sessionreducer => sessionreducer
);

function selectLoading(state) {
    return state.sessionreducer.loading;
}

function selectError(state) {
    return state.sessionreducer.error;
}

export default sessionReducer;

export {
    getEmployeeId,
    getCampaignId,
    getName,
    getLastname,
    selectLoading,
    selectError
}