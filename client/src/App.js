import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
//import Messages from './pages/Messages/Messages';
import About from './pages/About';
<<<<<<< HEAD
// import {Router, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
      
        <About />
      </div>
=======
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Messages from './pages/Messages/index';
import CheckInFeed from './pages/CheckInFeed/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" exact component={Messages} />
            <Route exact path="/login" exact component={Auth} />
            <Route exact path="/checkin" exact component={CheckInFeed} />
            <Route exact path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
>>>>>>> master
    );
  }
}

export default App;
