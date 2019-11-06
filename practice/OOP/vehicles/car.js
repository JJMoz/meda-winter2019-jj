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
       if (this.currentFuel >= 0) {
           if (this.currentFuel * this.mpg >= miles) {
                this.currentFuel = this.currentFuel - (miles / this.mpg);
                console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of " + this.engineType + " left. ");
                } else { 
                    console.log("The " + this.make + " " + this.model + " Does not have enough fuel to travel that far. ");
                }

                } else {
                    console.log("The " + this.make + " " + this.model + " has no gas. ");
                }
            
            }

            refuel(gallons){
                if (gallons <= 0){
                    console.log("You need to provide fuel (positive number). ");
                    return 1;
                } else {

                    if (gallons >= this.tankSize){
                        console.log("You provided too much fuel, cannot fint into tank.")
                    }else{

                        if(this.tankSize - this.currentFuel < gallons) {
                            console.log("there is not enough free space in the fuel tank to add that many gallons.")
                        } else {
                            this.currentFuel = this.currentFuel + gallons;
                            console.log(this.model + " was successfully refueled with" + gallons + "gallons of gas. ");
                        }
                    }
                }


            }
           
        }
// .toFixed (1) ---> rounds number to first decimal


module.exports = car;
