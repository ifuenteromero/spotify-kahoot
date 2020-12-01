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
import Finish from './Finish';

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <ProviderLogin>
          <ProtectedRoute
            path='/(|listening|play|finish)'
            render={() => (
              <header className='header'>
                <UserProfile />
              </header>
            )}
          />
          <main className='main'>
            <Route path='/login' component={Login} />
            <ProviderQuestion>
              <ProtectedRoute path='/listening' component={Listening} />
              <ProtectedRoute path='/play' component={Question} />
              <ProtectedRoute path='/finish' component={Finish} />
              <ProtectedRoute exact path='/' component={Landing} />
            </ProviderQuestion>
          </main>
        </ProviderLogin>
      </HashRouter>
    </div>
  );
};

export default App;
