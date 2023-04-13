// const heading = React.createElement("h1", { id: "heading" }, "HELLO REACT");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//Nested structure using core React 

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id:'h1'}, "I am H1"),
    React.createElement("h2", {id:'h2'}, "I am H2"),
    React.createElement("h3", {}, "I am H3")
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(parent)