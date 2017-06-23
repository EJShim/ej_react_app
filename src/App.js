import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import ReduxTest from './routes/ReduxTest/';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Header/>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/redux" component={ReduxTest}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
