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
    var nt = note.addNote(argv.title,argv.body);
    if (nt){console.log('Adding note titled: ',nt.title,'to the list');}
    else{console.log('could not create a duplicate note');}
}
else if (command === 'list'){
    note.getAll();
}
else if (command === 'remove'){
    var isRemoved = note.removeNote(argv.title);
    var message = isRemoved ? `Removed note titled ${title}` : '404 - note not found!'
}
else if (command === 'read'){
   var nt = note.readNote(argv.title);
   if(nt) console.log('Note',nt.title,'Contains: ',nt.body);
    else    console.log('404 - Note not found!');
}
else{
    console.log('Command not found');
}

