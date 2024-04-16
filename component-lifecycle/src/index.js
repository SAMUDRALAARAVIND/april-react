import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherApp from "./weather.js"

const root = ReactDOM.createRoot(document.getElementById('root'));


// const Test = () => {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       {show && <App a={10} b={20} name="aravind" />}
//       <button onClick={() => setShow(!show)}>Toggle App component</button>
//     </>
//   )
// }

root.render(
  <>
    <WeatherApp />
  </>
);

// state can not be mutated
// this.state = {count : this.state.count + 1}
// this.setState({count: this.state.count + 299 })








// <App a={10} b={20} /> => if App is a FC => App({a: 10, b: 20});
// <App a={10} b={20} /> => if App is a CC => new App({a: 10, b: 20});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
