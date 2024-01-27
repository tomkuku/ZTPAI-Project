import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpPage from './SignUp/SignUp';
import LoginPage from './Login/Login';
import RequestsPage from './Requests/Requests';
import AddRequestPage from './AddRequest/AddRequest';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up Page</h2>
      {/* Zawartość strony SignUp */}
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      {/* Zawartość strony About */}
    </div>
  );
};

const Reuests = () => {
  return (
    <div>
      <h2>Reuests Page</h2>
      {/* Zawartość strony Contact */}
    </div>
  );
};

const AddReuest = () => {
  return (
    <div>
      <h2>Add Request Page</h2>
      {/* Zawartość strony Contact */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Reszta kodu nagłówka */}
          <nav>
            <ul>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/contact">Reuests</Link>
              </li>
              <li>
                <Link to="/addrequest">Add reuest</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reuests" element={<RequestsPage />} />
          <Route path="/addrequest" element={<AddRequestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
