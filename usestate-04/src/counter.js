import { useState } from "react"

/**
 * Hooks in React:
 * 1. Hooks are the javascript functions which starts with a prefix of `use`
 * 2. Hooks can only be used(invoked) inside a functional component.
 * 
 * useState, useEffect, useRef, useCallback, useContext,  useMemo, useImarativeHandle
 * 
 * useState always return an array of two elements
 * 1. First element represents state of the component (data).
 * 2. Second element is a function which is used to mutate/change the state.
 * 
 * const [state, setState] = useState(intialState);
 * 
 * setState(newState) => this function compares the currentState with the newState and if there's any change then React will schedule a re render of that component.
 */

// const useName = () => {
//     console.log("inside useName");
// }

// useName();
function Counter() {
    const [count, setCount] = useState(0);
    console.log("rendered");

    const inc = () => {
        // setState(new state)
        // As soon as we call setState method react will compare the new State with the old state and decides to trigger a re render or not !
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return <>
        <h1>Count :</h1>
        <button onClick={dec}>Decrement</button>
        <b>{count}</b>
        <button onClick={inc}>Increment</button>
    </>
}

export default Counter;
