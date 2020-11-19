import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const { isLogged } = useContext(LoginContext);
  console.log('redirect');
  return (
    <Route
      {...rest}
      path={path}
      render={props => {
        if (!isLogged) return <Redirect to='/login' />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
