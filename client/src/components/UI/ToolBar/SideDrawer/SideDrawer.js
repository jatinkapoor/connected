import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }


  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Login/Register</a></li>
        <li><a href="/">Checkins</a></li>
        <li><a href="/">Groups</a></li>
      </ul>
    </nav>
  )
}


export default sideDrawer;
