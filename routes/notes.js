const express = require('express')
const router = express.Router()
const Note = require('../models/note')

// get all notes from database and display
router.get('/api/notes', async(req,res)=>{
    const notes = await Note.find({})
    res.send(notes)
})

// create new note and save to database
router.post('/api/notes/add', async(req,res)=>{
    if(req.body!==''){
        const newNote = new Note({
            title: req.body.title,
            note: req.body.note
        })
        await Note.create(newNote)
        console.log('new note saved successfully')
        // console.log(newNote);
        res.redirect('/api/notes')
    }
    else(
        res.redirect('/api/notes')
    )
})

router.post('/api/notes/edit',async(req,res)=>{
    const id = req.body.id
    const updatedData = ({
        title : req.body.title,
        note : req.body.note
    })
    // console.log(id);
    // console.log(title);
    // console.log(note);
    await Note.findByIdAndUpdate(id,updatedData)
    // foundNote.title=title
    // foundNote.note=note
    console.log('note updated\n',updatedData);
    res.redirect('/api/notes')
})

// delete note
router.post('/api/notes/delete/:noteId',async(req,res)=>{
    await Note.findByIdAndDelete(req.params.noteId)
    console.log("note deleted successfully")
    res.redirect('/api/notes')
})


module.exports = router
