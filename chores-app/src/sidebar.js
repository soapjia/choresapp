// Sidebar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="/" className={`link ${location.pathname === '/chorelist' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/viewmembers" className={`link ${location.pathname === '/viewmembers' ? 'active' : ''}`}>
        View Members
      </Link>
      <div className="group">
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
    </div>
  );
};

export default Sidebar;