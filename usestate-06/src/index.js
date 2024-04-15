import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateUplifting from "./stateuplifting.js"
import Menu from "./menu.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <StateUplifting /> */}
    <Menu />
  </>
);

//  <App /> => App()
