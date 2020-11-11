import React, { useState } from 'react';
import '../stylesheets/app.scss';
import Login from './Login';

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <div className='app'>{token ? <div> estoy logado </div> : <Login />}</div>
  );
};

export default App;
