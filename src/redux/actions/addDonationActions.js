import axios from 'axios';
import {  
    CHANGE_NAME,
    CHANGE_LASTNAME,
    CHANGE_AGE,
    CHANGE_DNI, 
    CHANGE_AMOUNT,
    RELOAD, 
    ADD_DONATION,
    LOADING,
    ERROR,

} from '../types/addDonationTypes';

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

export const changeDni = (value) =>{
    return {
        type: CHANGE_DNI, 
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

export const addDonation = (request) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try{
        const response = await axios.post('http://localhost:9093/employee/donation/add',request);
        dispatch({
            type: ADD_DONATION,
            payload:response
        })
    } catch (e) {
        console.log("entra al catch");
        dispatch({
            type:ERROR,
            payload:true
        })
    }
}
