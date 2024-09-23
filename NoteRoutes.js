const { Router} = require('express');
const { getNote, saveNotes, deleteNote, editNote } = require('./NoteController');

const router = Router();
router.get('/', getNote);
router.post('/saveNotes', saveNotes)
router.post('/deleteNote', deleteNote)
router.put('/editNote', editNote)

module.exports = router;