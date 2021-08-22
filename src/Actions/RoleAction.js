import { GET_ROLE } from './types';
import api from '../api';

export const getRole = () => dispatch => {
    api.get('role/get')
        .then(res => {
            dispatch({
                type: GET_ROLE,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};