
const fs = require ("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;

http.listen(port);
console.log("Express server running on port " + port);

// ABOVE CODE IS WHAT IS NEEDED TO CREATE A SERVER


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ABOVE IS BASIC SETUP FOR EXPRESS (LIKE THE HTML TEMPLATE)


// BELOW IS CUSTOM CODE FOR EXPRESS
 let filename = "commentHistory.json";

// ROUTES
app.use("/", express.static("client/"));

//HOUSE 1
app.post("/submitComment", (request, response) => {    
    console.log(objectFromRequest);
   if (fs.existsSync(filename)) {
        let comments = fs.readFileSync(filename, "utf8");

        comments = JSON.parse(comments);

        comments.commentsArray.push(objectFromRequest);

        comments = JSON.stringify(comments);
       
        fs.writeFileSync(filename, comments, "utf8");
        console.log ("New Comment saved to the Hard Drive");

   } else {

    let comments = {
        commentsArray: [objectFromRequest]
    };
    comments = JSON.stringify(comments);
    fs.writeFileSync(filename, comments, "utf8");
    console.log("Note: No save file detected, creating New file. New comment Saved to Had Drive");

   } 
 response.sendStatus(200);

});
// HOUSE 2
app.post("/loadComments", (request, response) => {
    if (fs.existsSync(filename) ) {
        let comments = fs.readFileSync(filename, "utf8");
        comments = JSON.parse(comments);
        response.send(comments);
    } else {
        response.sendStatus(500);
    }

});

