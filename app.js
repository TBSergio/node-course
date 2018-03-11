console.log("Starting app.js");
const fs = require('fs');
const note = require('./note.js')
const _ = require('lodash');


fs.appendFile('greetings.txt',`Hello ${note.userName}!\n`,(err)=>{
    if(err) console.log("Can not write to file");
});

console.log("isString Returns: ",_.isString("String"));
var filteredArray = _.uniq(['Sergei',1,2,3,3,'Sergei']);
console.log("filteredArray is: ",filteredArray);

console.log("Finished app.js");