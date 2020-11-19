import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

const token = localStorage.getItem('TOKEN');
http.defaults.headers.common.Authorization = `Bearer ${token}`;

http.ChangeToken = token =>
  (http.defaults.headers.common.Authorization = `Bearer ${token}`);

const logout = () => {
  localStorage.removeItem('TOKEN');
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
