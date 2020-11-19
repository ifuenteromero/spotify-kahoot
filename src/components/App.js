import React from 'react';
import Login from './Login';
import '../stylesheets/app.scss';
import UserProfile from './UserProfile';
import { HashRouter, Route } from 'react-router-dom';
import { ProviderQuestion } from '../contexts/QuestionContext';
import Listening from './Listening';
import Question from './Question';
import Landing from './Landing';
import { ProviderLogin } from '../contexts/LoginContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <UserProfile />
      </header>
      <main className='main'>
        <ProviderLogin>
          <HashRouter>
            <Route path='/login' component={Login} />
            <ProviderQuestion>
              <ProtectedRoute path='/listening' component={Listening} />
              <ProtectedRoute path='/play' component={Question} />
              <ProtectedRoute exact path='/' component={Landing} />
            </ProviderQuestion>
          </HashRouter>
        </ProviderLogin>
      </main>
    </div>
  );
};

export default App;
