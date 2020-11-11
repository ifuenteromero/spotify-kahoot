import React from 'react';
import '../stylesheets/login.scss';
import { loginUrl, spotifyLogoUrl } from '../utils/spotify';

const Login = () => {
  return (
    <div className='login'>
      <img src={spotifyLogoUrl} alt='spotify-logo' />
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
};

export default Login;
