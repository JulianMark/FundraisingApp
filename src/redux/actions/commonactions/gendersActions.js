import axios from 'axios';
import { myJsonGenderList } from '../genderList';

const OBTAIN_GENDERS = "obtain_genders_list";
const CHANGE_GENDER = "change_gender_id";
const ERROR_OBTAIN_GENDERS = "error_obtain_genders_list";

export const genderTypes = {
    OBTAIN_GENDERS,
    CHANGE_GENDER,
    ERROR_OBTAIN_GENDERS 
}

export const obtainGenders = () => async(dispatch) => {
    try {
        const response = myJsonGenderList;
        dispatch({
            type: OBTAIN_GENDERS,
            payload: response.data
        })    
    } catch (error) {
        dispatch({
            type: ERROR_OBTAIN_GENDERS,
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
