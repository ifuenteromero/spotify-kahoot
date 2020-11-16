import React, { useEffect, useState } from 'react';
import { http } from '../services/httpService';
import Header from './Header';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';

const Game = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const { data: _user } = await http.get('/me');
    setUser(_user);
    console.log({ _user });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header user={user} />
      <HashRouter>
        <Route path='/play' component={Player} />
        <Route exact path='/' component={Landing} />
      </HashRouter>
    </>
  );
};

export default Game;
