// Include packages we will be using.
const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8");

//CSV hava a \n at the end of each line, like a line break. 
//Split converts strings into a Array, each line has it's own index [0]
//Then made a varible for the array (dataArray)
const dataArray = dataset.split("\n");
// removes the last line of the dataset (removing the last array indext) because it is empty
dataArray.pop();
// Removing the first line (the heading) but keeping it because we will use it in the future.
let headings = dataArray.shift();

// Counter for the amount of 2018 entries we found
let total = 0
// creating a opject with 2 
let json2018Data = {
    headings: headings,
    data: []
};

// BELOW PULLS JUST THE EVICTIONS FROM 2018, ALL THE 2018 LINES..... Loop through all the entries of the dataset (not including headings, and last empty lin).
for (let i = 0; i < dataArray.length; i++) {

    // Test the entry using the detect2018 function
    let pass = detect2018(dataArray[i]);

    // used === instead of == because 1 was coming up wrong, ====  equal and same datatype..... IF PASS is True , then add a 1 to counter
    if (pass === true){
    //removed console.log below because it would add alot of lines when code is run
   // console.log("The line entry" + i + " is from the year 2018: " + detect2018);
    total++;
    // Grab current line adn add it ot JSON object file
    json2018Data.data.push(dataArray[i]);
    // If we encounter an issue, tell us about it
    } else if (pass === 1){
        console.log("The line " + (i +1) + "has issues! please check.");
        console.log(dataArray[i]);
    }

    //Otherwise if other than 2018, move aon to the net entry

}
// Finally console log the total amount of entries that matched 2018
//console.log(total);

//console log object
//console.log(json2018Data);

// converts json into string data
let jsonString = JSON.stringify(json2018Data);

//creates a json file with 2018 entries... writes JSON string file
fs.writeFileSync("2018entries.json", jsonString, "utf8");
console.log ("File was written");

// IF working with someone else search to see if the file exists then append if does not exists then create.









// This function accepts a string only, returns true, false, or 1 if issue.
function detect2018(entry) {
    //split by commas ","...Creat an array that splits up the individual columns of the entry
        const singleEntryArray = entry.split(",");

        // split the 5th array by "/" (splits the day month and year).... Grab the date index and split that by its day, month and year, then store in anothr array
        const entryDate = singleEntryArray[5].split("/");

// 0= month 1=day 2= year... Using the array with the individual data parts check the year index and to 2018.
        if ("2018" == entryDate[2]){
            // If there is no value in index 2, that means there was an issue
           return true;
        } else if (undefined === entryDate[2]){
            console.log("We found the issue with the line:\n " + entry );
            return 1;
        } else {
            // If it is not 2018, return false
            return false;
        }
}


//industryexplorers.com