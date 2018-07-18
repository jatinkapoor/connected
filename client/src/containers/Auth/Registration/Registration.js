import React, { Component } from 'react';
import InputText from '../../../components/UI/InputText/InputText';
import { GridCell, GridInner } from 'rmwc/Grid';
import MyButton from '../../../components/UI/Button/Button';
import './Registration.css';


class Registration extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  }


  handleInputChange = (event) => {
    event.preventDefault();
    console.log("in prvt input");
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const registrationInfo = { registration: { ...this.state } }
    console.log(registrationInfo);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <GridInner className="form-section">
            <GridCell tablet="8" desktop="12" phone="4"></GridCell>
            <GridCell tablet="8" desktop="12" phone="4">
              <InputText
                name="firstName"
                type="text"
                use="person"
                placeholder="first name"
                onchange={this.handleInputChange}
                value={this.state.firstName}
                />
              <InputText
                name="lastName"
                type="text"
                use="person"
                placeholder="last name" 
                onchange={this.handleInputChange}
                value={this.state.lastName}
                />
              <InputText
                name="email"
                type="email"
                use="email"
                placeholder="email"
                onchange={this.handleInputChange}
                value={this.state.email}
                />
              <InputText
                name="password"
                type="password"
                use="security"
                placeholder="password"
                onchange={this.handleInputChange}
                value={this.state.password}
                />
              <InputText
                name="confirmPassword"
                type="password"
                use="security"
                placeholder="confirm password"
                onchange={this.handleInputChange}
                value={this.state.confirmPassword}
                />
              <InputText
                name="phone"
                type="text"
                use="phone"
                placeholder="phone" 
                onchange={this.handleInputChange}
                value={this.state.phone}
                />
            </GridCell>
            <GridCell small="0"></GridCell>
          </GridInner>
          <GridInner className="signIn-button">
            <GridCell desktop="1"> </GridCell>
            <GridCell tablet="8" phone="4" desktop="11">
              <MyButton className="btn" name="REGISTER" use="send" />
            </GridCell>
            <GridCell small="0"></GridCell>
          </GridInner>
        </form>
      </ React.Fragment>
    );

  }
}

export default Registration;