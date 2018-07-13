import React, { Component } from 'react';
import InputText from '../../../components/UI/InputText/InputText';
import { GridCell, GridInner } from 'rmwc/Grid';
import MyButton from '../../../components/UI/Button/Button';
import './Registration.css';


class Registration extends Component {


  render() {
    return (
      <React.Fragment>
        <GridInner className="form-section">
          <GridCell span="2"></GridCell>
          <GridCell span="8">
            <InputText
              type="text"
              use="person"
              placeholder="first name" />
            <InputText
              type="text"
              use="person"
              placeholder="last name" />
            <InputText
              type="email"
              use="email"
              placeholder="email" />
            <InputText
              type="password"
              use="security"
              placeholder="password" />
            <InputText
              type="text"
              use="phone"
              placeholder="phone number" />
          </GridCell>
          <GridCell span="2"></GridCell>
        </GridInner>
        <GridInner className="signIn-button">
          <GridCell span="4"></GridCell>
          <GridCell span="4">
            <MyButton name="REGISTER" use="send" />
          </GridCell>
          <GridCell span="4"></GridCell>
        </GridInner>
      </ React.Fragment>
    );

  }
}

export default Registration;