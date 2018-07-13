import React from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from 'rmwc/TopAppBar';

import './NavBar.css';

const NavBar = (props) => {

  return (
    <TopAppBar fixed dense className="nav">
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarTitle>Connected</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export default NavBar;