import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import AddGroup from '@material-ui/icons/GroupAddOutlined'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import Group from '@material-ui/icons/Group'
import AddUser from '@material-ui/icons/PersonAddOutlined'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import red from '@material-ui/core/colors/indigo';
import { bindActionCreators } from 'redux';
import { createGroup, getGroups, addUser ,GET_GROUP_SUCCESS } from '../../actions/groups_actions';
import CardMedia from '@material-ui/core/CardMedia';
import newRed from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: 800,
    maxWidth: 800,
    minHeight: 800
  },
  contactCard: {
    marginTop: 20,
    maxWidth: 800,
  },
  createGroupShowHide: {
    visibility: 'visible'
  },
  avatar: {
    backgroundColor: red[500],
    width: 60,
    height: 60,
  },
  avatarN: {
    backgroundColor: newRed[500],
    width: 60,
    height: 60,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  tooltip: {
    marginLeft: 20
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  btn: {
    margin: '20px'
  },
  expansion: {
    backgroundColor: "#f50057",
  },
  input: {
    color: "white"
  },
  contactStyle: {
    marginTop: "20px"
  }
});


class GroupsPage extends Component {

  renderField = (field) => {
    return (
      <div>
        <TextField
          label={field.label}
          multiline={field.multiline}
          rowsMax={field.rowsMax}
          fullWidth={field.fullWidth}
          className={field.className}
          {...field.input} />
      </div>
    );
  }
  addUser = (values) => {
  
    const groupId = this.props.groups.groups[0]._id;
    this.props.addUser(values, groupId, () => {
      this.props.getGroups();
    });
  }


  renderPeople = (users) => {
    const { classes } = this.props;
    const { handleSubmit } = this.props;
    return users.map(user => {
      return (
        <div key={user._id}>
          <Card className={classes.contactCard}>
            <div className={classes.details}>
              <Grid container direction="row"
                alignItems="center" justify="space-between">
              <Grid> 
                  <CardContent className={classes.content}>
                    <Avatar aria-label="Recipe" className={classes.avatarN}>
                      <Typography className={classes.input} variant="display1" >{user.firstName.charAt(0).toUpperCase()}</Typography>
                    </Avatar>
                  </CardContent>
            </Grid>
            <Grid>
              <CardContent className={classes.content}>
                <Typography variant="headline"> {user.firstName}   {user.lastName} </Typography>
              </CardContent>
              </Grid>
              <Grid> 
                  <CardContent className={classes.content}>
                    <Typography variant="headline">  {user.email} </Typography>
                  </CardContent>
              </Grid>
              </Grid>
            </div>
          </Card>
        </div>

      )
    })
  }

  renderGroups = () => {
    const { classes } = this.props;
    const { handleSubmit } = this.props;
    if (this.props.groups.type === 'GET_GROUP_SUCCESS') {

      if (this.props.groups.groups.length > 0) {
        return (
          <div>
          <Card>
            <Tooltip title={this.props.groups.groups[0].groupName.toUpperCase()}>
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <Group />
              </Avatar>
            </Tooltip> 
            <form onSubmit={handleSubmit(this.addUser)}>
              <Grid container
                justify="center"
                spacing={0}>
                <Field
                  label="Add User By Email"
                  name="email"
                  type="text"
                  multiline
                  rowsMax="4"
                  margin="normal"
                  className={`${classes.root} ${classes.textField}`}
                  component={this.renderField} />
              </Grid>
              <Grid container
                justify="center"
                spacing={0}>
                <Tooltip title="Add Contact To Group">
                  <Button className={classes.btn} type="submit" variant="contained" size="medium" color="primary" aria-label="Add">
                    <AddUser />
                  </Button>
                </Tooltip>
              </Grid>
            </form>
          </Card>
          <div> 
            <React.Fragment>
              {this.renderPeople(this.props.groups.groups[0].users)}
            </React.Fragment>
          </div>
        </div>
        );
      }
    }
  }

  renderCreateGroup = () => {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    if(this.props.groups.groups && this.props.groups.groups.length > 0) {
      return (<div> </div>)
    } else {
      return (
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={
            <Tooltip title="Create a Group">
              <Button variant="fab" size="small" color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Button>
            </Tooltip>
          }>
            <Typography className={classes.input} gutterBottom variant="headline" component="h2">
              Create New Group
                  </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Grid container
                justify="center"
                spacing={0}>
                <Field
                  label="Group Name"
                  name="groupName"
                  type="text"
                  multiline
                  rowsMax="4"
                  margin="normal"
                  className={`${classes.root} ${classes.textField}`}
                  component={this.renderField} />
                <Field
                  label="Description"
                  name="description"
                  type="text"
                  multiline
                  rowsMax="4"
                  margin="normal"
                  className={`${classes.root} ${classes.textField}`}
                  component={this.renderField} />
              </Grid>
              <Grid container> 
              </Grid>
              <Grid container
                justify="center"
                spacing={0}>
                <Tooltip title="Create Group">
                  <Button className={classes.btn} type="submit" variant="contained" size="medium" color="primary" aria-label="Add">
                    <AddGroup />
                  </Button>
                </Tooltip>
              </Grid>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
  }

 

  componentWillMount() {
    this.getGroups();
  }

  getGroups = () => {
    this.props.getGroups();
  }

  onSubmit = (values) => {
    this.props.createGroup(values, () => {
      this.props.getGroups();
    });
  }

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={0}>
          <Card className={classes.card}>
            <CardContent>
            {this.renderCreateGroup()}
            </CardContent>
            {this.renderGroups()}
          </Card>
          
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createGroup, getGroups, addUser }, dispatch)
}


GroupsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


const Groups = withStyles(styles, { name: 'Groups' })(GroupsPage);


export default reduxForm({
  form: 'GroupsPageForm'
})
  (
  connect(mapStateToProps, mapDispatchToProps)(Groups)
  )
