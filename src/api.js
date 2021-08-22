import axios from 'axios';

const api = axios.create(
  {
    baseURL: `http://185.173.104.39:6132/api/`
  }
);

api.interceptors.request.use(
  async config => {
    config.headers = {
      'Authorization': "Bearer " + localStorage.getItem('Token'),
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default api;


//DEV baseURL: `https://localhost:44312/api/`
//DEPLOY baseURL: `http://185.173.104.39:6132/api/`
