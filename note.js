console.log("Starting note.js");

const os = require('os');
var user = os.userInfo();
module.exports.userName = user.username;
module.exports.addNote = () => {
    console.log("Adding note");
};

console.log("Finished note.js");