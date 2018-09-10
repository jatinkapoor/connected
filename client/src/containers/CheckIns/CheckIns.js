import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers, checkIn } from '../../actions/user_actions';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import GridList from '../../components/UI/GridList/GridList';
import './CheckIns.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Check';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class CheckIns extends Component {

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.props.getUsers();
  }

  renderUsers = () => {
    return (
      <div> 
        <GridList userList={this.props.users.users}/>
      </div>
    )
  }

  handleCheckin = () => {
   this.props.checkIn(() => {
      this.fetchUsers();
   });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center">
          <Grid
            container
            justify="center">
            <Button onClick={this.handleCheckin} variant="contained" color="secondary">
              Check In
            <Icon>send</Icon>
            </Button>
          </Grid>
          <Grid 
          justify="center"
          spacing={40}>
              {this.renderUsers()}
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsers, checkIn }, dispatch)
}

const mapStateToProps = (state) => {

  return {
    users: state.users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckIns);