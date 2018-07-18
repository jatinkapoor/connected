import React, { Component } from 'react';
import InputText from '../../../components/UI/InputText/InputText';
import { GridCell, GridInner } from 'rmwc/Grid';
import MyButton from '../../../components/UI/Button/Button';
import './Login.css';

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.type]: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const loginInfo = { login: { ...this.state } }
    console.log(loginInfo);
  }

  render() {

    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <GridInner className="form-section">
            <GridCell tablet="8" desktop="12" phone="4">
              <InputText
                name="email"
                type="email"
                use="email"
                onchange={this.handleInputChange}
                placeholder="email"
                value={this.state.email} />
              <InputText
                use="security"
                type="password"
                name="password"
                placeholder="password"
                onchange={this.handleInputChange}
                value={this.state.password} />
            </GridCell>
          </GridInner>
          <GridInner className="signIn-button">
            <GridCell desktop="1"> </GridCell>
            <GridCell tablet="8" phone="4" desktop="11"> 
              <MyButton className="btn" name="SIGN IN" use="send" />
            </GridCell>
          </GridInner>
        </form>
      </ React.Fragment>
    );
  }
}

export default Login;