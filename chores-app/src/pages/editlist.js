// // Home.js
// import React, { useState } from 'react';
// import './Editlist.css'; // Import the CSS file for styling

// import { createClient } from 'redis';

// const client = createClient({
//     password: '3tngVUqx6wPtRUe6VbCxXHiTPk6OPn4h',
//     socket: {
//         host: 'redis-13278.c326.us-east-1-3.ec2.cloud.redislabs.com',
//         port: 13278
//     }
// });

// await client.hSet('user-session:123', {
//     name: 'John',
//     surname: 'Smith',
//     company: 'Redis',
//     age: 29
//     })

// const Editlist = () => {
//   const [roommates, setRoommates] = useState([]);
//   const [chores, setChores] = useState([]);
//   const [newChore, setNewChore] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
        
        
//         await client.hSet('user-session:123', {
//             name: 'John',
//             surname: 'Smith',
//             company: 'Redis',
//             age: 29
//         })

//         const roommatesResponse = await fetch('/api/getRoommates'); // Replace with your actual endpoint
//         const roommatesData = await roommatesResponse.json();
//         setRoommates(roommatesData);

//           // Fetch chores from the database
//         const choresResponse = await fetch('/api/getChores'); // Replace with your actual endpoint
//         const choresData = await choresResponse.json();
//         setChores(choresData);
//         } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//     }
//   };

//   const addChore = async () => {
//     if (newChore.trim() !== '') {
//       try {
//         //update page after new chore 
//         await fetch('API', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ chore: newChore }),
//         });
       
//         //refresh page after new chore is added to database
//         fetchData();

//         setNewChore('');
//       } catch (error) {
//         console.error('Error adding chore:', error);
//       }
       
//     }
//   };

//   return (
//     <div className="editlist-container">
//       <h2 className="editlist-header">Editlist Page</h2>

//       <div className="list-container">
//         <div className="list">
//           <h3>Roommates:</h3>
//           <ul>
//             {roommates.map((roommate, index) => (
//               <li key={index}>{roommate}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="list">
//           <h3>Chores:</h3>
//           <ul>
//             {chores.map((chore, index) => (
//               <li key={index}>{chore}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="add-chore-container">
//         <input
//           type="text"
//           placeholder="New Chore..."
//           value={newChore}
//           onChange={(e) => setNewChore(e.target.value)}
//         />
//         <button className="add-chore-button" onClick={addChore}>
//           Add Chore
//         </button>
//       </div>
//     </div>
//   );
//   };

// export default Editlist;
