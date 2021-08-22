import { GET_SITE, ADD_SITE, EDIT_SITE, DELETE_SITE } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToSites' style={{ display: 'none' }} to="/site">a</Link>

export const getSite = () => dispatch => {
    api.get('site/get')
        .then(res => {
            dispatch({
                type: GET_SITE,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addSite = data => dispatch => {
    api.post(`site/post`, data)
        .then(res => {
            dispatch({
                type: ADD_SITE,
                payload: res.data
            });
            document.getElementById('GoToSites').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editSite = data => dispatch => {
    api.post(`site/put`, data)
        .then(res => {
            dispatch({
                type: EDIT_SITE,
                payload: res.data
            });
            document.getElementById('GoToSites').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const deleteSite = index => dispatch => {
    api.post(`site/delete/${index}`)
        .then(res => {
            dispatch({
                type: DELETE_SITE,
                payload: index
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};