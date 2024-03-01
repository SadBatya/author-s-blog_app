const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const notesPath = path.join(__dirname, 'db.json');

async function addNote(title) {
  const data = await fs.readFile(notesPath, { encoding: 'utf-8' });
  notes = JSON.parse(data);

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.green.inverse('Note was added'));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: 'utf-8' });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();
  console.log(chalk.bgBlue('Here is the list of notes'));
  notes.forEach((note) => {
    console.log(chalk.blue(note.title), chalk.green(note.id));
  });
}

async function removeNote(id) {
  try {
    const data = await fs.readFile(notesPath, { encoding: 'utf-8' });

    let notes = JSON.parse(data);
    let newNotes = notes.filter((note) => note.id !== id);

    console.log(chalk.green('Remove id is done'));

    await fs.writeFile(notesPath, JSON.stringify(newNotes));
    return console.log(newNotes);
  } catch (error) {
    console.log(chalk.red('Error remove note'));
  }
}

module.exports = {
  addNote,
  printNotes,
  removeNote,
};
