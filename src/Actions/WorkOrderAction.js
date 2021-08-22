import { GET_WO_OPEN, GET_WO_OPEN7DAY, GET_WO_OPENSLAPASS, GET_WO_COMPLETEPASS, GET_WO_OPENLEVELONE } from './types';
import api from '../api';

export const getOpen = () => dispatch => {
    api.get('work_order/getopen')
        .then(res => {
            dispatch({
                type: GET_WO_OPEN,
                payload: res.data
            });
            dispatch({
                type: GET_WO_OPENLEVELONE,
                payload: res.data.filter((item) => item.Priority === 1)
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const getOpen7Day = () => dispatch => {
    api.get('work_order/getopen7day')
        .then(res => {
            dispatch({
                type: GET_WO_OPEN7DAY,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const getOpenSLApass = () => dispatch => {
    api.get('work_order/getopenslapass')
        .then(res => {
            dispatch({
                type: GET_WO_OPENSLAPASS,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const getCompletePass = () => dispatch => {
    api.get('work_order/getcompletepass')
        .then(res => {
            dispatch({
                type: GET_WO_COMPLETEPASS,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};