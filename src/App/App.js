import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div>
        <h1>Hello</h1>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/reset">Reset Password</Link>
          </li>
        </ul>
      </div>
  );
}

export default App;