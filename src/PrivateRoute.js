/**
 * Wrapper component to protecte page components that need authentication.
 */


import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import AuthContext from './context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('PrivateRoute -> isAuthenticated: ', isAuthenticated);
  return <Route {...rest} render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />} />
}

export default PrivateRoute;