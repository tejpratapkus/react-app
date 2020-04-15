import React, { Component, PureComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'


function App() {

  const [count, setCount] = useState(100);
  return (<div>
    <h1>Hooks in function Component {count}</h1>
    <button onClick={() => { setCount(count + 1) }}>Increment</button>
  </div>)

}

/*class App extends PureComponent {

  constructor() {
    super();
    this.state = {
      data: 10
    }
  };

  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>React: Component will unmount</h1>
        {
         // this.state.toggle ? <User /> : null
        }
        <button onClick={()=> {this.setState({data:20})}}>Delete</button>
      </div>
    );
  }
}*/

export default App;
