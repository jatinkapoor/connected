import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import connected from './connected.jpg';
import group from "./group.jpg";

class AboutComp extends React.Component {
    render() {
        return(
            <div className="about-page">
                <h1 className="about">About</h1>
                <h2>Our Motto: Stay Connected</h2>
                <h3>Thanks for visiting our website. In addition to helping people stay connected with their friends and family, 
                    we help people establish and build new relationships. Our innovative authentication, check-in, and newsfeed
                    and features have helped many people stay connected.</h3>
                <ul>
                    Here are some of the technologies we leveraged to build this website: 
                    <br />
                    <li>React</li> 
                    <li>React Bootstrap</li>
                    <li>React-Router-DOM</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li> 
                    <li>Express</li>
                    <li>Axios</li>
                    <li>Node</li>
                </ul>
                
                <img src={connected} className="connect-img" />
                <img src={group} className="connect-img" />
            </div>
        )
    }
}

export default AboutComp;