import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './ToolBar.css';
import jwt from 'jsonwebtoken';
class ToolBar extends Component {

  renderNavItems = () => {
    if (this.props.isAuth) {
      return (
        <React.Fragment>
        <li><Link to="/checkin">Checkins</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li> <Link onClick={this.logout} to="/login">Logout</Link></li>
        <li> <Link to="/about">About</Link></li>
      </React.Fragment> 
      )
    } else {
      return (
          <React.Fragment> 
            <li> <Link to="/login">Login/Register</Link></li>
          </React.Fragment>
      )
    }
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    this.props.history.push('/login')
  }

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo"> <Link to="/"> Connected </Link></div>
          <div className="spacer"> </div>
          <div className="toolbar_navigation-items">
            <ul>
            {this.renderNavItems()}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default ToolBar;
