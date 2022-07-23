//Dependencies/Tools/and Required files
const router = require('express').Router();
const path = require('path');
const notes = require('./db/db.json');
const {v4: uuidv4} = require('uuid');
//Asynchronous Processes
const fs = require('fs');

// API Route | Get Request
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.json'), (err,data) => {
  if(err) res.sendStatus(404);
  console.log(data);
  res.json(JSON.parse(data));
  console.log(process.cwd());
  })
});


// API Route | Post Request
router.post('/notes', (req, res) => {
  const newNotes = req.body
  newNotes.id = uuidv4();
  let readData = (path.join(__dirname,('./db/db.json', "utf8")));

  notes.push(newNotes);

  fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
    if (err) { res.sendStatus(404);
    } else {
      console.log('Note saved.');
    }
})
res.json(readData);
});


// API Route | Delete Request
router.delete('/notes/:id', (req, res) => {
  let noteId = req.params.id;
  let readData = (path.join(__dirname('./db/db.json', "utf8")));

  let findData = readData.filter(note => note.id.length !== note)
});


module.exports = router;