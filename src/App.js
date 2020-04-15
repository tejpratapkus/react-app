import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toggle: true
    }
  };

  render() {
    return (
      <div>
        <h1>React: Component will unmount</h1>
        {
          this.state.toggle ? <User /> : null
        }
        <button onClick={()=> {this.setState({toggle:!this.state.toggle})}}>Delete</button>
      </div>
    );
  }
}

export default App;
