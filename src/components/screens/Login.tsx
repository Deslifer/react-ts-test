import React, { useEffect, useState } from 'react';
import '../styles/LoginRegister.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(
          '/contacts',
        );
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Main">
      <div className="Container">
        <p className="Label">Login</p>
        <input
          id="name"
          type="text"
          className="TextBox"
          placeholder="&#xf0e0; Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="TextBox"
          placeholder="&#xf023; Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="button" className="Button" onClick={handleLogin}>Login</button>
        <Link to="/register" className="LinkText">Register now</Link>
      </div>
    </div>
  );
}

export default Login;
