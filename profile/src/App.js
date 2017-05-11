import React, { Component } from 'react';
import NavBar from './NavBar';
import Body from './Body';
import Paragraph from './Paragraph';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
        <Paragraph />
        
        </div>
    );
  }
}

export default App;
