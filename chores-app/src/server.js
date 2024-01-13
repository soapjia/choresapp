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
  const keys = await redisClient.keys('Housemate*');


  const roommate1 = await redisClient.hGetAll('Housemate1');
  console.log("endpoint");
  res.send(roommate1); 
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

app.post('/api/addChore', async (req, res) => {
  const { id, isDone, isVerified, choreName, personName } = req.body;
  const result = await redisClient.hset("Chores", id, "1");

  // try {
  //   const result = await redisClient.hset("Chores", id, "1");
  //   console.log("Chore added to Redis");
  //   res.json({ message: 'Chore added successfully' });
  // } catch (error) {
  //   console.error('Error adding chore to Redis:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }

})

//done 

//undone 

//verify

// unverify


app.listen(port, () => {
  console.log("Success");
})

});