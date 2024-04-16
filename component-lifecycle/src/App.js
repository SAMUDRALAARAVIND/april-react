/**
 * Component life cycle methods & Class components
 * Weather app
 * assignment questions
 */

import { Component } from "react";

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// A class can be called as class component only if it inherits `Component` class from React.
// The class has to implement the render method. which should return a jsx

// Component life cycle phases 
/*
1. Mounting ( creating phase )
    constructor 
    render => JSX will be put on the screen
    componentDidMount
2. Updating 

3. UnMounting (removal)
   componentWillUnMount
*/

// By default class components have built in state management ( no need of any hooks )
// never update the state during the execution of constructor | render method.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  render() {
    console.log("inside render");
    const increment = () => {
      this.setState({ count: this.state.count + 1 })
    };
    return (
      <div style={{ border: "1px solid blue", margin: 100 }}>
        <p>First class component , {this.state.count} </p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("component is mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component is about to die");
  }
}

// new App();
export default App;
