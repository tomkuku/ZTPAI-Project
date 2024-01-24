
import React from 'react';
import './Login.css';
import bike from './Assets/bike.svg'

const LoginPage = () => {
  return (
    <form action="login" method="post" className="container">
      <div className="logo-container">
        <p className="logo-title">BikeService.com</p>
        <img src={bike} alt="Bike Logo" className="avatar" />
        <p className="logo-subtitle">Platform to service your bike online</p>
      </div>

      <h1>Login</h1>

      <div className="message">
        {/* Miejsce na wyświetlanie komunikatów */}
      </div>

      <label>
        <b>Username</b>
        <input type="text" placeholder="Email" name="email" />
      </label>

      <label>
        <b>Password</b>
        <input type="password" placeholder="Password" name="password" />
      </label>

      <button className="login-button" type="submit">
        Login
      </button>
      <input className="sign-up-button" type="submit" name="sign-up-button" value="Sign Up" />
    </form>
  );
};

export default LoginPage;
