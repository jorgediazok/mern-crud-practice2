require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todos = require('./routes/todos');

//Middlewares
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api', todos);

//DB
MONGO_URI = process.env.MONGODB_CONNECTION;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB is connected!!'))
  .catch((err) => console.log(err));

//Server

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
