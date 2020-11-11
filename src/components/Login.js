import React from 'react';
import '../stylesheets/login.scss';
import { loginUrl, spotifyLogoUrl } from '../utils/spotify';

const Login = () => {
  const test = process.env.REACT_APP_CLIENT_ID;
  const env = process.env;
  console.log({ env });
  console.log({ test });
  return (
    <div className='login'>
      <img src={spotifyLogoUrl} alt='spotify-logo' />
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
};

export default Login;
