// Remaining ARGV array for easier reading
// When using ARGV start with index 2, because 0 and 1 are not useful in or code
var terminalArguments = process.argv;


// Tests if index 2 has something and can be converted to number, otherwise send error message.
if ( isNaN( parseInt (terminalArguments[2]) ) ) {
    console.log("You are missing two numbers, plesee type in two numbers with a operations inbetween after the command with spaces. Example: node calculator.js 50 add 100");

    return;
}
// Tests if index 3 has something and can be converted to number, otherwise send error message.
if ( isNaN( parseInt (terminalArguments[4]) ) ) {
    console.log("You are missing the second number, plesee type in two numbers with a operations inbetween after the command with spaces. Example: node calculator.js 50 add 100");

    return;
}
// Warns user that we can only use the first two numbers
if (terminalArguments[5] != undefined) {
    console.log("Unfortunately this program can only use the 1st 2 numbers")
}


// More readable and can be resused in the future if we still want the number
var number1 =parseInt(terminalArguments[2]);
var number2 =parseInt(terminalArguments[4]);
// Safe to use number1 and number2 as they are Number Datatypes.

// Decide what we want to do with these numbers.
if (terminalArguments[3] == undefined)  {
    console.log(" You need to type in the operation after the two numbers, try the following values: add, subtract, mutliply, divide, remainder");

    return;
} else if (terminalArguments[3] == "add") {
    add(number1, number2);
}

else if (terminalArguments[3] == "multiply") {
    multiply(number1, number2);
}
else if (terminalArguments[3] == "subtract") {
    subtract(number1, number2);

} else if (terminalArguments[3] == "divide") {
    divide(number1, number2);
}
else if (terminalArguments[3] == "remainder") {
    leftover(number1, number2);
}else {
    console.log("Sorry we did not understand")
}

// divide(number1, number2);
// multiply(number1, number2);
// subtract(number1, number2);
// leftover(number1, number2);















function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}

function divide(num1, num2) {
    var div = num1 / num2;
    console.log(div);
}

function multiply(num1, num2) {
    var mult = num1 * num2;
    console.log(mult);
}

function subtract(num1, num2) {
    var sub = num1 - num2;
    console.log(sub);
}

function leftover(num1, num2) {
    var left = num1 % num2;
    console.log(left);
}


// More readable and can be resused in the future if we still want the number----moved up and added a number2
//var number1 =parseInt(terminalArguments[2]);

// This shows both ways to do it--- update dont need it anymore because added "function add"
// var sum = number1 + parseInt(terminalArguments[3]);

// console.log(sum);
