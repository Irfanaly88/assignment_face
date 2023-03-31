import React, { useState } from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import "./login.css"
const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username=="foo" && password=="bar"){
     setAuth(true);
     navigate('/home');

    }

  };

  return (
    <div className='signUp'>
      
      <form onSubmit={handleSubmit}>
      <h1>To see your Contact Please Login..</h1>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default Signup;
