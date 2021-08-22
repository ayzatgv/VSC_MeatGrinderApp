import { GET_CLUSTER, ADD_CLUSTER, EDIT_CLUSTER, DELETE_CLUSTER } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToClusters' style={{ display: 'none' }} to="/cluster">a</Link>

export const getCluster = () => dispatch => {
    api.get('cluster/get')
        .then(res => {
            dispatch({
                type: GET_CLUSTER,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addCluster = data => dispatch => {
    api.post(`cluster/post`, data)
        .then(res => {
            dispatch({
                type: ADD_CLUSTER,
                payload: res.data
            });
            document.getElementById('GoToClusters').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editCluster = data => dispatch => {
    api.post(`cluster/put`, data)
        .then(res => {
            dispatch({
                type: EDIT_CLUSTER,
                payload: res.data
            });
            document.getElementById('GoToClusters').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const deleteCluster = index => dispatch => {
    api.post(`cluster/delete/${index}`)
        .then(res => {
            dispatch({
                type: DELETE_CLUSTER,
                payload: index
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};