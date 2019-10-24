// Loads lodash, _ = shorthand for lodash package
var _ = require("lodash");

// using lodash to get a random number
var randomNumber = _.random(60, 90);

console.log(randomNumber);

// using lodash to get max number
var maxNumber=_.max([4, 234, 89, 667894021, 32, 67, 89, 17, 1934, 560]);

console.log(maxNumber);

// using lodash to get the difference
var array1 = [94, 302, 349];
var array2 = [302];

// array1 - array2
console.log(_.difference(array1, array2));