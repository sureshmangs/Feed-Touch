import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    dash: dashboardReducer,
    profile: profileReducer
})

export default rootReducer;