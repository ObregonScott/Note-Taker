//Dependencies
const fs = require("fs");
const util = require("util");
const { uuid } = require('uuidv4');

//Handling Asynchronous Code
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let notesParse;

            try{
                notesParse = [].concat(JSON.parse(notes));
            } catch (err) {
                notesParse = [];
            }
            return notesParse;
        });

    }
    addNote(note) {
        const {
            title, text
        } = note;
        if(!title || !text) {
            throw new Error("Cannot be blank!!!");
        }
        const newNote = {title, text, id: uuid()};
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updateNotes) => this.write(updateNotes))
        .then(() => newNote);
    }
    removeNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }
}


module.exports = new Store();