
// require pulls in file, "_" underscore is shorthand for lodash library.
const _ = require( "lodash");

// fs package allows us to write/save to our harddrive
const fs = require("fs");

//// pulling in cas.js and car.js is pulling in vehicle.js. so vhicle.js is pulled into index.js
const car = require( "./car.js");

// const Helicopter = require("./helicopter.js");

//let honda = new car("Jesse", "Honda", "Civic", 2000,"white", "8EFD39E9", 125000, 35, 12, 150, "Gas", 0, 1);

//console.log(honda)
//honda.travel(50);

console.log(_.random(10,100) );

function createCar(make){

    let randomCar = new car(
        "User", 
        make,
        "Company",
         _.random(1930, 2020),
        "transparent",
         _.random(1111111, 9999999), 
         _.random(0,300000), 
         _.random(0, 110),
          _.random(1,40), 
          "gas",
           _.random(28, 240) 
        );

        return randomCar;    
} 



// console.log(randomCar);

//a object container that can hold a array that will hold all of the random cars
let container = {
    cars: [],
   // trucks: [],
}

for (let i = 0; i < 100; i++) {
container.cars.push(createCar("Car " + i));
}

//turns data into a JSON file.
let stringifiedData = JSON.stringify(container);

fs.writeFileSync("carInventory.json", stringifiedData, "utf8");

console.log(container.cars[80].make);



