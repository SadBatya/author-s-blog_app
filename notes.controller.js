const chalk = require('chalk')
const Note = require('./models/Note')

async function addNote(title) {
  await Note.create({ title })
  console.log(chalk.bgGreen('Note was added!'))
}

async function getNotes() {
  const notes = await Note.find()

  return notes
}

async function removeNote(id) {
  await Note.deleteOne({_id: id})
  console.log(chalk.red(`Note with id="${id}" has been removed.`))
}

async function updateNote(noteData) {
  await Note.updateOne({_id: noteData.id}, {title: noteData.title})
  console.log(chalk.bgGreen(`Note with id="${noteData.id}" has been updated!`))
}

module.exports = {
  addNote, getNotes, removeNote, updateNote
}
