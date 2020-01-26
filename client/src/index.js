import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Event from './EventViewer';
import Navbar from './components/Navbar';

registerServiceWorker();

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          uid: '',
          loc: '',
          username: '',
          email: '',
          signedIn: false,
        }
      }
    
      signOut = () => {
        this.setState({ signedIn: false });
        console.log(this.state.signedIn);
        console.log('sign out');
      }
    
      signIn = () => {
        // Sign in handler
        this.setState({ signedIn: true })
        console.log('sign in')
      }
    render() {

    return(
        <div className="App">

        <Router>
        <Navbar signedIn={this.state.signedIn} signOut={this.signOut} signIn={this.signIn} />
            <div>
                <Route exact path="/" component={App} />
                <Route path="/dashboard" component={App2} />
                <Route path="/explore" component={App2} />
                <Route path="/auth" component={App2} />
                <Route path="/profile" component={App2} />
                <Route exact path="/event/:id" children={<Event />}/>
            </div>
        </Router>
        </div>
    )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
