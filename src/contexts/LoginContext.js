import React, { createContext, useLayoutEffect, useState } from 'react';
import { http } from '../services/httpService';
import { setItem } from '../services/cacheService'
import { getTokenFromResponse } from '../utils/spotify';

export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProviderLogin = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const tokenKey = 'TOKEN';
  const getToken = async () => {
    const { access_token: _token } = getTokenFromResponse();
    window.location.hash = '';
    if (_token) {
      setItem(tokenKey, _token);
      http.ChangeToken(_token);
      setIsLogged(true);
    }
  };

  // useLayoutEffect(() => {
  useLayoutEffect(async () => {
    const token = localStorage.getItem(tokenKey);
    const _isLogged = !!token;
    setIsLogged(_isLogged);
    // Esto es código asíncrono
    // getToken();
    await getToken();
  }, []);

  return (
    <LoginContext.Provider value={{ isLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
