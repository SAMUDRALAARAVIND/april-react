/**
 * 1. callbacks for state updation
 * state uplifting & lazy intialisation
 * -- movie app with filters
 * assignment problems
 */
// setter method takes a new state or a callback function 
// state updating callback takes the current state of the component as an argument and should return the next update.
import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(10);

//   const inc = () => {
//     // setCount(count + 9); // 19
//     // setCount(count - 3); // 19 - 3 = 16
//     // setCount((current) => {
//     //   return current + 19
//     // });
//     // setCount(count + 3);
//     // setCount((current) => {
//     //   return current + 10;
//     // })
//     // setCount(count + 5) // 15
//     // setCount(count + 5) // 15
//     // setCount(count + 5) // 15
//   }

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={inc}>Increment</button>
//     </div>
//   );
// }


// Lazy intialisation 

// Lazy intialisation: intialising the state of a component by passing a callback function to the useState method. with this way the callback function be called only during the first render.
const Counter = ({ n }) => {
  const [count, setCount] = useState(() => {
    console.log("inside callback");
    let sum = 0;
    for (let i = 1; i <= n; i++)
      sum += i;
    return sum;
  });
  // instead of defining the intial update to be zero, we want the intial count to be sum of first n natural numbers

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <button onClick={dec}>Dec</button>
      <h2>Count: {count}</h2>
      <button onClick={inc}>Inc</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter n={20} />
    </div>
  );
}


export default App;
