// import is like require but import lets you pick certain packages (parts) of the library
import React from "react";
import ReactDOM from "react-dom";

//create a html element in react
const title = React.createElement(
    // name of element
    "h1",
    // Is for artributes of the element
    null,
    // content of element
    "Hello World"
);

//let someTitle = "Welcome to my React website";

const paragraph = React.createElement(
    "p",
    null,
    "this is a paragraph"
);

const idOfDiv = "test";
// JSX version of createElemnet();
const app = (
    // To "interpolate" JavaScript, use curly braces.
    <div id={idOfDiv}>
        {title}
        {paragraph}
    </div>
);



//render tells it to put it in the webpage... Render component to target element.
ReactDOM.render(
    app,
    document.getElementById("root")
);