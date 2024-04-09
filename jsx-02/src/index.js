// src folder contains the code of entire application
// React , ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "title" }, "Welcome to React !");

const root = ReactDOM.createRoot(document.getElementById("app"));

/**
    <div id="container">
        <h1>Title Text</h1>
        <p class="para">Some Para</p>
    </div>
 */

// const title = React.createElement("h1", null, "Title text");
// const para = React.createElement("p", { className: "para" }, "Some Para");

// const container = React.createElement("div", { id: "container" }, title, para)

// Self closing tags should be closed properly.
// We can embed variables / expressions inside jsx by using {} notation.
// In jsx if we keep undefined or null value that will be not shown on the UI.
// For every JSX element we can have only one parent element.

// let users = [<div>
//     <p>Para</p>
//     <b>Bold</b>
// </div>, "Akhil", <p>Rajesh</p>];


// const container = (
//     <div id="container">
//         {
//             users
//         }
//     </div>
// );

function callme() {
    alert("Clicked on Button");
}

function mul(a, b) {
    return <b>{a * b}</b>;
}

// <></> => Fragment / Empty react element
let container = (
    <>
        <div>
            <button onClick={callme}>Click Me</button>
        </div>
        <p>
            {mul(3, 4)}
        </p>
        <b>{null ?? null}</b>
    </>
)


root.render(container);


const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(<h1>Some text in root 2</h1>)