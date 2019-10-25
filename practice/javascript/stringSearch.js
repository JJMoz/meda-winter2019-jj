var fs = require("fs");
var terminalArguments = process.argv;

var textFromFile = fs.readFileSync(terminalArguments[2], "utf8");

characterSearch(textFromFile, terminalArguments[3]);
















function characterSearch(text, letter) {
    console.log("Searching the string:  " + text);

    var foundLetters = 0;

    for (var i =0; i < text.length; i++) {

        if (text.charAt(i) == letter) {
            foundLetters = foundLetters + 1;
        }

    }

    console.log("We found a total of " + foundLetters + " " + letter + "'s");

}
