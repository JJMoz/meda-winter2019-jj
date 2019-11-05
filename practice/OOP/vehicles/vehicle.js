//Create class, then stored the class into a varible (const vehicle) so that we can export it to other files using "module.exports"
const vehicle = class Vehicle {
 constructor(make, model, year, color, owner, engineType, topSpeed) {
     this.topSpeed = topSpeed;
     this.engineType = engineType;
     this.model = model;
     this.year = year;
     this.color = color;
     this.make = make;
     this.owner = owner;

     // to test that it works in terminal
     console.log("New vehicle was created. ");
 }  
//  getVIN() {
    //  return this.VIN




}

module.exports = vehicle;
