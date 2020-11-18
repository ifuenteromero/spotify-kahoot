import React, { useEffect, useState } from 'react';
import { http } from '../services/httpService';
import UserProfile from './UserProfile';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Question from './Question';
import Listening from './Listening';
import { ProviderQuestion } from '../contexts/QuestionContext';

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
      <header className='header'>
        <UserProfile user={user} />
      </header>
      <main className='main'>
        <HashRouter>
          <ProviderQuestion>
            <Route path='/listening' component={Listening} />
            <Route path='/play' component={Question} />
            <Route exact path='/' component={Landing} />
          </ProviderQuestion>
        </HashRouter>
      </main>
    </>
  );
};

export default Game;
