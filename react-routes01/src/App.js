
import { createContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Content from "./components/Content"

// const Test = ({ children }) => {
//   console.log(children)
//   return <div> This is a wrapper component
//     {true && children}
//   </div>
// }

// function App() {
//   return (
//     <div className="App">
//       <Test>
//         <h1>Hello world</h1>
//         <p>Some para</p>
//       </Test>
//       <Test />
//     </div>
//   );
// }

const colors = {
  light: {
    color: '#000',
    backgroundColor: '#fff'
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000'
  }
}

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(t => t === "light" ? "dark" : "light")
  }

  useEffect(() => {
    Object.assign(document.body.style, colors[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      <NavBar />
      <Content />
    </ThemeContext.Provider>
  )
}

export default App;
