import React, { useState } from 'react';
import './SignUp.css';
import bike from './Assets/bike.svg'

const SignUp = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tutaj możesz dodać logikę obsługi formularza, np. wysłanie danych do serwera

    // Przykładowa walidacja - sprawdzanie, czy hasło się powtarza
    if (formData.password !== formData.repeatPassword) {
      console.log('Passwords do not match');
    } else {
      // Tutaj możesz obsłużyć logikę zapisywania danych użytkownika
      console.log('Form data:', formData);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="logo-container">
        <p className="logo-title">BikeService.com</p>
        <img src={bike} alt="Bike Logo" />
        <p className="logo-subtitle">Platform to service your bike online</p>
      </div>

      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account</p>

      <div className="spacer"></div>

      <div className="form-labels">
        <label>
          <b style={{ textAlign: 'left' }}>Name</b>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <b style={{ textAlign: 'left' }}>Surname</b>
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <b style={{ textAlign: 'left' }}>Email</b>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <b style={{ textAlign: 'left' }}>Password</b>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <label>
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

        <div className="clearfix">
        <input
          className="cancel-button"
          type="button"
          name="cancel-button"
          value="Cancel"
        />
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </div>
      </div>
    </form>
  );
};

export default SignUp;
