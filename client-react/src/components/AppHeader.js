import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context';

function AppHeader() {
  const location = useLocation();
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);
  let logInControls;

  function handleLogout() {
    setAuthenticated(false);
  }
  if (isAuthenticated) {
    logInControls = <button className="btn btn-link text-secondary" onClick={() => { handleLogout(); }}>Logout</button>;
  } else {
    logInControls = <Link to={{ pathname: '/login', state: { from: location.pathname } }}>Login</Link>;
  }
  return <header>
    <nav className="navbar navbar-expand navbar-light bg-light mb-4">
      <span className="navbar-brand mb-0 h1">App Navbar</span>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
      </ul>
      {logInControls}
    </nav>

  </header>
}

export default AppHeader;