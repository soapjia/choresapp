// Home.js
import React from 'react';
import './chorelist.css';
import Sidebar from './sidebar';
import ChoreTask from './choreTask.js';
import logo from './applogo.png';
import { Link } from 'react-router-dom';

const Chorelist = () => {
  return (
    <div className="home-page">
      <header className="header">
        <img className="logo" alt="Logo" src={logo} />
      </header>
      <Sidebar />
      <div className="div">

        <div className="halfTitle">Weekly Chores</div>
        <div className="weektime">For the week: Mon, Jan 8 to Sun, Jan 14</div>
        <div className="welcomeMessage">Hi Sophia, here are the chores for the week. Happy cleaning! 🧽</div>
        <div className="choreContainer" style={{ marginTop: '200px' }}> <ChoreTask /> </div>
      </div>
      <Link to="/recap">
      <button style={{ position: 'fixed', bottom: '0', left: '92%', transform: 'translateX(-50%)', marginBottom: '10px' }}>
            End Week
          </button>
        </Link>
    </div>
  );
};


export default Chorelist;