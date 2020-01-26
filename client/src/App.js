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
            Header
          </Typography>
          <Typography align="left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Typography>
          <Divider />
          <Typography variant="h5" align="left">
            Header
          </Typography>
          <Typography align="left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Typography>
        </Container>
      </div>
    );
  }
}

export default App;
