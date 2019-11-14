//BACKEND (server- code runs on server)

//Includes into our code the FS package (builtin)
const fs = require ("fs");
// Includes inot our code the Express provided by NPM
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

 // Variable to make sure the file name is the same every time..took it out of a house and put it on the street so that the 2nd house knows about it. Cannot go into other houses.
 let filename = "commentHistory.json";

// ROUTES
//   ".use" provides static files (pre-written files)
//   ".get" is for non static file
// First Argument is the ROUTE PATH, Second Argument is directory Path to load when someone requests the ROUTE name......"/" is name of ROUTE folder then goes to client folder
app.use("/", express.static("client/"));
// ......(arrow(=>) function )    path, request is a object...., response is a object where to send it... object responding to a post request
// An HTTP Post Handler called /submitComment
//.... First arugment is JTTP Post route name, second argument is the callback function the /submitComment Post handler.
// Callback function parameters: request holds the object that was sent to us through the Internet, the response object holds a reference of where is to send the response to (like IP address).... (receive, send or req, res)
app.post("/submitComment", (request, response) => {

    // Rename the data sent to us (located in request body) to something simpler like objectFromRequest......object from front-end(jQuery)
    let objectFromRequest = request.body;
    
    console.log(objectFromRequest);

//not needed anymore
    //let text = objectFromRequest.message;
   // console.log("We recieved a request for /submitComment" + text);

   // If the file exits do/run code in codeblock..... existsSync checks if the file exits
   if (fs.existsSync(filename)) {

        // read the file and store the contents in the variable comments.....
        let comments = fs.readFileSync(filename, "utf8");
    // parse the JSON and reuse the same comments variable.....convert from string, right side comments is done/happens first
        comments = JSON.parse(comments);
    //add the new objectFromRequest object to the array inside of the comments object ....add object to it
        comments.commentsArray.push(objectFromRequest);

        // then convert comments back inoto a string as JSON....convert back to string so we can save it
        comments = JSON.stringify(comments);
        // finally save the JSOn string to a file
        fs.writeFileSync(filename, comments, "utf8");
        console.log ("New Comment saved to the Hard Drive");

   } else {
// object.... If the file does not exis
// We prebuild the object (wehich includes the comment we just recieve) to save as JSON
    let comments = {
        commentsArray: [objectFromRequest]
    };
// Convert it actual JSON string
    comments = JSON.stringify(comments);
// Finally save JSON string to new File
    fs.writeFileSync(filename, comments, "utf8");
    console.log("Note: No save file detected, creating New file. New comment Saved to Had Drive");

}


   // let data = {
     //   text: "Thank you for your message"
    //}

  // 200 is http respond status it is the default value that everything is "OK". If you do not want to send any data back, you can use .sendStatus(). You can only use sendStaus or send once to "fulfill" front-end request. 
 response.sendStatus(200);



});
// parameters created the varibles. 
// A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response) => {

    // Check if the JSON file exists......
    if (fs.existsSync(filename) ) {

        //.... IF it exists then read it ......
        let comments = fs.readFileSync(filename, "utf8");
        //... and convert to a JavaScript Object....
        comments = JSON.parse(comments);
        //... finally send it to the requester.
        response.send(comments);
    } else {
        //..... IF it does not exist, then send an error 500 to the requester(front-end)
        response.sendStatus(500);
        // 500 error = internal server error
    }

});
