import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Messages from './containers/Messages/Messages';


class App extends Component {
  render() {
    return (
      <div>
        <Auth />
        <Messages />
      </div>
    );
  }
}

export default App;
