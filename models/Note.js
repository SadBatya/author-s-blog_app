const mongosee = require('mongoose')

let Schema = mongosee.Schema

let noteSchema = new Schema({
  note: {
    type: String,
    required: true
  }
})

let Note = mongosee.model('Note', noteSchema)

module.exports = Note
