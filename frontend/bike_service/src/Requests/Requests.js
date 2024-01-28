import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Requests.css';
import bike from '../Assets/bike.svg';

const RequestsPage = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const location = useLocation();
  const [componentLoaded, setComponentLoaded] = useState(false);

console.log('Component rendered');

  const fetchServiceRequests = async () => {
    try {
      const response = await fetch('http://localhost:8088/v1/servicerequest/getall');
      if (response.ok) {
        const data = await response.json();
        console.log("fetch data", data)
        setServiceRequests(data);
      } else {
        console.error('Failed to fetch service requests');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  useEffect(() => {
    console.log('Component mounted or location changed');
    fetchServiceRequests();
  }, []);

  const acceptRequest = async (requestId) => {
    try {
      // Wyślij żądanie do serwera w celu zaktualizowania statusu akceptacji na podstawie `requestId`
      const response = await fetch(`http://localhost:8088/v1/servicerequest/accept/${requestId}`, {
        method: 'PUT',
      });

      if (response.ok) {
        console.log(`Request ${requestId} accepted successfully`);
        // Zaktualizuj lokalny stan po akceptacji żądania
        fetchServiceRequests();
      } else {
        console.error(`Failed to accept request ${requestId}`);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="base-container">
      {/* <nav className="nav">
        <img src={bike} alt="Bike Logo" />
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
      </nav> */}

      <main className="main">
        <header className="header">
          <div className="search-bar">
            <input placeholder="Search requests" />
          </div>
          <div className="add-request-button">
            <a href="/addRequest"><i className="fas fa-plus"></i>New Service</a>
          </div>
        </header>
      </main>

      <section className="requests">
        {serviceRequests.map(request => (
          <div key={request.id}>
            {/* Zmieniono src na odpowiednie pole z danymi obrazka */}
            <img src={`public/uploads/${request.image}`} alt="Bike" />
            <div>
              <h2>{request.bikeName}</h2>
              <p>{request.description}</p>
              <p>{`Price: ${request.price} zł`}</p>
              <p>{`Created at: ${request.creationTime ? new Date(request.creationTime) : 'N/A'}`}</p>
              <p name="isAccepted">{request.accepted ? 'Accepted' : 'Not yet accepted'}</p>
              <input
                name="accept-button"
                type="button"
                onClick={() => acceptRequest(request.id)}
                value="Accept"
                disabled={request.accepted}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RequestsPage;
