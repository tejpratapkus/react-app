import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import FunctionalProfile from './FunctionalProfile';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         'Hellow with JSX
         <Home/>
        <Profile/>    
        <FunctionalProfile text="Functional profile text"/>
        </a>
      </header>*/} 
      {
        React.createElement(
          'h1',
           {className: 'head-text'},   // null,
          'Hellow without JSX'
        )
      }
      
    </div>
  );
}

export default App;
