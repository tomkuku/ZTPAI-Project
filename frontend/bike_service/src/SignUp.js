import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import bike from './Assets/bike.svg'

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
    userType: '1',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Przykładowa walidacja - sprawdzanie, czy hasło się powtarza
    if (formData.password !== formData.repeatPassword) {
      console.log('Passwords do not match');
    } else {
      try {
        console.log('preparing the user data: ', JSON.stringify(formData))

        // Wysyłanie danych do serwera przy użyciu funkcji fetch
        const response = await fetch('http://localhost:8088/v1/servicerequest/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('User created successfully');
          
          // Przekierowanie do /login po pomyślnym utworzeniu użytkownika
          navigate('/login');
        } else {
          console.error('Failed to create user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <form className="container">
      <div className="logo-container">
        <p className="logo-title">BikeService.com</p>
        <img src={bike} alt="Bike Logo" />
        <p className="logo-subtitle">Platform to service your bike online</p>
      </div>

      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account</p>

      <div className="spacer"></div>

      <div className="form-labels">
        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Name</b>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Surname</b>
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </label>

        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Email</b>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Password</b>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Repeat Password</b>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
        </label>

        {/* <label>
          <b style={{ textAlign: 'left' }}>User Type</b>
          <select
            className="user-type"
            name="userType"
            id="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="1">I'm user</option>
            <option value="2">I'm bike mechanic</option>
          </select>
        </label> */}

      {/* <div className="clearfix">
        
      </div> */}

      <Link to="/login">
          <button className="cancel-button" type="submit">
            Cancel
          </button>
        </Link>

      <button type="submit" className="sign-up-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
