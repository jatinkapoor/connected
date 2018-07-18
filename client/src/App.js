import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Messages from './pages/Messages/Messages';


class App extends Component {
  render() {
    return (
      <div>
        <Messages />
      </div>
    );
  }
}

export default App;
