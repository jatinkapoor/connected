import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './ToolBar.css';
const toolbar = props => {

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"> <a href="/"> Connected </a></div>
        <div className="spacer"> </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li> <Link to="/checkin">Checkins</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li> <Link to="/login">Login/Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default toolbar;
