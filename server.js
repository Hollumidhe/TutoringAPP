const express = require('express');
const connectDB = require('./db');

//express initialise
const app = express();

//initialise middleware
app.use(express.json({ extended: false}));

//create express route
app.get('/',(req, res) => res.json({message: "Welcome to the Tutorial APP"}));