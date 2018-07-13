import React, { Component } from 'react';
import { Card } from 'rmwc/Card';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
import { TabBar, Tab } from 'rmwc/Tabs';
import { Elevation } from 'rmwc/Elevation';
import NavBar from '../../components/UI/NavBar/NavBar';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import './Auth.css';

class Auth extends Component {

  state = {
    activeTabIndex: 0
  }


  render() {

    let renderComp = null;
    if (this.state.activeTabIndex === 0) {
      renderComp = <Login />
    } else {
      renderComp = <Registration />
    }

    return (
      <div>
        <NavBar />
        <Grid>
          <GridCell span="4"> </GridCell>
          <GridCell span="4" className="text" >
            <Elevation
              z={11}
            >
              <Card className="my-card">
                <TabBar
                  activeTabIndex={this.state.activeTabIndex}
                  onChange={evt => this.setState({ 'activeTabIndex': evt.detail.activeTabIndex })}>
                  <Tab>Login</Tab>
                  <Tab>Register</Tab>
                </TabBar>
                {renderComp}
              </Card>
            </Elevation>
          </GridCell>
          <GridCell span="4"> </GridCell>
        </Grid>
      </div>
    );
  }
}

export default Auth;