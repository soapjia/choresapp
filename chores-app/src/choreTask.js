import React, { useState, useEffect } from 'react';
import './choreTask.css';

const ChoreTask = () => {
    const [chores, setChores] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const choresResponse = await fetch('http://localhost:3001/api/getChores');
            const choresData = await choresResponse.json();
            console.log(choresData);
            setChores(choresData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  function renderChores() {
    try {
      if (chores.chores.length > 0) {
        return chores.chores.map((chore, index) => (
          <DynamicRectangle key={index} data={chore} />
        ));
      } else {
        return <p>No chores available. Add more chores.</p>;
      }
    } catch (error) {
      // Handle the error as needed
      console.error('Error rendering chores:', error);
      return <p>An error occurred while rendering chores.</p>;
    }
  }

  async function doneChore(data) {
    console.log('Done clicked!');
    console.log(data);
    
    try {
      await fetch('http://localhost:3001/api/done-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log("complete");

    } catch (error) {
      console.error('Error adding chore:', error);
    }
  } 

  async function verifyChore(data) {
    console.log('Verify clicked!');
    console.log(data);
    
    try {
      await fetch('http://localhost:3001/api/verified-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log("complete");

    } catch (error) {
      console.error('Error adding chore:', error);
    }
  } 



  const RectangleList = ({ chores }) => {
      return (
          <div>
              {renderChores()}
          </div>
      );
  };

  const DynamicRectangle = ({ data }) => {
      console.log(data);

      const doneButtonColor = data.isDone === '1' ? 'green-button' : 'red-button';
      const verifyButtonColor = data.isVerified === '1' ? 'green-button' : 'red-button';

      return (
          <div className="rectangle">
              <h3>{data.choreName}</h3>
              <p>Assigned to:</p>
              <p>{data.personName}</p>
              <div className="status">
                <p>Done</p>
                <button className={doneButtonColor} onClick={() => doneChore(data)}></button>
                <p>Verify</p>
                <button className={verifyButtonColor} onClick={() => verifyChore(data)}></button>
              </div>
          </div>
      );
  };

  return (
    <div>
        <h1>Your App</h1>
        <RectangleList chores={chores} />
    </div>
  );
  };

export default ChoreTask;