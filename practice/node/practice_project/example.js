// adds files system package
var fs = require ("fs");

var doubleQuotes = "this is a string";
var singleQuotes = "this is a string";
var stringLiterals = 'this is a string';


var html =
"<html>" +
"<head>" +
"<style></style" +
"</head>" +
"<body></body>" +
"</html>";

var html2 = "<html<head><style></style</head><body></body></html>";

var html3 =
<html>
    <head>
        <style></style>
    </head>

    <body>  

    </body>
</html>

fs.writeFileSync("sample.html", html3, "utf8");


