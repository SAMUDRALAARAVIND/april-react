import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

/**
 * What is Redux and why do we need them ?
 *  Redux gives global state management.When we update redux state, redux will be update the components which are having the updated data.
 *  Redux is an external javascript library and that doesn't come with react.
 *  Redux can also be used in every javascript application, it bacame popular by react.
 * Terminology in redux
 * Counter App using redux
 * 
 * 
 * using useState we can acheive the state of a component 
 * using Redux we can acheive the application's state(global state).
 * 
 * state is some data (string, number, boolean, object, array) that can be mutated
 * Expectation in React: Upon state change for a component , the component should be re rendered.
 */

/**
 * Redux terminology
 * 
 * 1. store (state)
 * 2. Customer asking for medicine to the salesperson.( customer is dispatching an action to the sales person)
 * 2. reducer (salesperson) which can modify the state.
 * 3. subscriber ( cashier ) is some who gets updates whenever there's a change in the store.
 */
// store = { dispatch: f, getState: f, subscribe: f }
function App() {
  const dispatch = useDispatch();
  // useDispatch => returns the dispatch function for dispatching the actions to reducers.
  const state = useSelector((reduxState) => {
    return reduxState.count;
  });

  console.log("rendered", state)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

// the callback registered with the subscribe method of store, will always be executed whenever there's a redux state change.

export default App;
