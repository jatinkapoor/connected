import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class Notification extends React.Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'right',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.sending.show) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.sending ? this.props.sending.message : " "}</span>}
        />
      </div>
    );
  }
}

export default Notification;
