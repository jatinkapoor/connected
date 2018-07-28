import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '800px',
    backgroundColor: theme.palette.background.paper,
  },
});

class MyGridList extends React.Component {



  calculateDate = (date) => {
    const endDate = moment.now();
    const startDate = moment(date).format();
    const duration = moment.duration(moment(endDate).diff(startDate));
    return duration.asHours().toFixed(0);
  }

  renderList = () => {
    const { classes } = this.props; 
    if (this.props.userList && this.props.userList.users.length > 0) {
      return (
        <Card>
          <div className={classes.root}>
            <List>
              <Grid container spacing={0}>
                <ListItem divider={true}>
                  <Grid item lg={3} xs={12} sm={6}>
                  </Grid>
                  <Grid item lg={3} xs={12} sm={6}>
                    <ListItemText primary="Name" />
                  </Grid>
                  <Grid item lg={3} xs={12} sm={6}>
                    <ListItemText primary="Email" />
                  </Grid>
                  <Grid item lg={3} xs={12} sm={6}>
                    <ListItemText primary="Last Checkin" />
                  </Grid>
                </ListItem>
              </Grid> 
              {this.props.userList.users.map(value => (
                <Grid container spacing={0}>
                  <ListItem divider={true} key={value._id} className={classes.listItem}>
                    <Grid item lg={3} xs={12} sm={6}>
                      <Avatar alt="Remy Sharp" src={require('../../../images/avatar1.jpg')} />
                    </Grid>
                    <Grid item lg={3} xs={12} sm={6}>
                      <ListItemText primary={`${value.firstName} ${value.lastName}`} />
                    </Grid>
                    <Grid item lg={3} xs={12} sm={6}> 
                      <ListItemText primary={`${value.email}`} />
                    </Grid>
                    <Grid item lg={3} xs={12} sm={6}> 
                      <ListItemText primary={`${this.calculateDate(value.lastCheckin)} hours ago`} />
                    </Grid>
                  </ListItem>
              </Grid> 
              ))}
            </List>
          </div> 
      </Card> 
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

MyGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyGridList);