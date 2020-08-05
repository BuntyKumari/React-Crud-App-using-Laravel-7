import React, { Component } from 'react';
import "./App.css";
import Student from './containers/students'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Student/>
      </div>
    );
  }
  }

export default App;
