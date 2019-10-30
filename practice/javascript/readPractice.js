// Import the Package FS
var fs = require('fs');

//variable for future object.Important to put it in the begining so that it runs 1st and the rest of the code knows about it
var convertedObject;

// Read file saved.json to work on content.
var JSONText = fs.readFileSync("saved.json","utf8");

// Converting JSON to a JavaScript Object. Must be JSON format or will break!!
convertedObject = JSON.parse(JSONText);

//Shows the "saved.json" info in Terminal
//console.log(convertedObject);

// updates the age in the "saved.json" file
convertedObject.age = 15;

// Adds the legs property. other code languages will not let you add a new property this way. It will say no such property
convertedObject.legs = 2;



// Need to convert to string before you send it to the JSON file.. Converts JS to JSON text.
var stringfiedObject = JSON.stringify(convertedObject);


// START This section adds a historical record of the data to a file called "history.txt"

// Previous way of writing history, but unusable for JS programs.
// fs.appendFileSync("history.txt", stringifiedObject + "\n", "utf8")

// Read History File
var historyString = fs.readFileSync("history.json", "utf8");

// Convert JSON to JS Object
var historyObject = JSON.parse(historyString);

// "Pull out" arrays from historyObject
var historyArray = historyObject.objectsArray;
var timestampArray = historyObject.timestamp;

// Add new informaton to the arrays
historyArray.push(convertedObject);
timestampArray.push(new Date().toLocaleString());

// Update arrays in HistoryObject with the modified arrays.
historyObject.objectsArray = historyArray;
historyObject.timestamp = timestampArray;

// Convert Object to JSON
var newUpdatedJSON = JSON.stringify(historyObject);

// Overwrite new JSON on history.json
fs.writeFileSync("history.json", newUpdatedJSON, "utf8");




// End of History Record Save




//Send it to the/updates the JSON file. Save the JSON to the same file, replacing the old content
fs.writeFileSync("saved.json", stringfiedObject, "utf8");