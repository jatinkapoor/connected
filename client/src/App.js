import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Messages from './pages/Messages/Messages';
import CheckInFeed from './pages/CheckInFeed/CheckInFeed';

class App extends Component {
  render() {
    return (
      <div>
        <Messages />
        <Home />
      </div>
    );
  }
}

export default App;
