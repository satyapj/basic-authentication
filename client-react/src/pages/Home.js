import React from 'react';

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Basic Authentication</h1>
      <p className="lead">Basic authentication in React with React Router, Context API and State Hooks.</p>
      <hr className="my-4" />
      <p>For now it uses, hard-coded username &amp; password, that can be extended to use Fetch API to make async call to backend server. </p>
    </div>
  );
}

export default Home;