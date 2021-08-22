import { SET_LOGINSTATUS } from './types';

export const setLoginStatus = (payload) => {
    return {
        type: SET_LOGINSTATUS,
        payload
    }
}