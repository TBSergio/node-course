// 3rd party dependencies //
const fs = require('fs');
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
    console.log('Removing note titled:',title);
};
var readNote = (title) => {
    console.log('Note',title,'Contains: ');
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote,           //in ES6 you are not requiered to specify the type if it is exactly the same as the function name
    removeNote,         //equivelent to the first 2 lines
};
