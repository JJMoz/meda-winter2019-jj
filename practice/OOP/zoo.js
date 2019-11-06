// Class for Animal types.
class Animal {
    constructor(metabolism, expired) {
        this.metabolism = metabolism;
        this.expired = expired;
    }
}
// The extends keyword is used in class declarations or class expressions to create a class which is a child of another class // Class for Fish types that inherits Animal properties and methods
class Fish extends Animal{
    constructor(tasty) {
        // The super keyword is used to access and call functions on an object's parent
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }
}

// Class for Mammal types
class Mammal extends Animal{
    //constructor is a method,  // constructor method must be included and will run when creating objects of this class. This one has many parameters.
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
        super("warm-blooded", false);
          // Keyword this refers to the current object being created. The value refers to the parameter //properties 
        this.type = type
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
        this.eyes = eyes;
        this.mammary = mammary;
        this.lifeExpectancy = life;
        this.hair = hair;
        this.heightInches = heightInches;
        this.weightLb = weightLb;
        this.tail = tail;
        // is static, not allowing the parameters to change it
        this.age = 0;

        console.log(this.type + " was born");
    }
//Methods  // One of three methods that belong to the mammal class.
    eat() {
        console.log(this.type + " eats food.");

    }
    sleep () {
        console.log(this.type + " sleeps. ");
    }
// let them decide how many years it lives for
    live(years) {
        this.age = this.age + years;

        if (this.lifeExpectancy < this.age) {
            console.log(this.type + " is now dead.");
            this.expired = true;
        } else {
            console.log(this.type + "  has sucessfully lived for an additional " + years + " years. ");
        }
    }

    // This method creates a Mammal object similar to the "parent" object.
    reproduce (weightLb, heightInches) {
        console.log(this.type + " created baby");
        //this..... = 
        let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, 
           //do not put "this." in front of heightInches & weightLB because baby will be different height and weight 
            heightInches, weightLb);

        return baby;
    }

    die () {
        console.log(this.type + " has lived a full life");
    }



}
// Creating a dog
const firstMammal = new Mammal ("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4 );

// Dog eats and sleeps.
firstMammal.sleep();
firstMammal.eat();

// Dog makes baby
let secondMammal = firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);

console.log(firstMammal, secondMammal);

// CAT MAMMAL-- create a cat and reproduce 3 time put babies in "litter" away.

// Cat Mammal
const firstCatMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, 8, 15, 10, 10);

// array or "new array" // Array holding all the cat babies.
let litter = new Array();


// push adds to the end of the array
litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,3));

litter[1].live(5);

litter[1].live(20);

// New Fish Object.
let tilapia =  new Fish(true)

console.log(tilapia.metabolism);





