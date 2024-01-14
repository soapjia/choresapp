// Home.js
import React from 'react';
import './chorelist.css';
import logo from './applogo.png';
import Sidebar from './sidebar';

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
        <div className="overlap-group">
          <div className="text-wrapper-8">Take out the trash</div>
          <p className="text-wrapper-9">Complete by: Sunday, January 14</p>
        </div>
        <div className="text-wrapper-10">To-do (1)</div>
        <div className="awaiting">Awaiting verification&nbsp;&nbsp;(1)</div>
        <div className="text-wrapper-11">Verified (1)</div>
        <div className="overlap-2">
          <div className="text-wrapper-8">Take out the trash</div>
          <div className="text-wrapper-9">Verified by: Bonnie</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-8">Take out the trash</div>
          <p className="text-wrapper-9">Complete by: Sunday, January 14</p>
        </div>
        <p className="roommatesTasks">View your roommates tasks this week:</p>
        <div className="overlap-4">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="overlap-5" />
          <div className="text-wrapper-12">Assigned to: Bonnie</div>
          <div className="text-wrapper-13">Clean the bathtub</div>
        </div>
        <div className="overlap-6">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="overlap-5" />
          <div className="text-wrapper-14">Assigned to: Bonnie</div>
          <div className="text-wrapper-13">Wipe the bathroom mirror</div>
        </div>
        <div className="overlap-7">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="overlap-5" />
          <div className="text-wrapper-12">Assigned to: Grace</div>
          <div className="text-wrapper-13">Fill the dishwasher</div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="overlap-5" />
          <div className="text-wrapper-12">Assigned to: Sherry</div>
          <p className="text-wrapper-13">Sweep the living room floor</p>
        </div>
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