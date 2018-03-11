// 3rd party dependencies //
const fs = require('fs');
const _ = require('lodash');
const yarg = require('yargs');

// local dependencies //
const note = require('./note.js')

// main //
const argv = yarg.argv;
var command = process.argv[2];


if(command === 'add'){
    note.addNote(argv.title,argv.body);
}
else if (command === 'list'){
    note.getAll();
}
else if (command === 'remove'){
    note.removeNote(argv.title);
}
else if (command === 'read'){
    note.readNote(argv.title);
}
else{
    console.log('Command not found');
}

