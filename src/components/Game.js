import React, { useEffect, useState } from 'react';
import { http } from '../services/httpService';
import Header from './Header';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Question from './Question';

const Game = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const { data: _user } = await http.get('/me');
    setUser(_user);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header user={user} />
      <HashRouter>
        <Route path='/play' component={Question} />
        <Route exact path='/' component={Landing} />
      </HashRouter>
    </>
  );
};

export default Game;
