import React, { Component } from 'react'
import { Input, Card, CardBody, Button, Nav, NavItem, NavLink } from 'mdbreact';
import { TabBar, Tab, TabIcon, TabIconText, TabBarScroller } from 'rmwc/Tabs';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/login_actions';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Typography } from 'rmwc/Typography';
import Spinner from '../../components/UI/Spinner/Spinner';


class SignIn extends Component {


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
    console.log('signin values', values);
    this.props.loginUser(values.email, values.password, this.props.history);
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="container login">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <form onSubmit={handleSubmit(this.onSubmit)}>
            <Card className=" z-depth-5">
              <CardBody>
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
                        component={this.renderField} />
                  </div>
                </div>
                  <div className="row justify-content-md-center">
                    <Button color="indigo" block type="submit">SignIn</Button>
                    <Typography use="button"><Link to={"/register"}>Register</Link> </Typography>
                  </div>
              </CardBody>
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

  if (!values.email) {
    errors.email = 'Enter a email'
  }

  if (!values.password) {
    errors.password = 'Enter a password'
  }

  return errors;
}

const mapStateToProps = (state) => {
  return {
    appState : state
  }
}

export default reduxForm({
  validate: validate,
  form: 'SignInForm'
}) (
  connect(mapStateToProps, { loginUser })
  (withRouter(SignIn))
)
