import { GET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToCategory' style={{ display: 'none' }} to="/">a</Link>

export const getCategory = () => dispatch => {
    api.get('category/get')
        .then(res => {
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addCategory = data => dispatch => {
    api.post('category/post', data)
        .then(res => {
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            });
            document.getElementById('GoToCategories').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editCategory = data => dispatch => {
    api.post(`category/put`, data)
        .then(res => {
            dispatch({
                type: EDIT_CATEGORY,
                payload: res.data
            })
            document.getElementById('GoToCategories').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const deleteCategory = id => dispatch => {
    api.post(`category/delete/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};