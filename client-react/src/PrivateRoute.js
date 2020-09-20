/**
 * Wrapper component to protecte page components that need authentication.
 */


import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from './context';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  // console.log('PrivateRoute -> isAuthenticated: ', isAuthenticated);
  return <Route {...rest} render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />} />
}

export default PrivateRoute;