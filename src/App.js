import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      console.log(this.props)
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

export default App;
