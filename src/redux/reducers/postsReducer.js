//import { GET_ALL_USERS, LOADING, ERROR } from '../types/usersTypes'

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}