import axios from 'axios';

export const allPosts = () => async(dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: 'getAllPost',
        payload: response.data
    }) 
}