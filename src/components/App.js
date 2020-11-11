import React, { useEffect, useState } from 'react';
import '../stylesheets/app.scss';
import Login from './Login';
import { getTokenFromResponse } from '../utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

  const getUser = async () => {
    const { access_token: _token } = getTokenFromResponse();
    window.location.hash = '';

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      const user = await spotify.getMe();
      console.log({ user });
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='app'>{token ? <div> estoy logado </div> : <Login />}</div>
  );
};

export default App;
