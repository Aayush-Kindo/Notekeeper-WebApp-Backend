const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
    title:{
        type:'String'
    },
    note:{
        type:'String'
    }
})

const Note = mongoose.model('Note',noteSchema)

module.exports = Note