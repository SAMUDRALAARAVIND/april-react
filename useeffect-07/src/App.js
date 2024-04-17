/*
  useEffect
  axios 
  sass (extended version css)

  useEffect
  ImageBazzar app ( useState, useEffect )
  context API & theme switch app
  authorization 
  react router dom ( client side navigation )
  redux ( architecture of redux, middlewares and Instagram project )
  reduxjs toolkit
*/

import { useState, useEffect } from "react";

/*
useEffect:  React Hook
 what we can acheive: componentDidMount, componentDidUpdate, componentWillUnMount

 componentDidMount => gets executed after component is mounted
 componentDidUpdate => gets executed after component gets updated

 useEffect => two parameters
 useEffect(callback, []) : void
 useEffect(callback: undefined | null | function , [])


 function Component(){
    states ...

    method ...

    effects ... 

    return ();
 }
*/

// let x = 19;

// function App() {
//   console.log("rendered ", x);
//   const [count, setCount] = useState(10);


//   /*
//     // when we do not pass the dependency list, the callback to useEffect will get executed after every render
//     useEffect(function () {
//       // After every render React will take a decision to execute this callback function or not.
//       // Decision will be based on change of dependency list w.r.to previous render.
//       console.log("inside useeffect");
//     }, [x]);
//   */


//   /*
//     useEffect(() => {
//       // after mounting it gets executed for sure.
//       console.log("after mounted");
//     }, [])
//   */

//   useEffect(() => {
//     console.log("inside first use effect");
//   }, [x, count]);

//   useEffect(() => {
//     console.log("inside second use effect");
//   }, [x])

//   return (
//     <div className="App">
//       <h1>{count} , x: {x}</h1>
//       <button onClick={() => x++}>Increment X</button>
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//     </div>
//   );
// }






// function App() {
//   useEffect(() => {
//     console.log("inside useeffect");
//     return function () {
//       // cleanup function
//       console.log("cleanup function");
//     }
//   }, []);


//   return (
//     <div style={{ border: "2px solid blue", margin: 100 }}>
//       <h1>App Component</h1>
//     </div>
//   );
// }

// 0 -> 1 -> 2 -> 3 ....
const Timer = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let timerId = setInterval(() => {
  //     console.log("inside interval");
  //     setCount((p) => {
  //       return p + 1;
  //     });
  //   }, 1000);

  //   return () => {
  //     // clean up function
  //     clearInterval(timerId)
  //   }
  // }, []);

  // return <div>
  //   <h1>{count}</h1>
  // </div>

  const [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
  }, []);

  return (
    <>
      <button>Start Timer</button>
      <div>{sec}</div>
      <button>Stop Timer</button>
    </>
  );
}


export default Timer;
