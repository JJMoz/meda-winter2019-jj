 var fs = require('fs');


//Math.random();

//Converts a JSOn string into an actual JavaScript Object.
//JSON.parse();

// Converts a JavaScript Object inot acutal JSON string.
//JSON.stringify();

//JavsScript object
var exampleObject = {
    maindKey: 105,
    isThisTrue: true,
    someText: "some Text",
    arrays: [100, "string", false],
    childObject:{nestedKey: "inside"},
    aCoolFunction: function () {
        console.log("I am a method that belongs to the exampleObject,")
    }
};

console.log(exampleObject.mainKey);
// another way to do the above
console.log(exampleObject["mainKey"]);
exampleObject.mainkey = 106 ;

exampleObject.aCoolFunction();


// Console logging a normal Object
console.log(exampleObject);


// Console logging JSOn representation of the same Object.
var jsonText = JSON.stringify(exampleObject);
console.log(jsonText);

fs.writeFileSync("exampleJSON.json", jsonText, "utf8");
console.log("File successully written!");