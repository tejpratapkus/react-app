import React, {Component, PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'


class App extends PureComponent {

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
}

export default App;
