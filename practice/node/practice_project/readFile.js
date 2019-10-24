
//calls node package
var fs = require ("fs");

//Recieves text as a string and stores it in the variable text
var text = fs.readFileSync("repeat.text", "utf8")

console.log(text);

