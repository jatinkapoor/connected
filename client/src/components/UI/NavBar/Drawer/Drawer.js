import React, {Component} from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

import {
  ListItem,
  ListItemText
} from 'rmwc/List';


class MyDrawer extends Component {

  state = {
    tempOpen: true
  }

  render() {
    return (
      <Drawer
        temporary
        open={this.state.tempOpen}
        onClose={() => this.setState({ tempOpen: false })}>
        <DrawerHeader>
          DrawerHeader
        </DrawerHeader>
        <DrawerContent>
          <ListItem>
            <ListItemText>Cookies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pizza</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Icecream</ListItemText>
          </ListItem>
        </DrawerContent>
      </Drawer>
    )
  }
}

export default MyDrawer;
