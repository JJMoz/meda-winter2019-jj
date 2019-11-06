let firstPerson = {
    firstName: "Eduardo",
    lastName: "Garcia",
    age: 29,
    city: "San Francisco",
    state: "Califronia",
    occupation: "contractor",
    eye: "transparent",
    hair: "black",
    beard_color: "black",
    tranportion: "teleportation",
    marital_status: "single",
    gender: "male",
    food: "sushi"
};

let secondPerson = {
    firstName: "Barbara",
    lastName: "Streisand",
    age: 50,
    occupation: "Actress",
    tranportion: "Private jet",
    gender: "female"
};

let thirdPerson = {
    firstName: "Brad",
    lastName: "Smith",
    tranportion: "Car"
};



let people = [firstPerson, secondPerson, thirdPerson];

// A Function that calculates the average age of the people in the array provided.
function getAverageAge(personArray) {

    let totalAge = 0;

    for (let i = 0; i < personArray.length; i++) {
       // console.log(personArray[i].age);
        totalAge = totalAge + personArray[i].age;
    }

    return totalAge / personArray.length;
}

//console.log("The average age of the people in the array is: " + getAverageAge(people));


// SAME OBJECTS BUT USING CLASSES INSTEAD.--------------------------------- 

//--------------------------Is SEPERATE FROM ABOVE


// CLASSES is a blueprint or template for a Object, Example you use the blueprint to build a house.

//keyword to creating a class is "class". Use capital at begining.
class Employee {
    // firstName is the (parametor), constructor because it is building/ contructing the object
    constructor(firstNameValue, salary, license, status, timesheet) {
        console.log("A new employee was created");
        //properties are written  like varibles, keyword is "this"--refers to the object it is in   // "this" means the current object you are in now
        this.firstName = firstNameValue;
        this.salary = salary;
        this.license = license;
        this.status = status;
        this.timesheet = timesheet;
    }
//below is a method, a function of a object
    Work() {
        console.log(this.firtName + "it working really hard, maybe.");
        this.timesheet = this.timesheet -1;

        console.log(this);
    }
    
}
// objects.... keyword "new" then the class means.........
let firstEmployee = new Employee("Eduardo", 70000, "2jo2klf", "active", 8);
let secondEmployee = new Employee("Barbara", 120000, "oi23id","inactive", 4);
let thirdEmployee = new Employee(null, null, null, null, null);
//bcheneque

firstEmployee.Work();
secondEmployee.Work();
thirdEmployee.Work();

firstEmployee.Work();
