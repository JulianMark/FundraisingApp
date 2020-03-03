import { combineReducers} from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import campaignsReducer from './campaignsReducer';

export default combineReducers({
    usersReducer,
    postsReducer,
    campaignsReducer
});