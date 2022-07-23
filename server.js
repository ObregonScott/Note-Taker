//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util')

//Server SetUp
const app = express();
const PORT = process.env.PORT || 3001;

//Static Middleware
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
      })
  });

  app.post("/api/notes", function(req, res) {
    const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data) {
      const notes = [].concat(JSON.parse(data));
      note.id = notes.length + 1
      notes.push(note);
      return notes
    }).then(function(notes) {
      writeFileAsync("./db/db.json", JSON.stringify(notes))
      res.json(note);
    })
});

//HTML routes