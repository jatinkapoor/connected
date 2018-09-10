import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }


  return (
    <nav className={drawerClasses}>
      <ul>
        { props.isAuth ? <li> <Link to="/checkin">Checkins</Link></li> : <li> <Link to="/login">Login/Register</Link></li> }
        {props.isAuth ? <li> <Link to="/groups">Groups</Link></li> : ''}
        {props.isAuth ? <li> <Link onClick={props.logout} to="/login">Logout</Link></li> : ''}      
        {props.isAuth ? <li> <Link to="/about">About</Link></li> : ''}
      </ul>
    </nav>
  )
}


export default sideDrawer;
