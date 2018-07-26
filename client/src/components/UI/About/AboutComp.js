import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import connected from './connected.jpg';
import { Typography } from 'rmwc/Typography';
import { Elevation } from 'rmwc/Elevation';
import { Card } from 'rmwc/Card';

import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryText,
    ListItemGraphic,
    ListItemMeta
   } from 'rmwc/List';
import group from "./group.jpg";

class AboutComp extends React.Component {
    render() {
        return(
            <div className="about-page">
                <Elevation z={24}>
                <Card>
                <Typography use="headline2" className="line1">About</Typography>
                
                <div className="card">
                
                        <Typography use="headline4">Our Motto: Stay Connected</Typography>

                        <br />
                        <br />
                        <Typography use="headline6">Thanks for visiting our website. In addition to helping people stay connected with their friends and family, 
                        we help people establish and build new relationships. Our innovative authentication, check-in, and newsfeed
                        features have helped many people stay connected.</Typography>
                        <br />
                        <br />
                    <Typography use="heading6">Here are some of the technologies we leveraged to build this website: </Typography>
                    <br />
                        <List>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>React</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>React-Bootstrap</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>React-Router-DOM</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Material UI</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Mongoose</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>MongoDB</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Express</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Axios</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Node</ListItemText>
                            </ListItem>
                            <ListItem>
                            <ListItemGraphic>star_border</ListItemGraphic>    
                            <ListItemText>Redux</ListItemText>
                            </ListItem>
                        </List>
                </div>
                <img src={connected} className="connect-img" />

                </Card>
                </Elevation>
                <img src={group} className="connect-img" />
            </div>
        )
    }
}

export default AboutComp;