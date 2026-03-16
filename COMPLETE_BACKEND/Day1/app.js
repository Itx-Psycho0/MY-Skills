// Create server.js with the following content:
const express = require('express');
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

const notes = []
// POST /api/notes - Create a new note
app.post('/notes', (req,res) => {
    const note = req.body;
    notes.push(note);
    res.status(201).json({
            status: 'success',
            notes : notes
        });
});


// GET /api/notes - Get all notes
app.get('/notes', (req,res) => {
    res.status(200).json({
        status: 'success',
        notes : notes
    });
});

// Delete a note by index
app.delete('/notes/:index', (req,res) => {
    const index = parseInt(req.params.index);
    delete notes[index];
    res.status(200).json({
        status: 'success',
        notes : notes
    });
});


// Patch a note by index
app.patch('/notes/:index', (req,res) => {
    const index = parseInt(req.params.index);
    const updatedNote = req.body;
    notes[index] = updatedNote;
    res.status(200).json({
        status: 'success',
        notes : notes
    });
});








module.exports = app;