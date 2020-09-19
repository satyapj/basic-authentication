import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import { Home, Admin, Login, Signup, NoMatch } from './pages';
import { AppHeader, AppFooter } from './components';
import {AuthContext} from './context';

import PrivateRoute from './PrivateRoute';
import Dashbaord from './pages/Dashboard';

function App() {
  const existingAuthData = JSON.parse(localStorage.getItem('token'));
  const [authData, setAuthData] = useState(existingAuthData);
  console.log('Loading App > authData', authData);
  const setAuthenticated = (data) => {
    localStorage.setItem('token', JSON.stringify(data));
    setAuthData(data);
  }

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated: authData, setAuthenticated }}>
        <AppHeader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/dashboard" component={Dashbaord} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <AppFooter />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
