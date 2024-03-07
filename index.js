const express = require('express')
const chalk = require('chalk')
const path = require('path')
const basePath = path.join(__dirname, 'pages')
const { addNote, getNotes, removeNote, editNote } = require('./notes.controller')
const port = 3000
const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'pages'));


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}))

app.get('/', async (req, res) => {
  res.render('index', {
    title: 'Express App',
    notes: await getNotes(),
    created: false,
    visible: true
  })
})

//редактирование заметки
app.put('/:id', async (req, res) => {
  await editNote({ id: req.params.id, title: req.body.title })
  res.render('index', {
    title: 'Express App',
    notes: await getNotes(),
    created: false
  })
})


app.delete('/:id', async (req, res) => {
  removeNote(req.params.id)
  res.render('index', {
    title: 'Express App',
    notes: await getNotes(),
    created: false,
  })
})


app.post('/', async (req, res) => {
  await addNote(req.body.title)
  res.render('index', {
    title: 'Express App',
    notes: await getNotes(),
    created: true,
  })
})


app.listen(port, () => {
  console.log(chalk.green(`server has been started... ${port}`))
})