//Node file for class practice,  make a loop for 100 times of a sentence

var  fs=require("fs");

fs.writeFileSync("repeat.txt", "I was created by a JavaScript Project", "utf8");


for (var i = 0; i < 100; i= i + 1) {

    if (i < 9) {
    var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";

    } else {
        var sentence = i + ") This is a sample sentence.\n";
    }



   fs.appendFileSync("repeat.txt", sentence, "utf8");

}



//  "/n" = new line, puts space in repeated text
