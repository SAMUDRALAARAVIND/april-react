import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Test = () => {
  const dispatch = useDispatch();

  return <div style={{ border: "1px solid blue" }}>
    <button onClick={() => dispatch({ type: "increment" })}>Increment Count from test component</button>
  </div>
};


root.render(
  <>
    <Provider store={store}>
      <App />
      <Test />
    </Provider>
  </>
);

