import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user_actions';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import GridList from '../../components/UI/GridList/GridList';
import { Button } from 'mdbreact';
import './CheckIns.css';

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

  render() {
    return (
      <div>
        {/* <Grid 
          direction="row"
          justify="center"
          class="checkinHeading"> 
            <h2>Check In</h2>
        </Grid> */}
        <Grid container justify="center">
          <Grid>
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
  return bindActionCreators({ getUsers }, dispatch)
}

const mapStateToProps = (state) => {

  return {
    users: state.users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckIns);