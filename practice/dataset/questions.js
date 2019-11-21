// How many evictions notices by outside sources of SF?
// Which zip code had the most evictions (Use Neighborhood- Analysis boundery)?
//Which month had the most evictions?
// How many evictions happened because of Ellis Act and Condo Conversion


// Include the fs package to read files.
const fs = require("fs");


// Because we are going to be creating a whole buch of objects, we built a Class for object consistency.
class EvictionNotice {
    // Order of parameters DO matter, but order of properties DO NOT matter.
    constructor(month, zip, ellisAct, condoConversion) {
        this.month = month;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
    }

}
// import json file 2018 evctions.... Read our filtered dataset. 
let evictionDataMasterString = fs.readFileSync("2018entries.json", "utf8");

//object data... Convert the filtered dataset to a living JS object
// inside evictionDataMasterObjec, there is a key called "data" holding an array of string
let evictionDataMasterObject = JSON.parse(evictionDataMasterString);

//dataOjbects = new Array();...... Array to hol our objects that were created from the strings in our dataset.
const dataObjectsArray = [];

//   1st data is the object the 2nd data is the key...loop through each string inside of the data key array inside the "evictionDataMasterObject" varible.                     
for (let i = 0; i < evictionDataMasterObject.data.length; i++){ // 3 //
    //       2                              1
    dataObjectsArray.push( stringToObject( evictionDataMasterObject.data[i] ) );
    //ABOVE: Grab the current string inside the data key inside the evictionDataMasterObject, send it to the stringToObject function to convert it to an object using the Eviction class, and then whatever it returns to us, push it into the dataObjectArray array.... requesting the data key, and what is in it
}



// Question 1 
console.log("What month had the most evictions? ");

// index 0 is January, index 11 is December,[ counters for each month ]
let months = [0,0,0,0,0,0,0,0,0,0,0,0];

// LOOP through all the converted objects, and pull out the month value and compare it to the specific values for each month.  If a match is found, add a 1 to that mounth's counter inside the month array.
for (let i = 0; i < dataObjectsArray.length; i++) {
    //another way to do the below code
    // months[parseInt (dataObjectArray[i].month)-1 ]++;

    switch(dataObjectsArray[i].month) {
        case "01":
        months[0]++
        break;
        case "02":
        months[1]++
        break;
        case "03":
        months[2]++
        break;
        case "04":
        months[3]++
        break;
        case "05":
        months[4]++
        break;
        case "06":
        months[5]++
        break;
        case "07":
        months[6]++
        break;
        case "08":
        months[7]++
        break;
        case "09":
        months[8]++
        break;
        case "10":
        months[9]++
        break;
        case "11":
        months[10]++
        break;
        case "12":
        months[11]++
        break;
  
    }

}

console.log(months);

// Create variables to keep track of the highest number, adn month.
let highestValue = 0;
let highestMonthIndex = -1;

// Loop throught each counter of the months array.
for (let i = 0; i < months.length; i++) {
    // Ask if the current highestValue is smaller than the urrent counter count.
    if (highestValue < months[i]) {
        // if highestValue is less then months[i] then replace highestValue with the months[i]
        highestValue = months[i];
        // Track the current highest month's index
        highestMonthIndex = i;

    }
}

console.log("The month with highest evictions of 2018 was month " + (highestValue + 1) + " , witha total of " + highestValue + " evictions. ");


// Question 2
console.log("How many evictions happened because of Ellis Act and Condo Conversion for the year 2018?");


let ellisTotal = 0;
let condoTotal = 0;
let masterTotal = 0;
let bothTotal = 0;

for (let i = 0; i < dataObjectsArray.length; i++) {

    let currentObject = dataObjectsArray[i];

        if (currentObject.ellisAct === "true") {
            ellisTotal++;
            masterTotal++;
        } else if (currentObject.condoConversion === "true") {
            condoTotal++;
            masterTotal++;
        }

        if (currentObject.ellisAct === "true" && currentObject.condoConversion === "true") {
            bothTotal++;
        }
}
console.log(`
Because of Ellis: ${ellisTotal};
Because of Condo Conversion: ${condoTotal};
Total because of either: ${masterTotal};
Because of bothe: ${bothTotal};
`);


// Question 3 which zip code has the most evictions
console.log("Which zip code had the most evictions for 2018? ");

let zipCodes = ["94102 94103 94104 94105 94107 94108 94109 94110 94111 94112 94114 94115 94116 94117 94118 94121 94122 94123 94124 94127 94128 94129 94130 94131 94132 94133 94134 94143 94158 94188 ".split(" ") ];

zipCodes = zipCodes.concat( "94119 94120 94125 94126 94140 94141 94142 94146 94147 94159 94164 94172".split(" ") );

zipCodes = zipCodes.concat("94137 94139 94144 94145 94151 94160 94161 94163 94177".split(" ") );


// HOMEWORK
//How many evictions per zip code then tell me which zip code has the most evictions

//1amazon1

//mongodb+srv://commentsProjectUser:<password>@cluster0-4w1oj.mongodb.net/test?retryWrites=true&w=majority

































// 1st data is the object the 2nd one is the key
//console.log( stringToObject(data.data[1000]) );

// Question 1 Function
function stringToObject(string) {
    //Split up the entry string into its individual parts
    let entryArray = string.split(",");
    // Split up the date string into multiple parts
    let entryDate = entryArray[5].split("/");

// index 4 is zipcode, 17 is Ellis act, 18 is condoConversion,... Create a new object and provide the proper values
    let evictionObject = new EvictionNotice(entryDate[0], entryArray[4], entryArray[17], entryArray[18] );
   
    // Return new object to call location.
    return  evictionObject;
}