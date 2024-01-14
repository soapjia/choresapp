import React, { useState, useEffect } from 'react';
import "./recap.css";

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
      <div className="div">
        <div className="group">
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
        <div className="s-weekly-chores">&#39;s Weekly Chores Recap</div>
        <img className="logo" alt="Logo" src="logo.png" />
        <div className="overlap">
          <div className="rectangle-3" />
          <div className="text-wrapper">Chores Recap</div>
          <div className="text-wrapper-2">NFT Collection</div>
        </div>
        <div className="text-wrapper-3">Home</div>
        <div className="text-wrapper-4">View Chores</div>
        <div className="text-wrapper-5">View Members</div>
        <div className="text-wrapper-6">Log Out</div>
        <p className="p">For the week: Mon, Jan 1 to Sun, Jan 7</p>
        <p className="that-s-almost">
          That’s almost perfect... too bad you didn&#39;t achieve it thanks to one housemate.
        </p>
        <div className="text-wrapper-7">The fastest cleaner:</div>
        <div className="text-wrapper-8">The last minute housemate:</div>
        <p className="text-wrapper-9">The dirtiest of them all:</p>
        <p className="text-wrapper-10">The verifier of the house:</p>
        <div className="overlap-group">
          <div className="text-wrapper-11">Bonnie Qiu</div>
          <div className="ellipse" />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-11">Sophia Ma</div>
          <div className="ellipse" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-12">Chores Assigned</div>
          <div className="text-wrapper-13">{choresAssigned}</div>
        </div>
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="overlap-3">
          <div className="text-wrapper-14">Chores Complete</div>
          <div className="text-wrapper-15">{choresCompleted}</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-16">Chores Missed</div>
          <div className="text-wrapper-13">{choresMissing}</div>
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
          <span className="span">For the housemate that always forgets to do their chores, that even </span>
          <span className="text-wrapper-27">housemate</span>
          <span className="text-wrapper-28">&nbsp;</span>
          <span className="text-wrapper-29">forgets they live here due to their inactivity.</span>
        </p>
        <div className="text-wrapper-30">The Forgetful Fourth</div>
        <div className="overlap-5">
          <div className="text-wrapper-11">Sherry Shu</div>
          <div className="ellipse" />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-11">Grace Zhou</div>
          <div className="ellipse" />
        </div>
        <div className="text-wrapper-31">🧹Housemate Roles 🧹</div>
        <div className="text-wrapper-32">🧹Housemate Archetype 🧹</div>
        <div className="text-wrapper-33">🧹 Chore Summary 🧹</div>
        <div className="text-wrapper-34">123 Western Rd</div>
        <div className="overlap-7">
          <div className="text-wrapper-35">0 weeks</div>
          <p className="text-wrapper-36">for all weekly chores completed in a row</p>
        </div>
        <div className="text-wrapper-37">🧹 Chores Streak 🧹</div>
        <div className="text-wrapper-38">Longest streak: 5 weeks</div>
        <p className="view-previous-weekly">View previous weekly recaps &gt;</p>
        <div className="ellipse-2" />
        <div className="overlap-8">
          <div className="text-wrapper-39">Sophia</div>
          <div className="text-wrapper-40">My Account</div>
        </div>
      </div>
    </div>
  );
};

export default Recap;