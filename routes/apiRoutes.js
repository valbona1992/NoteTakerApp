const page = require('../Develop/db/db.json');
const api = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//API Routes
api.get('/api/notes', (req, res) => {
    res.json(page)
});

api.post('/api/notes', (req, res) => {
    let newNote = req.body;
    page.push(newNote)
    newNote["id"] = uuidv4();
    fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(page), (error, data) => {
        if (error) throw error;
        return res.json(page);
    });
});

api.delete('/api/notes/:id', (req, res) => {
    const deleteNote = req.params.id
    for (let i = 0; i < page.length; i++) {
        if (deleteNote === page[i].id) {
            page.splice(i, 1);
            fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(page), (error, data) => {
                if (error) throw error;
                res.json(page);
            });
        }
    }
});

module.exports = api;