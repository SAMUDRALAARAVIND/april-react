

/**
 * 1. React List keys and their importance
 * 2. useRef, useCallback, useMemo => React memo
 * 3. auth app
 *  jwt token
 *  signin 
 *  signup
 * 
 * 
 * useRef => React Hook, gives you a single memory reference throughout the life cycle of a component
 */

import { useEffect, useRef, useState } from "react";

let list = []; // [ #200, #200, #200 ... ]


// function App() {
//   const [toggle, setToggle] = useState(true);

//   const user = useRef({ name: "aravind", toggle }); // useRef(obj) => { current: obj }
//   // After first render: user = { current: { name: "aravind" }} => #200

//   // after mounting user = {current: {name: "Rajesh"}} => #200

//   // in second render: user = #200 => {current: {name: "Rajesh"}} => #200

//   // list.push(user);

//   // console.log(list);
//   // if (list.length === 2) {
//   //   console.log(list[0], list[1], list[0] === list[1]);
//   // }

//   // useEffect(() => {
//   //   user.current = { name: "Rajesh" };
//   // }, []);
//   console.log(user);

//   useEffect(() => {
//     console.log(user);
//     user.current.name = "Rajesh";
//     console.log(user)
//   }, []);

//   return (
//     <div className="App">
//       <p>{user.current.name}</p>
//       <button onClick={() => setToggle(!toggle)}>Re render</button>
//     </div>
//   );
// }

// during first render

/*
  toggle: true
  useRef({name: "aravind", toggle: true}) => #200 = {current: {name: "aravind", toggle: true}}

  After mounting: 
    #200 = {current: {name: "Rajesh", toggle: true}}

  Second render: 
    toggle: false
    useRef({name: "aravind", toggle: false}) => #200
    {current: {name: "Rajesh", toggle: true}}
 */


function App() {
  const paraRef = useRef(null); // 
  const boldRef = useRef(null);
  // paraRef: {current: null} => #200
  console.log(paraRef.current);

  useEffect(() => {
    console.log(paraRef);
    console.log(boldRef);
  }, []);

  return <>
    <p ref={paraRef}>Some text</p>
    <b ref={boldRef}>Bold element</b>
  </>
}


export default App;
