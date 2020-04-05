import axios from 'axios';
import { OBTAIN_CAMPAIGN, LOADING, ERROR } from '../types/campaignsTypes';

export const obtainCampaign = () => async(dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        let request = {'idCampaign': 1};
        const response = axios.post('http://localhost:9094//employee/manager/obtainStatusCampaign',request);
        dispatch({
            type: OBTAIN_CAMPAIGN,
            payload: (await response).data.employeeList
        })  
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal, intente más tarde.'
        })
    }
}