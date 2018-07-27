import React, { Component } from 'react';
import Home from './containers/Home/Home';
//import Messages from './pages/Messages/Messages';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckInFeed from './pages/CheckInFeed/index';
import TermsOfService from './pages/TermsOfService/index';

import Comments from './containers/Comments/Comments';
import { PrivateRoute } from './_component/PrivateRoute';
import Notification from './components/UI/Notification/Notification';
import {connect} from 'react-redux';
import SignIn from './containers/Authentication/SignIn';
import Registration from './containers/Authentication/Registration';
import Toolbar from './components/UI/ToolBar/ToolBar';
import SideDrawer from './components/UI/ToolBar/SideDrawer/SideDrawer';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Groups from './containers/Groups/Groups';

class App extends Component {


  state = {
      sideDrawerOpen: false
    };

    drawerTogglerClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
    }

    backDropClickHandler = () => {
      this.setState({sideDrawerOpen: false});

    };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {

      backDrop = <Backdrop backDropClick={this.backDropClickHandler}/>;
    }
    return (
      <Router>
      <div style={{ height: '100%' }}>

        <Toolbar
          drawerClickHandler={this.drawerTogglerClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <Notification sending={this.props.notificaton}/>
        <main style={{ marginTop: 100 }}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" exact component={SignIn} />
            <Route exact path="/register" exact component={Registration} />
            <Route exact path="/about" exact component={About} />
            <Route exact path="/terms" exact component={TermsOfService} />
            <PrivateRoute exact path="/checkin" exact component={CheckInFeed} />
            <PrivateRoute exact path="/groups" exact component={Groups} />
            <PrivateRoute exact path="/posts/:id" exact component={Comments} />
            <PrivateRoute exact path="/about" exact component={About} />
          </Switch>
        </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('IN app');
  console.log(state);
  return {
    notificaton: state.alert
  }
}

export default connect(mapStateToProps)(App);
