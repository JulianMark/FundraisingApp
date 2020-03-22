import { combineReducers} from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import campaignsReducer from './campaignsReducer';
import gendersReducer from './gendersReducer'; 
import payTypesReducer from './payTypesReducer';
import addDonationReducer from './addDonationReducer';

export default combineReducers({
    usersReducer,
    postsReducer,
    campaignsReducer,
    gendersReducer,
    payTypesReducer,
    addDonationReducer,
});