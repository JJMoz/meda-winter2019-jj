const fs = require("fs");

//store in variable so we can use it later
let data = fs.readFileSync("carInventory.json", "utf8");


//string to ojbect
data = JSON.parse(data);

// "cars" is a property of the data object from index.js that holds all the data in its container
//console.log(data.cars[49].mpg);


//Another way to pull so that it is defined
//let carsArray = data.cars;
// carsArray.lenght or data.cars.length


// What is the average miles per gallon of these 100 cars.
// To find out the average, we add up all the mpg properties and divide by how many cars there were


//make a loop
//car.length is a property. you will get back a number

    let total = 0;

for (let i = 0; i < data.cars.length; i++) {
    total = total + data.cars[i].mpg;

}

let mpgAverage = total / data.cars.length;

console.log("What is the average miles per gallon of these 100 cars?");
console.log(mpgAverage + " MPG");