// Use the Express package.
// express is really big function, calls in file
const express = require("express");

// Since express is a big function we will run it as a function..below.. runs express server
const app = express();
//http package request needed so express will listen for http online........ Linking http to server below.... Feed Express server to the HTTP package
const http = (require("http").Server(app));

//need to asign a port for our web server port just for web services is "8080". normal webage port is "80". so do not use for development so we use "8080"... So "8080" for development then change to "80" when you go live

// creating port variable, 3000 is node's default 
const port = 8080;

//.listen is a ??method?? that tells what port http to listen too .... Tell HTTP to which port to listen to.
http.listen(port);

console.log("The express server is running on port " + port + "!");

// Express Routes..... "use" method---->
// Syntax
// "http://yourserver/subfolder/index.html/client"
// app.use("/client", express.static("./web_files") );

app.use("/myProject", express.static("../../../../meda-fall2019-jj/projects/portfolio/index.html"))

//http://localhost:8080/myProject-----> The Server in the  express/firstServer folder follows the path ../../../meda-fall2019-jj/projects/portfolio/index.html to get the index.html file and put it on the "Server" 

// http://localhost:8080/client --> Gets sent to --> web_files folder