import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import FunctionalProfile from './FunctionalProfile';
import ClickEvent from './ClickEvent';
import LifeCycle from './LifeCycle';


function App() {
  return (
   // <div>
      // <Profile text={{name: 'Tej'}} data="Profile data" />    
      // <FunctionalProfile text={{name: 'Tej'}} data="Profile data"/>
   // </div>
     <div className="App">
       {<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <Home/>
          <LifeCycle/>
          <ClickEvent />
         <Profile text={{name: 'Tej'}} data="Profile data" />    
         <FunctionalProfile text={{name: 'Tej'}} data="Profile data"/>

        </header>} 
         {
    /*React.createElement(
      'h1',
       {className: 'head-text'},   // null,
      'Hello without JSX'
    ) */
        }

    </div>
  );
}

export default App;
