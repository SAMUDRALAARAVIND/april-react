import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouterApp from './RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// framework => routing (in angular routing is built in)
// In react We need to install react-router-dom to cheive routing.
root.render(
  <>
    <RouterApp />
  </>
);
