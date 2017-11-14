import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './Components/Home'

class App extends Component {

  render() {
    return (
      <div >
        <Route path='/' exact component={Home} />
      </div>
    );
  }
}

export default App;
