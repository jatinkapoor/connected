import React, { Component } from 'react';
import InputText from '../../components/UI/InputText/InputText';
import { Card } from 'rmwc/Card';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
import { TabBar } from 'rmwc/Tabs';
import NavBar from '../../components/UI/NavBar/NavBar';
import MyButton from '../../components/UI/Button/Button';
import './Login.css';


class Login extends Component {
  render() {


    const LoginSection = (
      <React.Fragment>
        <GridInner className="form-section">
          <GridCell span="2"></GridCell>
          <GridCell span="8">
            <InputText
              value="email" />
            <br />
            <InputText
              value="password" />
          </GridCell>
          <GridCell span="2"></GridCell>
        </GridInner>
        <GridInner className="signIn-button">
          <GridCell span="2"></GridCell>
          <GridCell span="8">
            <MyButton name="SIGN IN" />
          </GridCell>
          <GridCell span="2"></GridCell>
        </GridInner>
      </ React.Fragment>
    )


    const RegistrationSection = (
      <React.Fragment>
        <GridInner className="form-section">
          <GridCell span="2"></GridCell>
          <GridCell span="8">
            <InputText
              value="email" />
            <br />
            <InputText
              value="password" />
          </GridCell>
          <GridCell span="2"></GridCell>
        </GridInner>
        <GridInner className="signIn-button">
          <GridCell span="2"></GridCell>
          <GridCell span="8">
            <MyButton name="SIGN IN" />
          </GridCell>
          <GridCell span="2"></GridCell>
        </GridInner>
      </ React.Fragment>
    )

    return (
      <div>
        <NavBar />
        <Grid>
          <GridCell span="4"> </GridCell>
          <GridCell span="4" className="text" >
            <Card className="my-card">
              {LoginSection}
            </Card>
          </GridCell>
          <GridCell span="4"> </GridCell>
        </Grid>
      </div>
    );

  }
}

export default Login;