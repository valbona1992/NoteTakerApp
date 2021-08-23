// Adding the dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Creating a PORT variable
const PORT = process.env.PORT || 3001;

const app = express();

//use the files in a directory
app.use(express.static('Develop/public'));

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use(htmlRoutes);

// Listener
app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));