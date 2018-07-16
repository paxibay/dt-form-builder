import React, { Component } from 'react';

import Formbuilder from './Formbuilder';
import Formiobuilder from './Formio';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Form Builder investigation</h1>
        </header>
        <div>
          <h1>Form Builder from "react-formio" component</h1>
          <Formbuilder></Formbuilder>
        </div>
        <div>
          <h1>Form Builder from "formiojs@3.0.0-rc.2"</h1>
          <h3>Latest version (v.2.32.3) doesn't include builder function</h3>
          <Formiobuilder></Formiobuilder>
        </div>
      </div>
    );
  }
}

export default App;
