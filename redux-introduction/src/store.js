
import { legacy_createStore as createStore } from "redux";

/*
// reducer is a function which takes the currentState and an action and returns the updated state
const reducer = (state, action) => {
    // intial execution: state = undefined, action = {type: "@@redux-INIT..."}
    // after 1st call updated state: {count: 1}

    console.log(action)

    // during second call : state = {count: 1}, action = {type: "abc"}
    // after 2nd call updated state = {name: "aravind"}
    if (action.type === "abc") {
        return { name: "aravind" }
    }
    return { count: 1 };
}

const store = createStore(reducer);
console.log(store.getState()); // {count: 1}

// dispatch function in store is used to dispatch actions to reducer.
// actions are plain javascript object with a type attribute. 
// action = { type: "" }
store.dispatch({ type: "abc" });
console.log(store.getState()); // {name: "aravind"}

store.dispatch({ type: "dkdkd" });
store.dispatch({ type: "abc" })

// store = { dispatch: function, getState: function, subscribe : function }
*/

// counter app: increment, decrement, increment_by_count, decrement_by_count, reset the count 

/**
 * actions: 
 * {type: "increment"} => increment the current count by 1 unit
 * {type: "decrement"} => decrements the current by 1 unit
 */
const counterReducer = (state = { count: 10 }, action) => {
    // write state mutation logic
    if (action.type === "increment") {
        // return { count: state.count + 1 };
        // state = #300
        state.count += 1;
        return { ...state }; // #300
    }
    if (action.type === "decrement") {
        return { count: state.count - 1 };
    }
    if (action.type === "reset") {
        return { count: 10 };
    }
    if (action.type === "increment_by_count") {
        return { count: state.count + action.payload }
    }
    if (action.type === "decrement_by_count") {
        return { count: state.count - action.payload };
    }

    return state;
}

const store = createStore(counterReducer);

// if there's state change then only the subscribe method's listener gets executed.
// store.subscribe(() => {
//     console.log("updated state", store.getState());
// });

// store.dispatch({ type: "increment" }); // {count: 11}
// store.dispatch({ type: "increment_by_count", payload: 34 })
// store.dispatch({ type: "decrement_by_count", payload: 15 });

export default store;
