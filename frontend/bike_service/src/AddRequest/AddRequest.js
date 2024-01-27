import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddRequest.css';

const AddRequestPage = () => {
  const [formData, setFormData] = useState({
    bikename: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      bikeName: formData.bikename,
      description: formData.description,
      price: formData.price,
      ownerId: 1,
    };

    try {
      const response = await fetch('http://localhost:8088/v1/servicerequest/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Request sent successfully');
      } else {
        console.error('Failed to send request');
      }
    } catch (error) {
      console.error('Network error:', error);
    }

    setFormData({
      bikename: '',
      description: '',
      price: '',
    });
  };

  return (
    <div className="base-container">
      <form onSubmit={handleSubmit}>
        <h1>We'll service your bike!</h1>
        <div className="messages">
          {/* Tutaj można umieścić komponent wyświetlający wiadomości */}
        </div>
        <input
          name="bikename"
          type="text"
          placeholder="Bike name"
          value={formData.bikename}
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows="5"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <button className="submit-button" type="submit">
          Send
        </button>

        <Link to="/requests" className="cancel-button-link">
          <button className="cancel-button" type="submit">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddRequestPage;
