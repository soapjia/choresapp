// Recap.js
import React, { useState } from 'react';
import Person from './Person';

const Recap = () => {
  // Sample data for people
  const initialPeople = [
    { id: 1, name: 'Person 1', points: 10 },
    { id: 2, name: 'Person 2', points: 5 },
    // Add more people as needed
  ];

  const [people, setPeople] = useState(initialPeople);

  const handleAddChores = () => {
    // Implement the logic to add chores (you can modify points, etc.)
    // For now, let's just log a message
    console.log('Chores added!');
  };

  const handleNextWeek = () => {
    // Implement the logic for the next week
    // For now, let's just log a message
    console.log('Next week!');
  };

  return (
    <div>
      <h2>Leaderboard Page</h2>

      {people.map(person => (
        <Person key={person.id} name={person.name} points={person.points} />
      ))}

      <div>
        <button onClick={handleAddChores}>Add Chores</button>
        <button onClick={handleNextWeek}>Next Week</button>
      </div>
    </div>
  );
};

export default Recap;