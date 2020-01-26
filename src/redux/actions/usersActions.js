import axios from 'axios';
import { GET_ALL_USERS, LOADING, ERROR } from '../types/usersTypes';

export const allUsers = () => async(dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_ALL_USERS,
            payload: response.data
        })    
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal, intente más tarde.'
        })
    }
    
    
}