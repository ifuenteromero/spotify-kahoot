import React from 'react';
import '../stylesheets/login.scss';
import '../stylesheets/buttons.scss';
import { loginUrl, spotifyLogoUrl } from '../config/spotify';

const Login = () => {
  return (
    <div className='login'>
      <img src={spotifyLogoUrl} alt='spotify-logo' />
      <a className='button--primary' href={loginUrl}>
        login with spotify
      </a>
    </div>
  );
};

export default Login;
