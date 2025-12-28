//require dotenv
const dotenv =  require('dotenv');
dotenv.config();

//require mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log("Connected to DB")
})

//require express
const express = require('express');
const app = express();

//controller setup
const petCtrl = require('./controllers/pets');

//require morgan
const morgan = require('morgan');

//middleware
app.use(morgan('dev'));

app.use(express.json());

app.use('/pets', petCtrl);


app.listen(3000, () => {
  console.log('express is ready')
});