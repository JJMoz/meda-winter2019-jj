// Include packages we will be using.
const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8");

//CSV hava a \n at the end of each line, like a line break. 
//Split converts strings into Arrays
//Then made a varible for the array (dataArray)
const dataArray = dataset.split("\n");


// Renamed the 23rd record into a spicific variable name.
const singleEntry = dataArray[22];

console.log(dataArray.length);

// BELOW PULLS JUST THE EVICTIONS FROM 2018, ALL THE 2018 LINES
for (let i = 0; i < dataArray.length; i++) {

    let pass = detect2018(dataArray[i]);

    // used === instead of == because 1 was coming up wrong, ====  equal and same datatype.
    if (pass === true){
    console.log("The line entry" + i + " is from the year 2018: " + detect2018(dataArray[22]));
    } else if (pass === 1){
        console.log("The line" + (i +1) + "has issues! please check.");
        console.log(dataArray[i]);
    }

}











// This function accepts a string only, returns true, false, or 1 if issue.
function detect2018(entry) {
    //split by commas ","
        const singleEntryArray = entry.split(",");
        // split the 5th array by "/" (splits the day month and year)
        const entryDate = singleEntryArray[5].split("/");

// 0= month 1=day 2= year
        if ("2018" == entryDate[2]){
           return true;
        } else if (undefined === entryDate[2]){
            console.log("We found the issue with the line:\n " + entry );
            return 1;
        } else {
            return false;
        }
}
