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
    activeTabIndex: 0,
    loginState: {
      email: 'email',
      password: 'password'
    },
    registrationState: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      password: 'password',
      phone: 'phone'
    }
  }


  formSubmit = (formState) => {
    console.log('in auth form submit');
  }

  render() {

    let renderComp = null;
    if (this.state.activeTabIndex === 0) {
      renderComp = <Login formSubmit={this.formSubmit}/>
    } else {
      renderComp = <Registration />
    }

    return (
      <div>
        <NavBar />
        <Grid>
          <GridCell phone="0" align="middle" tablet="1" desktop="4"> </GridCell>
          <GridCell phone="4" align="middle" tablet="6" desktop="4" className="text" >
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
        </Grid>
      </div>
    );
  }
}

export default Auth;