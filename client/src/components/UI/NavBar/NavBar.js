import React from 'react';
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
      <TopAppBar fixed className="nav">
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarTitle>Connected</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    </Elevation>
  );
}

export default NavBar;