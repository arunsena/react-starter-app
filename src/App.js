import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function transform(offset){
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
}

class App extends Component {
  state = {
    styleOne:{},
    styleTwo:{}
  }
  onMouseMove = (event) =>{
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY),
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1> React!</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div onMouseMove={this.onMouseMove}>
          <div className="panel" style={this.state.styleOne}/>
          <div className="panel" style={this.state.styleTwo}/>
        </div>
      </div>
    );
  }
}

export default App;
