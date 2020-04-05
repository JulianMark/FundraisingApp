import axios from 'axios';
import {  
    CHANGE_NAME,
    CHANGE_LASTNAME,
    CHANGE_AGE,
    CHANGE_AMOUNT,
    RELOAD, 
    DONATION_REQUEST,
    LOADING,
    ERROR,

} from '../types/donationTypes';

export const changeName = (value) =>{
    return {
        type: CHANGE_NAME, 
        payload: value
    };  
}

export const changeLastname = (value) =>{
    return {
        type: CHANGE_LASTNAME, 
        payload: value
    };  
}

export const changeAge = (value) =>{
    return {
        type: CHANGE_AGE, 
        payload: value
    };  
}

export const changeAmount = (value) =>{
    return {
        type: CHANGE_AMOUNT, 
        payload: value
    };  
}

export const reloadForm = () => {
    console.log("se reinicia form");
    return {
        type: RELOAD
    }; 
}

export const donationRequest = (request) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try{
        const response = await axios.post('http://localhost:9093/employee/donation/add',request);
        dispatch({
            type: DONATION_REQUEST,
            payload:response
        })
    } catch (e) {
        dispatch({
            type:ERROR
        })
    }
}
