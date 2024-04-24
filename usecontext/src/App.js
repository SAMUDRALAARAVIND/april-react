import React, { createContext, memo, useContext, useState } from 'react';
import './App.css';

const AgeContext = createContext("Rajesh");

const C3 = memo(() => {
  const contextValue = useContext(AgeContext);
  console.log(contextValue); //
  return <p>C3 Component, </p>
})

const C1 = memo(() => {
  const contextValue = useContext(AgeContext);
  console.log(contextValue)
  return <p>C1 component</p>
});

const C2 = () => {
  return <div>
    <p>C2 component</p>
    <AgeContext.Provider value={{ name: "Manish", age: 100 }}>
      <C3 />
    </AgeContext.Provider>
  </div>
}

function App() {
  const [age, setAge] = useState(23);

  return (
    <>
      <AgeContext.Provider value={{ name: "aravind", age }}>
        <AgeContext.Provider value={{ name: "Rajesh", age: 34 }}>
          <div>
            <C1 />
            <C2 />
            <button onClick={() => setAge(age + 1)}>Increment Age</button>
          </div>
        </AgeContext.Provider>
      </AgeContext.Provider>

    </>
  )
}

/**
  createContext method returns an object { Provider: ReactComponent }
   => Provider component takes a single prop called (value) which is the context value
   => useContext hook takes the context object as an argument and returns the context value of nearest ancestor provider.
 */


export default App;
