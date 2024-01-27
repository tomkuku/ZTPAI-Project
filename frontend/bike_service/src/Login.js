import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import bike from './Assets/bike.svg';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Wysłanie danych do serwera przy użyciu funkcji fetch
      const response = await fetch('http://localhost:8088/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Pobranie danych z odpowiedzi serwera
        const users = await response.json();

        // Sprawdzenie, czy email i hasło się zgadzają
        const user = users.find((u) => u.email === formData.email && u.password === formData.password);

        if (user) {
          // Zalogowano pomyślnie, przekierowanie do "abc"
          navigate('/abc');
        } else {
          // Nieprawidłowe dane logowania
          setErrorMessage('Invalid email or password');
        }
      } else {
        // Błąd podczas próby logowania
        setErrorMessage('Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
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
        {errorMessage}
      </div>

      <label>
        <b>Username</b>
        <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>

      <label>
        <b>Password</b>
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
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
