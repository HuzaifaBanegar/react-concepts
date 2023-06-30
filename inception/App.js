const heading = React.createElement(
    'h1', 
    {id:"heading"}, 
    "Hello world From React" ) 
// React.createElement takes 3 args=> 1. Tag, 2. Object for Attributes, 3. What we want to put inside.

console.log(heading) 
// Will give you object

const root = ReactDOM.createRoot(document.getElementById('root'))
//Creating root is job of DOM hence ReactDOM
    
root.render(heading); 
// Coverts Object into h1 tag and then render

//react is liabrary because it is applied to small proportion of page itself, and not the whole page.
//Framework is something which comes with more things. React is just a javascript