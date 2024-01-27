import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import bike from './Assets/bike.svg';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    type: '1',
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
    // if (formData.password !== formData.repeatPassword) {
    //   console.log('Passwords do not match');
    // } else {
      // Usunięcie pola repeatPassword z obiektu przed wysłaniem
      const { repeatPassword, ...dataToSend } = formData;

      try {
        console.log('preparing the user data: ', JSON.stringify(dataToSend));

        // Wysyłanie danych do serwera przy użyciu funkcji fetch
        const response = await fetch('http://localhost:8088/v1/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });

        // Tutaj będziesz musiał dostosować obsługę odpowiedzi w zależności od potrzeb
        console.log(response);

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
    // }
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
          <b style={{ textAlign: 'left' }}>First Name</b>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>

        <label className="input-container">
          <b style={{ textAlign: 'left' }}>Last Name</b>
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
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
