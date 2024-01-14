import React, { useState, useEffect } from 'react';
import './editlist.css';


const App = () => {
  const [roommates, setRoommates] = useState([]);
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState('');

  const [roommateNameList, setRoommateNameList] = useState([]); // State for roommates' names
  const [choreNameList, setChoreNameList] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const roommatesResponse = await fetch('http://localhost:3001/api/getRoommates');
      const roommatesData = await roommatesResponse.json();
      console.log(roommatesData);
      setRoommates(roommatesData);

      // roomateData => {roomates: [{name: 'name'}]}
      console.log(JSON.parse(JSON.stringify(roommatesData)));

      // for (let i = 0; i < roommatesData.roommates.length; i++) {
      //   const roommateTemp = roommatesData.roommates[i];
      //   console.log(roommateTemp.personName);
      //   let isAlready = "false";

      //   for (let j = 0; j < roommateNameList.length; j++) {
      //     if (roommateTemp.personName == roommateNameList[i]) {
      //       isAlready = "true";
      //     }
      //   }

      //   if (isAlready == "false") {
      //     roommateNameList.push(roommateTemp.personName)
      //   }
      // }

      // console.log(roommateNameList);

      const choresResponse = await fetch('http://localhost:3001/api/getChores');
      const choresData = await choresResponse.json();
      console.log(choresData);
      setChores(choresData);

      
      // for (let i = 0; i < choresData.chores.length; i++) {
      //   const choreTemp = choresData.chores[i].id;

      //   if ( choreTemp >= largestId) {
      //     largestId = choreTemp;
      //     console.log("largest id:" + largestId);
      //   }
      // }

    //   for (let i = 0; i < choresData.chores.length; i++) {
    //     const choreTemp = choresData.chores[i];
    //     console.log(choreTemp.choreName);
    //     let isAlready = "false";

    //     for (let j = 0; j < choreNameList.length; j++) {
    //       if (choreTemp.choreName == choreNameList[i]) {
    //         isAlready = "true";
    //       }
    //     }

    //     if (isAlready == "false") {
    //       choreNameList.push(choreTemp.choreName);
    //     }
    //   }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addChore = async () => {
    if (newChore.trim() !== '') {
      try {
        const largestIdResponse = await fetch('http://localhost:3001/api/getLargestId');
        const largestIdTemp = await largestIdResponse.json();
        const largestId = await largestIdTemp.largestId;
        console.log(largestId);
        
        await fetch('http://localhost:3001/api/addChore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id:largestId, isDone:"0", isVerified:"0", choreName:newChore, personName:"" }), //dom't really need an id
        });

        console.log("complete");

        await fetchData();

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
          {
            roommates.roommates
            ? <ul>
              {roommates.roommates.map((roommate) => (
                <li>{roommate.personName}</li>
              ))}
            </ul>
            : <p>Add more roomates</p>
          }
          
        </div>

        <div className="list">
          <h3>Chores:</h3>
          {
            chores.chores
            ? 
            <ul>
              {chores.chores.map((chore) => (
                <li>{chore.choreName}</li>
              ))}
            </ul>
            : <p>Add more chores</p>
          }
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
