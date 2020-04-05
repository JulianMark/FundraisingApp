import { combineReducers} from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import campaignsReducer from './campaignsReducer';
import gendersreducer from './commonreducers/gendersreducer'; 
import paytypesreducer from './paytypesreducer';
import donationreducer from './donationreducer';
import sessionreducer from './sessionreducer';
import dnireducer from './commonreducers/dnireducer';
import campaignreducer from './campaignreducer';

export default combineReducers({
    usersReducer,
    postsReducer,
    campaignsReducer,
    gendersreducer,
    paytypesreducer,
    donationreducer,
    sessionreducer,
    dnireducer,
    campaignreducer,
});