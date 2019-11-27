
// Use the mongoose package so we can talk to the MongoDB Atlas
const mongoose = require("mongoose");
// remove < > and replace <password> with real password...... The credentials and locations to log into the MongoDB account, This should normally be somewhere else that's more secure. (in a seperate file that is .gitignored) 
const dbConnect = "mongodb+srv://commentsProjectUser:1amazon1@cluster0-4w1oj.mongodb.net/test?retryWrites=true&w=majority"

// Additional options when connecting to MongoDB
const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
};

// mongoose method.... Actually connect to the MOngoDB database. Attach the login crednitals string and the options object.
mongoose.connect(dbConnect,options, (error) => {
    
    // Whe MongoDB server responds, test if an error was recieved.
    if (error) {
        // If there ws an error, display it.
        console.log("Something happended conncecting to the database!  cannot connect. ", error);
    } else {
        // If no error, congratz!
        console.log("Successfully connected to MongoDB!");
    }

});
// connect is to connect, connection is the road..... store the object "conncection" in a variable called db
let db = mongoose.connection;

// not sure what on does.... Hookup any MongoDB errors we recieve to the console.
db.on("error",console.error.bind(console, "MongoDB connction error: "));

// Tell mongoose what a Promise is by providing the Class to it
mongoose.Promise = global.Promise;

// FINISHED CONNECTING TO MONGODB


// Below is the credentials and locations to log into the MongoDB account
// const dbConnect = "mongodb+srv://commentsProjectUser:1amazon1@cluster0-4w1oj.mongodb.net/test?retryWrites=true&w=majority"

//------------------------------------------------

// SCHEMA are blueprints on how the data should be stored in the database.......is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied on the data.... Is like a filter/or checklist checking the file has all the requirements or matches

// A SCHEMA FOR OUR DATABASE

let Schema = mongoose.Schema;
// Customize our Schema and name it practiceSchema
let practiceSchema = new Schema({
        note: String,
        old: Boolean,
        timesUpdated: Number,
        city: String

});

//The model, hooking up the model to the schema, collection names have to begin in with a lower case and end in a S..... Created a new Model that has the NEED TO FINISH
let practiceModel = new mongoose.model("myFirstCollections",practiceSchema);

// CREATE A FILE IN THE DATABASE
// BELOW HOW TO SAVE DATA TO DATA BASE, (COMMENTED OUT BECAUSE WE DO NOT WANT TO SAVE EVERYTIME)
/*
let newEntry = new practiceModel ({
    note: "This is my 2ND note on the database",
    old: false,
    timesUpdated: 2
});
//saves to database and callback(function) to check for errors
newEntry.save((error) => {
    if (error) {
    console.log("There was an error at MongoDB Atlas" + error);
    } else {
        console.log ("We saved the data!");
    }   
});  */

//---------------

// READING A ENTRY IN OUR DATABASE

//If there is no Criteria/Rules then all data will be shown.... An Object with the criteria to search the database with.
let searchCriteria = {
    old: false,
    timesUpdated: 2
};
//FIND METHOD/OBJECT takes 2 arguments.. find is read database....Actually search the database. 1. set of properties that you want to match 2. Return the result, callback function for when the database responds. The order matters. ERROR needs to be first, results second,
practiceModel.find(searchCriteria, (error, results) => {
    // If error, then ....
    if (error) {
        console.log("Something went wrong!" + error);
        // .... Tell us about it
    } else {
        // Otherwise console log the entries found.
        console.log(results);
    }

});

// UPDATE
//---------------
//Data to update the targeted entry with the righ id
let dataTotalUpdate = {
    old: true,
    city: "San Francisco"
}

//takes 3 arguements 1 ID of what we want to update 2. what we do NOT want to update 3. Callback function.... Submit the request to MongoDB with the proper id and data to update
practiceModel.findByIdAndUpdate("5ddc20e5a5caf66b3f640b24", dataTotalUpdate, (error, results) => {
    if (error){
    console.log("Something happened "+ error);
} else {
    console.log(results);
}
});


//DELETE FROM DATABASE
// takes 2 arguments 1. the data I want to delete ID . 2. Callback Function..... First Argument is the id of the entry to delete, second argument is the callback function that runs when MongoDB responds with success or failure. 
practiceModel.findByIdAndDelete("5ddc20e5a5caf66b3f640b24", (error, results) => {
    if (error){
        console.log("Something happened " + error);
    } else {
        console.log(results);
    }

});



//const dbConnect = "mongodb+srv://practiceUser:1amazon1@cluster0-4w1oj.mongodb.net/test?retryWrites=true&w=majority"