console.log("Starting app.js");
const fs = require('fs');
const note = require('./note.js')


fs.appendFile('greetings.txt',`Hello ${note.userName}!\n`,(err)=>{
    if(err) console.log("Can not write to file");
});
console.log("Finished app.js");