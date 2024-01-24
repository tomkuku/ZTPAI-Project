import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpPage from './SignUp';
import LoginPage from './Login';

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

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
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
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
