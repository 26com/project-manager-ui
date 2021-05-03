import axios from 'axios';

import cons from '../constants';
import changeLogining from './changeLogining';

const clientAPI = axios.create({
  baseURL: cons.url,
  responseType: 'json',
});

clientAPI.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  request.headers.Authorization = localStorage.access_token;
  request.headers.withCredentials = true;
  return request;
});

clientAPI.interceptors.response.use((response) => response, (error) => {
  if (error && error.response) {
    if (error.response.status === 401) {
      changeLogining(false);
    }
    return Promise.reject(error);
  }

  return Promise.resolve();
});

export default clientAPI;
