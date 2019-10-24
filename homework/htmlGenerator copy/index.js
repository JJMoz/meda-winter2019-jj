var fs = require('fs');
var terminalText = process.argv;

if (terminalText[3] == undefined) {
    console.log("There was no color specificed, so the default what will be used");

    terminalText[3] = "white";

}

var htmlTitle = "My First Web Page Generatoed by Javascript";
var htmlStyle = `

body { 
    background-color: ${terminalText[3]};


}`;
var htmlBody =terminalText[4] ;
var htmlFileName = terminalText[2];
var html;

html =`
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${htmlTitle}</title>
        <meta name="description" content="CHANGE THIS">
        <meta name="author" content="CHANGE THIS">

        <link rel="stylesheet" href="css/styles.css?v=1.0">

        <style>${htmlStyle}</style>

    </head>

    <body>
     <p>${htmlBody}</p>
    </body>
</html> `;

// kills the program if the person does not fill out the name
if (htmlFileName == "" || undefined ) {
    console.log("You are missing a file name, cannot continue");
    //return kills the javascript file, treats it like a giant function . 
    return;
}


var fullFileName = htmlFileName + ".html";

// utf8 here is for the file, utff8 on "meta charset= utf8 is for browser"
fs.writeFileSync(fullFileName, html, "utf8")

console.log("Generation of HTML file has been completed! Check your file folder JJ!");

