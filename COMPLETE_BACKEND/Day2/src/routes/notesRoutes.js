const express = require("express");
const router = express.Router();

router.get('/', require("../controllers/notesController").getAllNotes);
router.get('/:id', require("../controllers/notesController").getNoteById);
router.post('/', require("../controllers/notesController").createNote);
router.put('/:id', require("../controllers/notesController").updateNote);
router.delete('/:id', require("../controllers/notesController").deleteNote);

module.exports = router;