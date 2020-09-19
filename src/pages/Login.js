import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../context';
import './Login.css';

function Login({ location }) {

  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState('demo@demo.com');
  const [password, setPassword] = useState('pass123');
  const [isError, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(`time to do something for login for ${username} and ${password}`);
    // validate credential via fetch API, for now let's use hard-coded values.
    if (username === 'demo@demo.com' && password === 'pass123') {
      setAuthenticated(true);
    } else {
      setError(true);
    }
  }

  if (isAuthenticated) {
    const redirectpath = location.state.from || '';
    return (<Redirect to={redirectpath} />);
  }

  return (
    <div className="login-container">
      <div className="flex-item">
        <h2>Login</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="username" required onChange={e => setUsername(e.target.value)} value={username} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" required onChange={e => setPassword(e.target.value)} value={password} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button> or <Link to="/signup">Signup</Link>
          {isError && <p>Either of username or password is incorrect.</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;