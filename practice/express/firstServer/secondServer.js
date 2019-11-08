const express = require("express");

const app2 = express();

const http = (require("http").Server(app));

// 3000 is node's default Port
const port = 3000;

http.listen(port);

console.log(port);
