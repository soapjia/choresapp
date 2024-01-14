import React, { useState, useEffect } from 'react';
import './choreTask.css'

const ChoreTask = () => {
    /*
    const [roommates, setRoommates] = useState([]);
    const [chores, setChores] = useState([]);

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

            const choresResponse = await fetch('http://localhost:3001/api/getChores');
            const choresData = await choresResponse.json();
            console.log(choresData);
            setChores(choresData);

        } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    */

    // Simulated data or fetch data from your database
    const rectanglesData = [
        { title: 'Rectangle 1', description: 'Description 1' },
        { title: 'Rectangle 2', description: 'Description 2' },
        // Add more data as needed
    ];

    // returns a list of rectangle objects to be displayed
    return (
        <div>
          <h1>Your App</h1>
          <RectangleList rectangles={rectanglesData} />
        </div>
    );
};

// create a list of the rectangles to be returned
const RectangleList = ({ rectangles }) => {
    return (
        <div>
          {rectangles.map((rectangle, index) => (
            <DynamicRectangle key={index} data={rectangle} />
          ))}
        </div>
      );
  };

  // create rectangle
  const DynamicRectangle = ({ data }) => {
    return (
      <div className="rectangle">
        <h3>{data.title}</h3>
        <p>Assigned to:</p>
        <p>{data.description}</p>
      </div>
    );
  };
  
export default ChoreTask;