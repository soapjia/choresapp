// Home.js
import React from 'react';
import './chorelist.css';
import Sidebar from './sidebar';
import ChoreTask from './choreTask.js';
import logo from './applogo.png';

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
        <ChoreTask />
        <div className="profileicon" />
        <div className="profile">
          <div className="text-wrapper-6">Sophia</div>
          <div className="text-wrapper-7">My Account</div>
        </div>
      </div>
    </div>
  );
};

export default Chorelist;