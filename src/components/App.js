import React, { useEffect, useState } from 'react';
import '../stylesheets/app.scss';
import Login from './Login';
import { getTokenFromResponse } from '../utils/spotify';
import Game from './Game';
import { http } from '../services/httpService';
import variables from '../stylesheets/user.scss';

const App = () => {
  const [token, setToken] = useState(null);

  const getToken = async () => {
    const { access_token: _token } = getTokenFromResponse();
    window.location.hash = '';
    if (_token) {
      setToken(_token);
      http.ChangeToken(_token);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div className='app'>{token ? <Game /> : <Login />}</div>;
};

export default App;
