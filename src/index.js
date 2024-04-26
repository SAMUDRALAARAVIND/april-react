import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

/**
 
  > root
    > code 
      > html
        index.html
    > images
      profile.jpeg


      current folder: html
      parent folder : code 

      current folder: ./
      parent folder: ../


      answer: ../../images/profile.jpeg

      ./../ => ../
 */
