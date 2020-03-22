import axios from 'axios';
import { myJsonGenderList } from './genderList';

import { OBTAIN_GENDERS, CHANGE_GENDER, LOADING, ERROR } from '../types/gendersTypes';

export const obtainGenders = () => async(dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = myJsonGenderList;
        dispatch({
            type: OBTAIN_GENDERS,
            payload: response.data
        })    
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal, intente más tarde.'
        })
    } 
}

export const changeGender = (value) =>{
    return {
        type: CHANGE_GENDER, 
        payload: value
    };  
}