const express = require('express');
const cors = require('cors');
const redis = require('redis');

const app = express();
const port = 3001;

const redisClient = redis.createClient({
  password: '3tngVUqx6wPtRUe6VbCxXHiTPk6OPn4h',
    socket: {
        host: 'redis-13278.c326.us-east-1-3.ec2.cloud.redislabs.com',
        port: 13278
    }
});

redisClient.on('error', err => console.log('Redis Error', err))

redisClient.connect().then( () => {

app.use(cors());
app.use(express.json());

app.get('/api/getRoommates', async (req, res) => {

  const roommates = [];
  let num = 1;

  try {
    while (true) {
      const roommateKey = 'Housemate' + num;
      const exists = await redisClient.exists(roommateKey);
      console.log(exists);

      if (!exists) {
        break; // Exit the loop if the key doesn't exist
      }

      const roommateData = await redisClient.hGetAll(roommateKey);
      roommates.push(roommateData);
      num++;
    }

    res.json({ roommates });

    } catch (error) {
      console.error('Error retrieving chores from Redis:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.get('/api/getChores', async (req, res) => {
  
  const chores = [];
  let num = 1;

  try {
    while (true) {
      const choreKey = 'Chore' + num;
      const exists = await redisClient.exists(choreKey);

      if (!exists) {
        break; // Exit the loop if the key doesn't exist
      }

      const choreData = await redisClient.hGetAll(choreKey);
      chores.push(choreData);
      num++;
    }

    res.json({ chores });

    } catch (error) {
      console.error('Error retrieving chores from Redis:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      }
  });


  app.get('/api/getLargestId', async (req, res) => {
    let largestId = 0;
  
    try {
      const idKey = 'largestId';
      const exists = await redisClient.exists(idKey);
      console.log(exists);
  
      const largestIdResponse = await redisClient.hGetAll(idKey); 
      console.log(largestIdResponse);
      largestId = largestIdResponse.largestId;
      console.log(largestId);
      
    } catch (error) {
      console.error('Error retrieving largestId from Redis:', error);
    }
  
    res.json( {largestId} );
  });
    

app.post('/api/addChore', async (req, res) => {
  const { id, isDone, isVerified, choreName, personName } = req.body;

  try {

    const parsedId = parseInt(id, 10); // Parse id as an integer
    const incrementedId = parsedId + 1; // Increment the parsed id

    const result = await redisClient.hSet("Chore" + id, {id:id, isDone:isDone, isVerified:isVerified, choreName:choreName, personName:personName})
    const changeId = await redisClient.hSet("largestId", {largestId:incrementedId})
    res.send("complete");
  } catch (error) {
    console.log(error);
  }
})

app.post('/api/done-status', async (req, res) => {
  const { id, isDone, isVerified, choreName, personName } = req.body;
  
  if (isDone == "0") {
    const result = await redisClient.hSet("Chore" + id, {id:id, isDone:'1', isVerified:isVerified, choreName:choreName, personName:personName});
    res.send("Done");
  } else if (isDone == "1") {
    const result = await redisClient.hSet("Chore" + id, {id:id, isDone:'0', isVerified:isVerified, choreName:choreName, personName:personName});
    res.send("undone");
  }

  
})

app.post('/api/verified-status', async (req, res) => {
  const { id, isDone, isVerified, choreName, personName } = req.body;

  if (isVerified == "0") {
    const result = await redisClient.hSet("Chore" + id, {id:id, isDone:isDone, isVerified:'1', choreName:choreName, personName:personName});
    res.send("Verified");
  } else if (isVerified == "1") {
    const result = await redisClient.hSet("Chore" + id, {id:id, isDone:isDone, isVerified:'0', choreName:choreName, personName:personName});
    res.send("unverified");
  }
    
})


app.listen(port, () => {
  console.log("Success");
})

});