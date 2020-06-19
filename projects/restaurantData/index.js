//RESTUARANT DATASET
// include node packages to use in project:
const fs = require("fs");
const lodash = require("lodash");

// Read the dataset file with fs.readFileSync and store info in a variable.
const dataset = fs.readFileSync("restaurantScores.csv", "utf8");

// Convert dataset variable into an array, where each line is a new index.
const dataArray = dataset.split("\n");

// Remove the last index from array because it is empty.
dataArray.pop();

// Create a variable that will store the first line/index of dataArray array.
let headings = dataArray.shift();

// Counter for the amount of 2018 entries we found
let total = 0

// Create object to store all data from SFData dataset that is from the year 2018.
let jsonResaurantScoreData = {
  headings: headings,
  data: []
};

