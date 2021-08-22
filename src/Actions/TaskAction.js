import { GET_TASK, ADD_TASK, EDIT_TASK, STATUS_TASK, DELETE_TASK } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToTasks' style={{ display: 'none' }} to="/task">a</Link>

export const getTask = () => dispatch => {
    api.get('task/get')
        .then(res => {
            dispatch({
                type: GET_TASK,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addTask = data => dispatch => {
    api.post(`task/post`, data)
        .then(res => {
            dispatch({
                type: ADD_TASK,
                payload: res.data
            });
            document.getElementById('GoToTasks').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editTask = data => dispatch => {
    api.post(`task/put`, data)
        .then(res => {
            dispatch({
                type: EDIT_TASK,
                payload: res.data
            });
            document.getElementById('GoToTasks').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const statusTask = data => dispatch => {
    api.post(`task/status`, data)
        .then(res => {
            dispatch({
                type: STATUS_TASK,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const deleteTask = index => dispatch => {
    api.post(`task/delete/${index}`)
        .then(res => {
            dispatch({
                type: DELETE_TASK,
                payload: index
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};