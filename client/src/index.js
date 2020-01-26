import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Event from './EventViewer';
import Navbar from './components/Navbar';
import NewEvent from './NewEvent'

registerServiceWorker();

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: JSON.parse(localStorage.getItem("user")) || {},
          signedIn: JSON.parse(localStorage.getItem("user")) != null,
        }
      }
    
      signOut = () => {
        this.setState({ signedIn: false });
        this.setState({ user: {} });
        localStorage.removeItem('user')
        console.log(this.state.signedIn);
        console.log('sign out');
      }
    
      signIn = (user) => {
        // Sign in handler
        this.setState({ signedIn: true });
        this.setState({ user: user.user });
        localStorage.setItem("user", JSON.stringify(user.user));
        console.log('sign in');
      }

      signUp = (user) => {
        this.setState({ signedIn: true })
        // Sign up with API
        this.setState({ user: user.user});
        localStorage.setItem("user", JSON.stringify(user.user));
        console.log(this.state.user)
      }
    render() {
    console.log('updated user')
    console.log(this.state.user)
    return(
        <div className="App">

        <Router>
        <Navbar signedIn={this.state.signedIn} signOut={this.signOut} signIn={this.signIn} signUp={this.signUp} />
            <div style={{marginTop: "25px"}}>
                <Route exact path="/" component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/explore" component={App2} />
                <Route path="/auth" component={App2} />
                <Route path="/profile" component={App2} />
                <Route exact path="/event/:id" children={<Event currentUser={this.state.user}/>}/>
                <Route path="/create" component={() => <NewEvent signedIn={this.state.signedIn}/>} />
            </div>
        </Router>
        </div>
    )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
