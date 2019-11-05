// require pulls in file
//// pulling in cas.js and car.js is pulling in vehicle.js. so vhicle.js is pulled into index.js
const car = require("./car.js");

let honda = new car("Jesse", "Honda", "Civic", 2000,"white", "8EFD39E9", 125000, 35, 12, 150, "Gas");

console.log(honda);
honda.travel(100);
honda.travel(80);
