const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes, removeNote} = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Node title',
      demandOption: true
    }
  },
  async handler({ title }){
    addNote(title)
  }
})


yargs.command({
  command: 'list',
  describe: 'print all notes',
  async handler(){
    printNotes()
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'ID of the note to be removed',
      demandOption: true
    }
  },
  async handler({ id }){
    removeNote(id);
  }
});

yargs.parse()