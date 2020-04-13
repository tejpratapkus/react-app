import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import FunctionalProfile from './FunctionalProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Tutorial
         <Home/>
        <Profile/>    
        <FunctionalProfile text="Functional profile text"/>
        </a>
      </header>
    </div>
  );
}

export default App;
