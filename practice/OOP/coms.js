// Communication between two files
var jjLibrary = require("./library.js");
var coolLibrary = require("./library2.js");


function runAll(nA, userName){

    var results = jjLibrary.mathify(nA[0], nA[1], nA[2], nA[3] );

    //jjLibrary.shouldNotBeAccessed();

    console.log(results);

    coolLibrary.sayHello(userName);

    console.log(coolLibrary.author);

}

module.exports = {
    runAll: runAll
}

/*var results = jjLibrary.somethingCool(100, 38, 48, 93);
var results2 = jjLibrary2.somethingCool2(1000, 3, 480, 903);


//jjLibrary.shouldNotBeAccessed();

console.log(results);


var results2 = jjLibrary2.somethingCool2(1000, 3, 480, 903);

console.log(results2);

jjLibrary2.sayHello("J. J. "); */






