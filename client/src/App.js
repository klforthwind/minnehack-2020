import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      signedIn: false,
    }
  }

  signOut = () => {
    this.setState({ signedIn: false });
    console.log(this.state.signedIn);
    console.log('sign out');
  }

  signIn = (user) => {
    // Sign in handler
    this.setState({ signedIn: true });
    this.setState({ user: user });
    console.log('sign in');
  }

  render() {
    return (
      <div className="App">
        <Navbar signedIn={this.state.signedIn} signOut={this.signOut} signIn={this.signIn} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
        <Link to="/dashboard">
          <button>
            Text
          </button>
        </Link>
      </div>
    );
  }
}

export default App;
