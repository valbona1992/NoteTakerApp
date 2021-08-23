// Adding the dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// reading and writing variables for db.json
const fs = require("fs");

// Creating a PORT variable
const PORT = process.env.PORT || 3001;

const app = express();

//use the files in a directory
app.use(express.static('public'));

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/routes/apiRoutes.js', apiRoutes);
app.use('/routes/htmlRoutes.js', htmlRoutes);



// Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));