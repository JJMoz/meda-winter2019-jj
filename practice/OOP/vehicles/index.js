// require pulls in file
//// pulling in cas.js and car.js is pulling in vehicle.js. so vhicle.js is pulled into index.js
const car = require("./truck.js");

let honda = new car("Jesse", "Honda", "Civic", 2000,"white", "8EFD39E9", 125000, 35, 12, 150, "Diesel", 5, 10);

console.log(honda);
// honda.travel(100);
// honda.travel(80);
// honda.refuel(10);
honda.travel(50);