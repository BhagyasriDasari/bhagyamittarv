import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Function to handle login action
  const handleLogin = ({ email, password }) => {
    // Simulate login by setting user data
    setUserData({ email });
    setIsLoggedIn(true);
  };

  // Function to handle sign-up action
  const handleSignUp = ({ email, password }) => {
    // Simulate sign-up by setting user data
    setUserData({ email });
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Homepage userData={userData} />
      ) : (
        <div className="auth-container">
          <div className="auth-form">
            <LoginForm onLogin={handleLogin} />
          </div>
          <div className="auth-form">
            <SignUpForm onSignUp={handleSignUp} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
