import React, { useState, useEffect } from 'react';
import "./recap.css";
import Sidebar from './sidebar';
import logo from './applogo.png';
const Recap = () => {

  //const [chores, setChores] = useState([]);
  const [choresAssigned, setChoresAssigned] = useState(8);
  const [choresCompleted, setChoresCompleted] = useState(7);
  const [choresMissing, setChoresMissing] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     
      const choresResponse = await fetch('http://localhost:3001/api/getChores');
      const choresData = await choresResponse.json();
      console.log(choresData);

      let choreCount = 0;
      let completedCount = 0;
      let missingCount = 0;
      for (let i=0; i < choresData.chores.length; i++) {
        choreCount++;

        if (choresData.chores[i].isVerified == '1') {
          completedCount++;
        } else {
          missingCount++;
        }
      }
      
      setChoresAssigned(choreCount);
      setChoresCompleted(completedCount);
      setChoresMissing(missingCount);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="chores-recap">
      <img className="logo" alt="Logo" src={logo} />
      <Sidebar />
      <div className="div">
        <div className="s-weekly-chores">Weekly Chores Recap</div>
        <p className="week">For the week: Mon, Jan 1 to Sun, Jan 7</p>
        <p className="that-s-almost">
          That’s almost perfect... too bad you didn't achieve it thanks to one housemate.
        </p>
        

        <div className="fastest-cleaner">The fastest cleaner:</div>
        <div className="last-minute">The last minute housemate:</div>
        <p className="dirtiest">The dirtiest of them all:</p>
        <p className="verifier">The verifier of the house:</p>
        <div className="bonnie">
          <div className="text-wrapper-11">Bonnie Qiu</div>
          <div className="ellipse" />
        </div>
        <div className="sophia">
          <div className="text-wrapper-11">Sophia Ma</div>
          <div className="ellipse" />
        </div>
        <div className="overlap-2">
          <div className="chores-assigned-text">Chores Assigned</div>
          <div className="no-chores">{choresAssigned}</div>
        </div>
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="overlap-3">
          <div className="text-wrapper-14">Chores Complete</div>
          <div className="no-chores">{choresCompleted}</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-16">Chores Missed</div>
          <div className="no-chores">{choresMissing}</div>
        </div>
        <div className="text-wrapper-17">Sophia Ma</div>
        <p className="text-wrapper-18">For the housemate that never misses trash day, always.</p>
        <div className="text-wrapper-19">The Trash Talker</div>
        <div className="text-wrapper-20">Sherry Shu</div>
        <p className="text-wrapper-21">
          For the housemate that makes sure there are plates and utensils available for everyone at their disposal.
        </p>
        <div className="text-wrapper-22">The Dish Destroyer</div>
        <div className="text-wrapper-23">Bonnie Qiu</div>
        <p className="text-wrapper-24">
          For the housemate that never lets the place look like no one even lives here based on the accumulation of
          dust.
        </p>
        <div className="text-wrapper-25">The Broom Buster</div>
        <div className="text-wrapper-26">Grace Zhou</div>
        <p className="for-the-housemate">
          <span className="span">For the housemate that always forgets to do their chores, that even the housemate forgets they live here due to their inactivity </span>
        </p>
        <div className="text-wrapper-30">The Forgetful Fourth</div>
        <div className="sherry">
          <div className="text-wrapper-11">Sherry Shu</div>
          <div className="ellipse" />
        </div>
        <div className="grace">
          <div className="text-wrapper-11">Grace Zhou</div>
          <div className="ellipse" />
        </div>
        <div className="housemate-roles"> 🚮 Housemate Roles 👀</div>
        <div className="housemate-archetype">🧙🏻 Housemate Archetype 🔮</div>
        <div className="chore-summary">🧹 Chore Summary🧹</div>
        <div className="summary">
          <div className="week-streak">0 weeks</div>
          <p className="text-wrapper-36">for all weekly chores completed in a row</p>
        </div>
        <div className="chore-streak">🔥 Chores Streak 🔥</div>
        <div className="longest-streak">Longest streak: 5 weeks</div>
        <p className="view-previous-weekly">View previous weekly recaps &gt;</p>
        <div className="profile-pic" />
        <div className="profile">
          <div className="text-wrapper-39">Sophia</div>
          <div className="text-wrapper-40">My Account</div>
        </div>
      </div>
    </div>
  );
};

export default Recap;