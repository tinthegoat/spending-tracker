import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import './App.css';

function App() {
  return (
    <Router>
      <nav className='nav-container'>
        <p className='heading'>SpendWise</p>
        <div className='navbar'>
          <Link className='navLink' to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link className='navLink' to="/journal">Journal</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<Journal />} />
        {/* Optional: 404 page */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
