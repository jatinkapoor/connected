import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import NavBar from '../../components/UI/NavBar/NavBar';
import './about.css';
import AboutComp from '../../components/UI/About/AboutComp';

class About extends Component {
    render() {
        return(
            <div> 
                <NavBar />
                <AboutComp />
            </div>
            )
        }
    }

export default About; 