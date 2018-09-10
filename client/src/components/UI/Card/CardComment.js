import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/CommentTwoTone'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';


const styles = theme => ({
  card: {
    maxWidth: 800,
    marginBottom: 30
  },
  avatar: {
    backgroundColor: red[500],
  },
  mygrid: {
    direction: 'row',
    justify: 'flex-end',
    alignItems: 'baseline'
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  badge: {
    margin: 0
  }
});

class CardComment extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.avatar}
              </Avatar>
            }
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography component="p">
              {this.props.post}
            </Typography>
          </CardContent>
          <Grid
            container
            justify="flex-end"
            spacing={0}>
            <CardActions className={classes.actions} disableActionSpacing>
                <Tooltip title="Comments">
                  <Badge badgeContent={this.props.count} color="primary" className={classes.badge}>
                    <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                      <CommentIcon />
                    </Button>
                  </Badge>
                </Tooltip>
            </CardActions>
          </Grid>
        </Card>
      </div>
    );
  }
}

CardComment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComment);
