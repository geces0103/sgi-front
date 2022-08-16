import { combineReducers } from 'redux';
import { userReducer } from './components/body/user/UserReducer.js';

const storeRedux = combineReducers({
    reduxUserReducer: userReducer
});

export default storeRedux;