import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="flex-item">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="username" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button> or <Link to="/signup">Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;