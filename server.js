const dotenv =  require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log("Connected to DB")
})

const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());


app.listen(3000, () => {
  console.log('express is ready')
});