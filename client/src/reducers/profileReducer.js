import { FETCH_USER_PROFILE, EDIT_USER_PROFILE } from '../actions/types';

const USER_PROFILE_DEFAULT_STATE = {
    userProfile: {}
}

export default (state = USER_PROFILE_DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            }
        case EDIT_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            }
        default:
            return {
                ...state
            }
    }
}