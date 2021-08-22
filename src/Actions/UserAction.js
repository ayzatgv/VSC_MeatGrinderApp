import { GET_USER, ADD_USER, EDIT_USER, DELETE_USER } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToUsers' style={{ display: 'none' }} to="/user">a</Link>

export const getUser = () => dispatch => {
    api.get('user/get')
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addUser = data => dispatch => {
    api.post(`user/post`, data)
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
            document.getElementById('GoToUsers').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editUser = data => dispatch => {
    api.post(`user/put`, data)
        .then(res => {
            dispatch({
                type: EDIT_USER,
                payload: res.data
            });
            document.getElementById('GoToUsers').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const deleteUser = index => dispatch => {
    api.post(`user/delete/${index}`)
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: index
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};