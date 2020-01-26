import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import { Typography } from '@material-ui/core';
import { Container}  from '@material-ui/core';
import { Divider } from '@material-ui/core';


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
        {/* <Navbar signedIn={this.state.signedIn} signOut={this.signOut} signIn={this.signIn} /> */}
        <header className="App-header">
          <h1 className="App-title">GoHelpMe - Empowering the local communities across the world</h1>
        </header>
        <Container maxWidth="sm" style={{padding:"20px"}}>
          <Typography variant="h5" align="left">
            About GoHelpMe
          </Typography>
          <Divider />
          <Typography align="left">
            GoHelpMe is an app for connecting communities together to drive volunteer powered events. You are able to browse events, and click on them to view more information. You can subscribe to any you'd like to participate in. You can also create events for others to participate in. Any user can view their attending and hosting events on their dashboard.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default App;
