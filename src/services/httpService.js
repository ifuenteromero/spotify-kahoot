import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

http.ChangeToken = token =>
  (http.defaults.headers.common.Authorization = `Bearer ${token}`);
