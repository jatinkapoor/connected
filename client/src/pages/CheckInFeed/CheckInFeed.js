import React, { Component } from "react";
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
import { Card } from 'rmwc/Card';
import { Elevation } from 'rmwc/Elevation';
import NavBar from '../../components/UI/NavBar/NavBar';
import "./CheckInFeed.css";

class CheckInFeed extends Component {
	state = {
		usersCheckedIn: []
	};

	componentDidMount = () => {
		this.loadCheckedInFeed();
	}

	loadCheckedInFeed = () => {

	}

	render() {
		return (
			<div>
				<NavBar />
				<Grid >
					<GridCell className="grid" span="12">
								<Elevation z={11}>
									<Card className="checked-in-feed-card">
										Firstname lastname: status/lastcheckin awaymessage
								</Card>
								</Elevation>
						{	/*				{this.state.usersCheckedIn.map(checkedInUser => (
						<GridCell span="12">
						<GridInner>
							<GridCell span="4">Hello
							{checkedInUser.firstName}
							</GridCell>
							<GridCell span="4">World
							{checkedInUser.lastName}
							</GridCell>
							<GridCell span="4">Message
							{checkedInUser.date}
							</GridCell>
						</GridInner>
						</GridCell>
			))} */}
					</GridCell>
				</Grid>
			</div>
		);

	}
};

export default CheckInFeed;