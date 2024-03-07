const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const notesPath = path.join(__dirname, 'db.json');

async function addNote(title) {
  if(!title){
    return
  }
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

async function editNote(noteId, newTitle) {
  try {
      const data = await fs.readFile(notesPath, { encoding: 'utf-8' });
      let notes = JSON.parse(data);
      const noteIndex = notes.findIndex((note) => note.id === noteId);

      if (noteIndex !== -1) {
          notes[noteIndex].title = newTitle;
          await fs.writeFile(notesPath, JSON.stringify(notes, null, 2), {
              encoding: 'utf-8',
          });
          console.log(chalk.green('Note editing is done'));
      } else {
          console.log(chalk.red('I can`t find this note'));
      }
  } catch (error) {
      console.log('Edit error:', error);
  }
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
  getNotes,
  editNote
};
