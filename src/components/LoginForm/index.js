import React, { useState } from 'react';
import './index.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate email and password
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter email and password');
      return;
    }

    // Perform login action
    onLogin({ email, password });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
