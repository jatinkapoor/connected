import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import BackArrow from '@material-ui/icons/ArrowBackIosRounded';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import {  getPost, createComment } from '../../actions/posts_actions';
import _ from 'lodash';
import CardComment from '../../components/UI/Card/CardComment';


import red from '@material-ui/core/colors/red';

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
  card1: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: 800,
    maxWidth: 800,
  },
  comment: {
    textAlign: 'center',
    maxWidth: 800,
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
    width: 500,
  },
  // button: {
  //   margin: theme.spacing.unit,
  // },
});

class CommentsPage extends Component {


  onSubmit = (values) => {
    const { id } = this.props.match.params;
    this.props.createComment(id, values, () => {
      this.props.getPost(id, this.props.history);
    });
  }

  renderPosts = (classes) => {
    const { id } = this.props.match.params;
    if (this.props.post[id]) {
      return (
        <div>
          <Card
              className={classes.comment}>
            
              <Grid container
                justify="flex-start"
                spacing={0}>
                <Link to="/">
              <Tooltip title="Back to Posts">  
              <Button variant="fab" color="secondary">
                <BackArrow />
              </Button>
              </Tooltip>
              </Link>
            </Grid> 
              <CardContent>
              <Typography variant="display1" color="textSecondary">
                  {this.props.post[id].post}
                </Typography>
              </CardContent>
            </Card>
        </div>  
      )
    }
  }

  renderComments = (classes) => {
    return _.map(this.props.post, post => {
      if (post.comments) {
        return (post.comments.map(comment => {
          return( <div key={comment._id}>
            {comment.comment}
          </div>
          )
      })
      )}
    });
  }

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

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getPost(id, this.props.history);
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
          <Card className={classes.card1}>
            {this.renderPosts(classes)}
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={
                  <Tooltip title="Create a Post">
                    <Button variant="fab" size="small" color="primary" aria-label="Add" className={classes.fab}>
                      <AddIcon />
                    </Button>
                  </Tooltip>
                }>
                  <Typography gutterBottom variant="headline" component="h2">
                    Comment
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Grid container
                      justify="center"
                      spacing={0}>
                      <Field
                        label="Comment"
                        name="comment"
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                        className={`${classes.root} ${classes.textField}`}
                        component={this.renderField} />
                      <Tooltip title="Post Comment">
                        <IconButton type="submit" size="large">
                          <SendIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </form>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
            {this.renderComments()}
          </Card>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPost, createComment }, dispatch)
}


CommentsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Comments = withStyles(styles)(CommentsPage);


export default reduxForm({
  form: 'CommentsForm'
})
  (
  connect(mapStateToProps, mapDispatchToProps)(Comments)
  )


  
