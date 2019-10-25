import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}
export default App;
