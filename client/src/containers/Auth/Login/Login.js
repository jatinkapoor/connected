import React, { Component } from 'react';
import InputText from '../../../components/UI/InputText/InputText';
import { GridCell, GridInner } from 'rmwc/Grid';
import { FormField } from 'rmwc/FormField';
import MyButton from '../../../components/UI/Button/Button';
import './Login.css';



class Login extends Component {

  render() {

    return (
      <React.Fragment>
          <GridInner className="form-section">
            <GridCell span="2"></GridCell>
            <GridCell span="8">
              <InputText
                type="email"
                use="email"
                placeholder="email" />
              <InputText
                use="security"
                type="password"
                placeholder="password" />
            </GridCell>
            <GridCell span="2"></GridCell>
          </GridInner>
          <GridInner className="signIn-button">
            <GridCell span="4"></GridCell>
            <GridCell span="4">
              <MyButton name="SIGN IN" use="send" />
            </GridCell>
            <GridCell span="4"></GridCell>
          </GridInner>
      </ React.Fragment>
    );
  }
}

export default Login;