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
              <Link to={"/"}>Home</Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
              <Link to={"/login"}>Login/Register</Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
              <Link to={"/checkin"}>Check In</Link>
            </TopAppBarTitle>
            <TopAppBarTitle>
              <Link to={"/about"}>About</Link>
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    </Elevation>
  );
}

export default NavBar;