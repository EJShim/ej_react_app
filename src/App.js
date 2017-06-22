import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Home from './containers/Home';

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
