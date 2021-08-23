const html = require('express').Router();
const path = require('path');


// getting the html pages
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'))
});

module.exports = html;