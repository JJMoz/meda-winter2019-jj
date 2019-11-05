const Vehicle = require("./vehicle.js");

const car = class Car extends Vehicle{
    constructor(owner, make, model, year, color, license, mileage, mpg, tankSize, topSpeed, engineType) {
        super (make, model, year, color, owner, engineType, topSpeed);
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.mpg = mpg;
    }
    //method called travel. miles travel = (will return) how long it took and how much gas is left
    travel(miles) {
        this.currentFuel = this.currentFuel - (miles / this.mpg);
        console.log("The " + this.make + "" + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of " + this.engineType + " left. ");
    }
// .toFixed (1) ---> rounds number to first decimal
}

module.exports = car;