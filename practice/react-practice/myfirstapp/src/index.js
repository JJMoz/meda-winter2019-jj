// import is like require but import lets you pick certain packages (parts) of the library. Installs React Developer Tools for Browser
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
//JS function. need to capitalize, to differentatate between html...creates reusablity.
function About (){
    return (
        <p>This is officially a React Function Component</p>
    );
}
// most use "props" for React, props= properties
function H1Generator(props){

       let temp = props.text;
        
       return (
           <h1 className="myCSSClass">{props.text}</h1> 
    );
}
// below is better practice to do above, arrow function
const H2Generator = (props) => {
    return (<h2>{props.something}</h2>);
}

// class extends another class, it inheritence..
class Counter extends React.Component {
    constructor(){
        super();

        this.state = {
            score: 0
        };
    }

    render() {
        return (<p>The current score is:{this.props.temp} </p>);
    }

}


const idOfDiv = "test";
// JSX version of createElemnet(); same as above
const app = (
    // To "interpolate" JavaScript, use curly braces. (insert something of a different nature into something else )// xml needs a space before closing bracket(space / >)
    <div id={idOfDiv}>
    <about tempScore={3} />

    <H1Generator text="Hi this custom text" />
    <H2Generator something="This is H2 line " />
    <H1Generator text= "This is some other line." />
    <Counter />
        {title}
        {paragraph}
    </div>
);



//render tells it to put it in the webpage... Render component to target element.(2 arguments)
ReactDOM.render(
    app,
    // root is in the index.html, it is auto created.
    document.getElementById("root")
);


// JSX SYNTAX
// Anything that is written in JSX should go in between a pair of parentthese.
// Any Javascript inside of JSX should be written between a pair of curly braces
// EXAMPLE
//     let text = (<p>{someJSVariable}</p>);