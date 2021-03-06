import { FETCH_USER_PROFILE, EDIT_USER_PROFILE } from './types';
import axios from 'axios';


export const fetchUserProfile = (id) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/userprofile', {
                "id": id
            })
            dispatch({
                type: FETCH_USER_PROFILE,
                payload: res.data
            });

        } catch (err) {
            console.log('error', err)
        }
    };
}

export const editUserProfile = (user) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/editprofile', {
                "user": user
            })
            dispatch({
                type: EDIT_USER_PROFILE,
                payload: res.data
            });

        } catch (err) {
            console.log('error', err)
        }
    };
}