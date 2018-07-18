import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import NavBar from '../../components/UI/NavBar/NavBar';
import './about.css';
class About extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <Grid >
                    <GridCell phone="0" align="middle" tablet="1" desktop="4"> 
                        About
                    </GridCell>
                </Grid>
                    <h1 className="about">About</h1>
            </div>
            // look into typography
        )
    }
}

export default About;

