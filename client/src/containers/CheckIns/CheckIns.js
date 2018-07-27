import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user_actions';
import { bindActionCreators } from 'redux';



class CheckIns extends Component {


  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        IN checkin page
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsers }, dispatch)
}

const mapStateToProps = (state) => {

  console.log(state);
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckIns);