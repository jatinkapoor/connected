import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createPost, getPosts } from '../../actions/posts_actions';
import _ from 'lodash';
import MyCard from '../../components/UI/Card/Card';
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
  avatar: {
    backgroundColor: red[500],
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
    width: 500,
  }
});



class HomePage extends Component {


  state = {
    textvalue: ''
  }

  getPosts = () => {
    this.props.getPosts(this.props.history);
  }

  componentWillMount() {
    this.getPosts();
  }

  renderField = (field) => {
    console.log(field);
    return (
      <div>
        <TextField
          label={field.label}
          multiline={field.multiline}
          rowsMax={field.rowsMax}
          fullWidth={field.fullWidth}
          className={field.className}
          {...field.input}/>
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.getPosts();
    });
  }


  renderPosts = (classes) => {

    return _.map(this.props.posts, post => {
      if (post._id) {
        return (
          <MyCard
            key={post._id}
            post={post.post}
            avatar={post.createdByName.charAt(0).toUpperCase()}
            count={post.comments.length}
            commentLink={`/posts/${post._id}`}
            >
          </MyCard>
        );
      }
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
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={
                  <Tooltip title="Create a Post">
                    <Button variant="fab" size="small" color="primary" aria-label="Add" className={classes.fab}>
                      <AddIcon />
                    </Button>
                  </Tooltip>
                }>
                  <Typography gutterBottom variant="headline" component="h2">
                    Create a Post
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Grid container
                      justify="center"
                      spacing={0}>
                      <Field
                        label="Post"
                        name="post"
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                        className={`${classes.root} ${classes.textField}`}
                        component={this.renderField} />
                      <Tooltip title="Send Post">
                        <IconButton type="submit" size="large">
                          <SendIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </form>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
            {this.renderPosts(classes)}
          </Card>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
    newpost: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost, getPosts }, dispatch)
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};


const Home = withStyles(styles, { name: 'Home' })(HomePage);


export default reduxForm({
  form: 'HomePageForm'
})
(
  connect(mapStateToProps, mapDispatchToProps)(Home)
)
