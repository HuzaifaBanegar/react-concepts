import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    'h1', 
    {}, 
    "Hello world From React" ) 
// React.createElement takes 3 args=> 1. Tag, 2. Object for Attributes, 3. What we want to put inside.

console.log(heading) 
// Will give you object

const Title=()=>{
    return (
        <div id="heading">Hello this is Title</div>
    )
}

//react.Fragment => <></>
const NewHeading= ()=>(
    <>
    <div>DIV 1</div>
    {Title()}
    <Title/>
    </>
)



const root = ReactDOM.createRoot(document.getElementById('root'))
//Creating root is job of DOM hence ReactDOM
 
const jsxheading=<h1>Hello World from jsxheading</h1>
console.log(jsxheading);
//JSX=>React.createElement

root.render(<NewHeading/>)
// Coverts Object into HTML tag and then render

//react is liabrary because it is applied to small proportion of page itself, and not the whole page.
//Framework is something which comes with more things. React is just a javascript


//JSX [transpiled before it reaches to js] -> Parcel -> Babel


