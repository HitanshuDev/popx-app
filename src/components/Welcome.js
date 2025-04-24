import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="btn create-btn" onClick={() => navigate('/signup')}>Create Account</button>
      <button className="btn login-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
    </>
  );
}

export default Welcome;
