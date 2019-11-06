const Car = require("./car.js");

const truck = class Truck extends Car {
    constructor(owner, make, model, year, color, license, mileage, mpg, tankSize, topSpeed, diesel, tons, capacity)
    {
        super (owner, make, model, year, color, license, mileage, mpg, tankSize, topSpeed)
        this.engineType = diesel;
        this.transport = tons;
        this.capacity = capacity;



    }

}
// Can this truck handle the weight?
// Is the tons less than or equal to the capacity that this truck can handle?



module.exports = truck;