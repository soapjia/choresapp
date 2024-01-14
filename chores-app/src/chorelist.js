// Home.js
import React from 'react';
import './chorelist.css';
import logo from './applogo.png';
import Sidebar from './sidebar';
import ChoreTask from './choreTask.js';

const Chorelist = () => {
  return (
    
    <div className="home-page">
      <Sidebar />
      <img className="logo" alt="Logo" src={logo} />
      <div className="div">
        <div className="halfTitle">Weekly Chores</div>
        <div className="weektime">For the week: Mon, Jan 8 to Sun, Jan 14</div>
        <p className="welcomeMessage">
          <span className="span">Hi Sophia, here are your chores for the week. Happy cleaning! 🧽</span>
        </p>
        <div className="profileicon" />
        <div className="profile">
          <div className="text-wrapper-6">Sophia</div>
          <div className="text-wrapper-7">My Account</div>
        </div>

        <ChoreTask />
        <div className="text-wrapper-10">To-do (1)</div>
        <div className="awaiting">Awaiting verification&nbsp;&nbsp;(1)</div>
        <div className="text-wrapper-11">Verified (1)</div>
        <p className="roommatesTasks">View your roommates tasks this week:</p>

        <div className="text-wrapper-15">Completion</div>
        <div className="roomie-verification">
          Roomie <br />
          Verification
        </div>
      </div>
    </div>
  );
};

export default Chorelist;