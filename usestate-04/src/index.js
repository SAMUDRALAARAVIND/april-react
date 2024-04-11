import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./counter.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)

// <Counter /> => Counter();

// let count = 0;

// const Counter = () => {
//   return (
//     <div id="counter">
//       <h1>Count :</h1>
//       <b>{count}</b>
//       <button onClick={inc}>Increment</button>
//       <button onClick={dec}>Decrement</button>
//     </div>
//   );
// }

// const inc = () => {
//   count++;
//   root.render(<Counter />);
// };

// const dec = () => {
//   if (count === 0) {
//     return
//   }
//   count--;
//   root.render(<Counter />);
// }

// root.render(<Counter />);
















/*
  1. Virtual DOM & Real DOM
  2. Diffing & Reconciliation
  3. React Hooks & useState Introduction
*/

// const heading = React.createElement("h1", null, "title");
// const para = React.createElement("p", null, "Para text")
// const container = React.createElement("div", null, heading, para)
// debugger





// function renderElements(names) {
//   const container = document.getElementById("root");

//   names.forEach(name => {
//     const p = document.createElement("p");
//     p.innerText = name;
//     container.appendChild(p);
//   })
// }


/**
  <div>
    <h1>title</h1>
    <p>Para text</p>
  </div>
 */
// const h1 = document.createElement("h1");
// h1.innerText = "title";
// const p = document.createElement("p")
// p.innerText = "Para text"
// const div = document.createElement("div");
// div.append(h1, p);


// // with the react elements
// const heading = React.createElement("h1", null, "title");
// const para = React.createElement("p", null, "Para text")
// const container = React.createElement("div", null, heading, para)