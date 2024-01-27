import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import bike from '../Assets/bike.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Wykonaj request do serwera
    try {
      const response = await fetch(`http://localhost:8088/v1/user/getByEmail?email=${email}`);
      if (response.status === 404) {
        setError('Nie znaleziono użytkownika!');
      } else if (response.status === 200) {
        const user = await response.json();

        if (user.password === password) {
          setError('OK');
          console.log("Passwords match!")
        } else {
          setError('Niepoprawne hasło!');
        }
      } else {
        setError('Błąd logowania. Spróbuj ponownie.');
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
      setError('Błąd logowania. Spróbuj ponownie.');
    }
  };

  return (
    <form className="container">
      <div className="logo-container">
        <p className="logo-title">BikeService.com</p>
        <img src={bike} alt="Bike Logo" className="avatar" />
        <p className="logo-subtitle">Platform to service your bike online</p>
      </div>

      <h1>Login</h1>

      <div className="message" style={{ color: 'red' }}>
        {error}
      </div>

      <label>
        <b>Email</b>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <b>Password</b>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button className="login-button" type="submit" onClick={handleLogin}>
        Login
      </button>

      <Link to="/signup">
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      </Link>
    </form>
  );
};

export default LoginPage;
