import React from "react";
import "./viewmembers.css";
import Sidebar from "./sidebar.js";
import logo from './applogo.png';

export const Viewmembers = () => {
  return (
    <div className="view-members">
      <Sidebar />
      <div className="div">
        <div className="group">
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
        <div className="ellipse" />
        <div className="text-wrapper">Your Housemates</div>
        <div className="overlap-group">
          <div cCClassName="text-wrapper-2">Sophia</div>
          <div className="text-wrapper-3">My Account</div>
        </div>
        <div className="overlap">C
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Sophia Ma</div>
          <div className="text-wrapper-5">647-123-4567</div>
          <div className="text-wrapper-6">sophiama@gmail.com</div>
          <div className="text-wrapper-7">meow meow meow</div>
          <p className="personality">
            <span className="span">Personality:</span>
            <span className="text-wrapper-8"> -----</span>
          </p>
          <img className="line" alt="Line" src="line-1.svg" />
        </div>
        <img className="logo" alt="Logo" src="applogo.png" />
        <div className="div-wrapper">
          <div className="text-wrapper-9">View Members</div>
        </div>
        <div className="text-wrapper-10">Home</div>
        <div className="text-wrapper-11">View Chores</div>
        <div className="text-wrapper-12">Chores Recap</div>
        <div className="text-wrapper-13">Log Out</div>
        <div className="text-wrapper-14">NFT Collection</div>
        <p className="p">123 Western Rd (4 Members)</p>
        <div className="overlap-2">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Grace Zhou</div>
          <div className="text-wrapper-5">647-123-4567</div>
          <div className="text-wrapper-6">gracezhou@gmail.com</div>
          <p className="text-wrapper-7">I like long walks on the beach.</p>
          <p className="personality">
            <span className="span">Personality:</span>
            <span className="text-wrapper-8"> -----</span>
          </p>
          <img className="line" alt="Line" src="line-2.svg" />
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Sherry Shu</div>
          <div className="text-wrapper-5">647-123-4567</div>
          <div className="text-wrapper-6">sherryshu@gmail.com</div>
          <div className="text-wrapper-7">I like matcha :3</div>
          <p className="personality">
            <span className="span">Personality:</span>
            <span className="text-wrapper-8"> -----</span>
          </p>
          <img className="line" alt="Line" src="line-3.svg" />
        </div>
        <div className="overlap-4">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Bonnie Qiu</div>
          <div className="text-wrapper-5">647-123-4567</div>
          <div className="text-wrapper-6">bonnieqiu@outlook.com</div>
          <div className="text-wrapper-7">Always sleeping zzz</div>
          <p className="personality">
            <span className="span">Personality:</span>
            <span className="text-wrapper-8"> -----</span>
          </p>
          <img className="line" alt="Line" src="line-4.svg" />
        </div>
        <p className="text-wrapper-15">For the week: Mon, Jan 8 to Sun, Jan 14</p>
      </div>
    </div>
  );
};

export default Viewmembers;