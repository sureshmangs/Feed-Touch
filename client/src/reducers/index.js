import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    dash: dashboardReducer
})

export default rootReducer;