// Import fs package
var fs = require("fs");

// try to run the following code...
try {
    var fileText = fs.readFileSync("ex.txt", "utf8");

//.... If there is an error, then run the following
 } catch (error) {
    console.log(" No such File, so we created it for you ");

    fs.writeFileSync("ex.txt","", "utf8");
// Whether there was an erro or not, run this.
} finally {
    fs.appendFileSync("ex.txt"," This is a appended string ", "utf8");
}

// Because our code was in a try catch, it will not stop the program, and will complete.
console.log("Your program is complete");