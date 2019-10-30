// Brings in FileSystem package so we can create files later in code
var fs = require('fs');

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 105,
    eyeColor: "Red"

};

// console.log not needed I just used it to check terminal and file was connected
console.log(person);

// converts JS object into JSON strings
var jsonText = JSON.stringify(person);

// Creates a file, writes the text in jsonTExt to file.
fs.writeFileSync("saved.json", jsonText, "utf8");
console.log("JSON File successully written!");