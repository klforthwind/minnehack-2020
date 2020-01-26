import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
        <Link to="/2">
          <button>
            Text
          </button>
        </Link>
      </div>
    );
  }
}

export default App;
