import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AuthContext from './context/AuthContext';

import { Home, Admin, Login, Signup, NoMatch } from './pages';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated: false }}>
        <AppHeader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/admin" component={Admin} />
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
