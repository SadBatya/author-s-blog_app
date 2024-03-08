const mongosee = require('mongoose')

let Schema = mongosee.Schema

let NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  }
})

let Note = mongosee.model('Note', NoteSchema)

module.exports = Note
