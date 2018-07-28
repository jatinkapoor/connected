import React, { Component } from 'react'
import { Input, Card, CardBody, Button, Badge, Fa, Nav, NavItem, NavLink } from 'mdbreact';
import { TabBar, Tab, TabIcon, TabIconText, TabBarScroller } from 'rmwc/Tabs';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Registration.css'
import { Link } from 'react-router-dom';
import { Typography } from 'rmwc/Typography';
import { registerUser } from '../../actions/registration_actions';



class Registration extends Component {


  renderField = (field) => {
    return (
      <div>
        <Input
          icon={field.icon}
          label={field.label}
          {...field.input}
        />
        <small className="text-danger">{field.meta.touched ? field.meta.error : ''}</small>
      </div>
    );
  }

  onSubmit = (values) => {
    console.log(values);
    this.props.registerUser(values, this.props.history);
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="container registration">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Card className="registrationCard">
                <CardBody>
                  {/* <Nav className="nav-justified" color="primary">
                    <NavItem>
                      <NavLink to="/login">
                        <Button block >Sign In ? </Button>
                      </NavLink>
                    </NavItem>
                  </Nav> */}
                  <div className="row">
                    <div className="col-md-6">
                      <Field
                        label="First Name"
                        name="firstName"
                        icon="user"
                        component={this.renderField} />
                    </div>
                    <div className="col-md-6">
                      <Field
                        label="Last Name"
                        name="lastName"
                        icon="user"
                        component={this.renderField} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        label="Email"
                        name="email"
                        icon="envelope"
                        component={this.renderField}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        label="Password"
                        name="password"
                        icon="lock"
                        type="password"
                        component={this.renderField} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        label="Confirm Password"
                        name="confirmPassword"
                        icon="lock"
                        type="password"
                        component={this.renderField} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        label="Phone"
                        name="phone"
                        icon="phone"
                        component={this.renderField} />
                    </div>
                  </div>
                  <div className="row justify-content-md-center"> 
                      <Button  color="indigo" block type="submit">Register</Button>
                      <Typography use="button"><Link to={"/login"}>Login</Link> </Typography> 
                  </div>
                  </CardBody>
                <Typography use="overline"> By clicking "Register" I agree to the <Link to={"/login"}>Terms and Conditions</Link> </Typography>
              </Card>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Enter First Name'
  }

  if (!values.lastName) {
    errors.lastName = 'Enter Last Name'
  }
  if (!values.email) {
    errors.email = 'Enter a email'
  }
  if (!values.password) {
    errors.password = 'Enter a password'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Enter confirm password'
  }

  if (!values.phone) {
    errors.phone = 'Enter Phone Number'
  }

  return errors;
}

const  mapStateToProps = (state) => {
  console.log(state);
  const { registering } = state.registration;
  return {
    registering
  };
}


export default reduxForm({
  validate,
  form: 'RegistrationForm'
})(
  connect(mapStateToProps, { registerUser })
  (withRouter(Registration))
)
