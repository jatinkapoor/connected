import React from 'react';
import { Link } from 'react-router-dom';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from 'rmwc/TopAppBar';
import { Elevation } from 'rmwc/Elevation';

import './NavBar.css';

const title  = {
  color: "white",
}

const NavBar = (props) => {

  return (
    <Elevation z={11}>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarTitle>Connected</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarTitle>
              <Link to={"/"}><span style={title}>Home</span></Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
              <Link to={"/login"}><span style={title}>Login/Register</span></Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
                <Link to={"/checkin"}><span style={title}>Check In</span></Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
                  <Link to={"/about"}><span style={title}>About</span></Link>
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    </Elevation>
  );
}

export default NavBar;