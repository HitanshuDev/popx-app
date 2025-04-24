import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';


function App() {
  const location = useLocation();
  const path = location.pathname;
  const alignClass = path === '/' ? 'bottom-align' : 'top-align';

  return (
    <div className="app-container">
      <div className={`card ${alignClass}`}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

