import axios from 'axios';
import { getItem as getItemFromCache, removeItem as removeItemFromCache } from './cacheService';

export const http = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

// Esto no sería parte de http service, lo suyo es que tengas un cacheService
// que sea un capa por encima de localStorage para evitar que sea tan acoplado.
// const token = localStorage.getItem('TOKEN');
const token = getItemFromCache('TOKEN');
http.defaults.headers.common.Authorization = `Bearer ${token}`;

http.ChangeToken = token =>
  (http.defaults.headers.common.Authorization = `Bearer ${token}`);

const logout = () => {
  // Idem de lo anterior
  // localStorage.removeItem('TOKEN');
  removeItemFromCache('TOKEN');
};

http.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    const redirect = process.env.REACT_APP_REDIRECT_LOGIN;
    logout();
    window.location = redirect;
  } else {
    console.log('Ocurrió un error');
  }
  return Promise.reject(error);
});
