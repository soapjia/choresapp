import React, { useState, useEffect } from 'react';
import './editlist.css';


const App = () => {
  const [roommates, setRoommates] = useState([]);
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const roommatesResponse = await fetch('http://localhost:3001/api/getRoommates');
      const roommatesData = await roommatesResponse.json();
      console.log(roommatesData);
      setRoommates([roommatesData]);

      const choresResponse = await fetch('http://localhost:3001/api/getChores');
      const choresData = await choresResponse.json();
      console.log(choresData);
      setChores([choresData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addChore = async () => {
    if (newChore.trim() !== '') {
      try {
        await fetch('http://localhost:3001/api/addChore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id:"1", isDone:"0", isVerified:"0", choreName:{newChore}, personName:"" }),
        });

        fetchData();

        setNewChore('');
      } catch (error) {
        console.error('Error adding chore:', error);
      }
    }
  };

  return (
    <div className="editlist-container">
      <h2 className="editlist-header">Editlist Page</h2>

      <div className="list-container">
        <div className="list">
          <h3>Roommates:</h3>
          <ul>
            {roommates.map((roommate, index) => (
              <li key={index}>{JSON.stringify(roommate)}</li>
            ))}
          </ul>
        </div>

        <div className="list">
          <h3>Chores:</h3>
          <ul>
            {chores.map((chore, index) => (
              <li key={index}>{JSON.stringify(chore)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="add-chore-container">
        <input
          type="text"
          placeholder="New Chore..."
          value={newChore}
          onChange={(e) => setNewChore(e.target.value)}
        />
        <button className="add-chore-button" onClick={addChore}>
          Add Chore
        </button>
      </div>
    </div>
  );
};

export default App;
