// Sidebar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="/chorelist" className={`link ${location.pathname === '/chorelist' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/editlist" className={`link ${location.pathname === '/editlist' ? 'active' : ''}`}>
        Edit Chores
      </Link>
    </div>
  );
};

export default Sidebar;