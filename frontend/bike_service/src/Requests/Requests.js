// Requests.jsx

import React from 'react';
import './Requests.css';

const RequestsPage = ({ serviceRequests }) => {
  const acceptRequest = async (requestId) => {
    // Wyślij żądanie do serwera w celu zaktualizowania statusu akceptacji na podstawie `requestId`
    // Pobierz zaktualizowaną listę żądań usługi z serwera (lub zaktualizuj lokalny stan)
    // np. const updatedServiceRequests = await fetchUpdatedServiceRequests();
    
    // Uaktualnij lokalny stan zaktualizowaną listą
    // setServiceRequests(updatedServiceRequests);
  };

  return (
    <div className="base-container">
      <nav className="nav">
        <img src="public/img/bike-logo.svg" alt="Bike Logo" />
        <ul>
          <li>
            <i className="fa-solid fa-comments"></i>
            <a href="#" className="button">Chat</a>
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i>
            <a href="#" className="button">Calendar</a>
          </li>
          <li>
            <i className="fa-solid fa-user-group"></i>
            <a href="#" className="button">Community</a>
          </li>
          <li>
            <i className="fa-solid fa-bell"></i>
            <a href="#" className="button">Notifications</a>
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
            <a href="#" className="button">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <header className="header">
          <div className="search-bar">
            <input placeholder="Search requests" />
          </div>
          <div className="add-request-button">
            <a href="/addRequest"><i className="fas fa-plus"></i>New Service</a>
          </div>
        </header>
        <section className="requests">
          {serviceRequests.map(request => (
            <div key={request.id}>
              <img src={`public/uploads/${request.image}`} alt="Bike" />
              <div>
                <h2>{request.bikeName}</h2>
                <p>{request.description}</p>
                <p>{`Price: ${request.price} zł`}</p>
                <p>{`Created at: ${request.date}`}</p>
                <p name="isAccepted">{request.isAccepted ? 'Accepted' : 'Not yet accepted'}</p>
                <input
                  name="accept-button"
                  type="button"
                  onClick={() => acceptRequest(request.id)}
                  value="Accept"
                  disabled={request.isAccepted}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default RequestsPage;
