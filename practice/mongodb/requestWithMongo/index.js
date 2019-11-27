//BACKEND (server- code runs on server)


// Includes inot our code, the Mongoose.js package
const mongoose = require ("mongoose");
// Includes in our code the Express provided by NPM
const express = require("express");
// Inlcude inot our code Body Parser, comes with Express
const bodyParser = require("body-parser");
//Create an Express server Object
const app = express();

// Includes the HTTP package (builtin), and we attach our Express srver object to the HTTP object .......http package comes with node, and calling .Server with (app) argument
const http = require("http").Server(app);
// We create a variable that will hold the port number we want to use.
const port = 3000;
// We pass the port variable to the listen function for the HTTP server.
http.listen(port);
// URL to access our MongoDB database
const dbConnect = "mongodb+srv://commentsProjectUser:1amazon1@cluster0-4w1oj.mongodb.net/commentsproject?retryWrites=true&w=majority"

// Additional options when connecting to MongoDB
const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
};
// Actually connects to MongoDB Atlas
mongoose.connect(dbConnect, options, (error) => {
    if (error){
        console.log(error);
    } else {
        console.log ("Successfully connected to MongoDB Atlas! ");
    }
});

// link up MongoDB errors with the console, and link up the definition of Promises to Mongoose
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error: ") );
mongoose.Promise = global.Promise;

// Building MOngoDB Schema.
let Schema = mongoose.Schema;
let commentsSchema = new Schema ({
    message: String,
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    timestamp: Date
});
// Create a Model for the comments collection using the comments Schema
let commentsModel = new mongoose.model ("comments",commentsSchema);


// Signifying the Developer that Express is now running
console.log("Express server running on port " + port);

// ABOVE CODE IS WHAT IS NEEDED TO CREATE A SERVER

// Needed to read data sent through POST request.....body- parser package (comes with express) is need to read data sent through POST request
//Needed to understand data from Server.
app.use(bodyParser.json());
// Gives Body Parsr specific option to run off of... should extended below be dark blue?
app.use(bodyParser.urlencoded({extended: false}));

// ABOVE IS BASIC SETUP FOR EXPRESS (LIKE THE HTML TEMPLATE)


// BELOW IS CUSTOM CODE FOR EXPRESS


// ROUTES
//   ".use" provides static files (pre-written files)
//   ".get" is for non static file
// First Argument is the ROUTE PATH, Second Argument is directory Path to load when someone requests the ROUTE name......"/" is name of ROUTE folder then goes to client folder... sending it to folder
app.use("/", express.static("client/"));
// ......(arrow(=>) function )    path, request is a object...., response is a object where to send it... object responding to a post request
// An HTTP Post Handler called /submitComment
//.... First arugment is JTTP Post route name, second argument is the callback function the /submitComment Post handler.
// Callback function parameters: request holds the object that was sent to us through the Internet, the response object holds a reference of where is to send the response to (like IP address).... (receive, send or req, res)..post= run code.
app.post("/submitComment", (request, response) => {

    // Rename the data sent to us (located in request body) to something simpler like objectFromRequest......object from front-end(jQuery)
    let objectFromRequest = request.body;
    
    console.log(objectFromRequest);

//not needed anymore
    //let text = objectFromRequest.message;
   // console.log("We recieved a request for /submitComment" + text);

   // Modify the object recieved from thr front end to meet Schema requirements
objectFromRequest.age = parseInt(objectFromRequest.age);
// Date is a  JS object
objectFromRequest.timestamp = new Date();

//
let newComment = new commentsModel(objectFromRequest);
newComment.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log( "Saved a new comment to the database ");
    }
});

  // 200 is http respond status it is the default value that everything is "OK". If you do not want to send any data back, you can use .sendStatus(). You can only use sendStaus or send once to "fulfill" front-end request. 
 response.sendStatus(200);



});
// parameters created the varibles. 
// A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response) => {
    // Read all the comments from MongoDB Atlas
    commentsModel.find({}, (error,results) => {
        // If error tell me about it.
        if (error) {
            console.log(error);
        } else {
            // Build an object that the front-end expects...
            let objectToSend = {
                commentsArray: results
            }
            //.... and send it
            response.send(objectToSend);
        }
    });

});
