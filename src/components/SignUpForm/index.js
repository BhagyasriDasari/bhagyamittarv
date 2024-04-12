import React, { useState } from 'react';
import './index.css';

const SignUpForm = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Validate email and password
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter email and password');
      return;
    }

    // Perform sign-up action
    onSignUp({ email, password });
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
