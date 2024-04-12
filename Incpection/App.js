
const data = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
            React.createElement(
                "h1",
                {},
                "I am H1 tag")));


//one childern createlement

const data1 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
            [React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]));
//siblings pass array
const heading  = React.createElement("h1",{id:"heading"},"Hello World from React");
//{} attributes to the tags
//props :childrean and attributes createelement return the object
        //using reactdom for rendering for putting the in DOM
        //created a root in react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//await delay(1000);
root.render(data1);
//replace the inner html of root in indexreact.html
//render the data1 inside the root
//Render will create the tag and putting it on browser
//render takes the object

//react operate only on root it can be header , footer, sidebar

//react can only work at root element - It is a library 