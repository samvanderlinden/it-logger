import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
    log: logReducer, //'log' is the state of our logs
    tech: techReducer
});