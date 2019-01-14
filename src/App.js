import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hello React!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Learn React</p>
          </a>
        </header>
        <section>
          <Table />
        </section>
      </div>
    );
  }
}

export default App;
