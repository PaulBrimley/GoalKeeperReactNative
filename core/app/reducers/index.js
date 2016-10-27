import { combineReducers } from 'redux';
import userReducer from './userReducer';
import applicationReducer from './applicationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    applicationState: applicationReducer
});

export default rootReducer;