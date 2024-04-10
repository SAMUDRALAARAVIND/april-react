import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import "./styles/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
  <App />
</>);


// root.render(
//   // Element({ a: 10, b: 20 })
//   <div>
//     <Element a={10} b={20} />
//     {/* {Element({ a: 10, b: 90 })} */}
//     <span>Span text</span>
//     {/* React element */}
//   </div>
// );

//  <Element a={10} b={20} /> => Element({a: 10, b: 20 });
// <element a={10} b={20} /> => not work

// A function strting with captial letter which returns a jsx is called as a functional component
