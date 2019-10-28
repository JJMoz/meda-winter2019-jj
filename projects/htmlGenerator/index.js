var fs = require('fs');
var terminalText = process.argv;

// or || they put "none" when they want no color or put a color. if they put none then the color is "transparent"
if (terminalText[3] == undefined || terminalText[3]== 'none') {
    console.log("There was no color specificed, so the default is what will be used");

    terminalText[3] = "transparent";

}

var htmlTitle = "My First Web Page Generatoed by Javascript";
var htmlStyle = `

body { 
    background-color: ${terminalText[3]};


}`;
// Homework answer
//var htmlBody = '<p>$terminaltext[4]</p>'; I had "terminal[4]" and p tags in between body tags below in html
var htmlBody =`<p>${terminalText[4]}</p>` ; 
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
     ${htmlBody}
    </body>
</html> `;

//Homework take away <p> tag inbetween <body> tags...update took away p tags

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

