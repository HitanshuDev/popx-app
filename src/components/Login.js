import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('marrydoe@gmail.com');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    navigate('/profile');
  };



  return (
    <>
      <h2>Signin to your <br /> PopX account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button className="btn login-submit" type="submit">Login</button>
      </form>
      <button className="btn back-btn" onClick={() => navigate(-1)}>← Back</button>
    </>
  );
}

export default Login;
