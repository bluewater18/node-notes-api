const notes = require('../models/notes.server.models');

exports.fetch = function(req, res) {
    console.log('#Request to get all notes#')
    res.status(200).send(notes.getAll())
}

exports.create = function(req, res) {
    console.log('#Request to add a note#')
    const note = req.body.note
    const timestamp = Date.now()
    if(notes.insert(note, timestamp)) {
        res.status(201).send('Note created')
        return
    } else {
        res.status(500).send('Internal server error')
        return
    }
}

exports.fetchOne = function(req, res) {
    console.log(`#Request to get note ${req.params.id}#`)
    const responseNote = notes.getOne(parseInt(req.params.id))
    if (responseNote) {
        console.log(responseNote)
        res.status(200).send(responseNote)
        return
    } else {
        res.status(404).send('Note not found')
        return
    }
}

exports.update = function(req, res) {
    console.log(`#Request to update note ${req.params.id}#`)
    const updatedNote = req.body.note;
    const updated = notes.alter(parseInt(req.params.id), updatedNote)
    if (updated) {
        res.status(200).send(updated)
        return
    } else {
        res.status(404).send('Note not found')
        return
    }
}

exports.delete = function(req, res) {
    console.log(`#Request to delete note ${req.params.id}#`)
    if (notes.remove(parseInt(req.params.id))) {
        res.status(200).send('Note deleted')
        return
    } else {
        res.status(404).send('Note not found')
        return
    }
}