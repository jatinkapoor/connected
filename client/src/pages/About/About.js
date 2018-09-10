import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import './about.css';
import AboutComp from '../../components/UI/About/AboutComp';

class About extends Component {
    render() {
        return(
            <div> 
                <AboutComp />
            </div>
            )
        }
    }

export default About; 