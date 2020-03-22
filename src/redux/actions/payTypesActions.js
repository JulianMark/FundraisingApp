import axios from 'axios';
import { myJsonPayTypeList  } from './payTypeList';

import { OBTAIN_PAYTYPES, CHANGE_PAYTYPE, LOADING, ERROR } from '../types/payTypesTypes';

export const obtainPayTypes = () => async(dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = myJsonPayTypeList ;
        dispatch({
            type: OBTAIN_PAYTYPES,
            payload: response.payTypesList
        })    
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal, intente más tarde.'
        })
    } 
}

export const changePayType = (value) =>{
    return {
        type: CHANGE_PAYTYPE, 
        payload: value
    };  
}