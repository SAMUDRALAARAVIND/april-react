import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AxiosExample from "./axios-example.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

// const Test = () => {
//   const [show, setShow] = useState(true);

//   return <div style={{ border: "2px solid red", margin: 100 }}>
//     {show && <App />}
//     <button onClick={() => setShow(!show)}>Toggle App component</button>
//   </div>
// }
root.render(
  <>
    {/* <Test /> */}
    <AxiosExample />
  </>
);