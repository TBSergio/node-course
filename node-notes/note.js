// 3rd party dependencies //
const fs = require('fs');
const _ = require('lodash');
// local dependencies //

// main //
var fetchNotes = () => {
    try{
        var noteString=fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
        return notes;}
    catch(e){
        return [];}
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var getByTitle = (notes,t) => {
    for(n in notes)
        if(notes[n].title == t)  return notes[n];
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {title,body};

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    var notes = fetchNotes();
    console.log('Note List Consists of: ')
    for(n in notes)
        console.log(notes[n].title,' - ',notes[n].body);
};
var removeNote = (title) => {
    var notes = fetchNotes();

    notes = notes.filter((note) => note.title != title);
    console.log('Removing note titled',title,'from the list - if it exists');
    saveNotes(notes);
};
var readNote = (title) => {
    var notes = fetchNotes();
    var note = getByTitle(notes,title);
    if(note) console.log('Note',note.title,'Contains: ',note.body);
    else     console.log('404 - Note not found!')
        
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote,           //in ES6 you are not requiered to specify the type if it is exactly the same as the function name
    removeNote,         //equivelent to the first 2 lines
};
