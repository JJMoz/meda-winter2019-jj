//BACKEND (server- code runs on server)

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// http package comes with node
const http = require("http").Server(app);

const port = 3000;

http.listen(port);

console.log("Express server running on port " + port);

// body- parser package (comes with express) is need to read data sent through POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes
// "/website" is name of root
//.use is 
app.use("/", express.static("client/"));

// path, request is a object...., response is a object where to send it
app.post("/updateData", (request, response) => {

    let objectFromRequest = request.body;
    
    console.log(objectFromRequest.message);

    let text = objectFromRequest.message;

    console.log("We recieved a request for updateData");

    let data = {
        text: "Thank you for your message"
    }

  // 200 is http respond status it is the default value that everything is ok. (ie 
   // response.sendStatus(200);

   response.send(data);

});