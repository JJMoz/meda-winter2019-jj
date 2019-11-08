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


// QUESTION 1 END

// QUESTION 2 START
//How many Cars do I have that were built between 1940-1960.

console.log("How many Cars do I have that were built between 1940-1960? including 1940 and 1960");

// 1) Array.....data.cars is from above. converted json file  into data.
let cars = data.cars;
// console below is testing the Array above
console.log(cars[0].year);

// 3)
let carBetween1940And1960 = 0;

// 2)Loop to print out all the objects in the Array
for (let i = 0; i < cars.length; i++) {

    let currentCar = cars[i];
// 4)
    if (currentCar.year >= 1940 && currentCar.year <= 1960 ) {
        // 5)
        carBetween1940And1960 = carBetween1940And1960 +1;
       // carBetween1940And1960 += 1;  -----> another way to do above.
    }

}

// 6) console log anwser
console.log(carBetween1940And1960);

// console below is testing the Loop above
//console.log(cars[cars/length])