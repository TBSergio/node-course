// var JSONobj = {
//     name: 'Sergei',
//     age: 22
// };
// var stringObj =  JSON.stringinfy(JSONobj);

// var personString = '{"name":"Sergei","age":22}';
// var person = JSON.parse(personString);

//3rd party dependencies
const fs = require('fs');

//main
var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

fs.writeFileSync('notes.json',JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
