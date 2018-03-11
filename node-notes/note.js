// 3rd party dependencies //

// local dependencies //

// main //
var addNote = (title, body) => {
    console.log('Adding note:',title,body);
};
var getAll = () => {
    console.log('List of all Notes:');
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
