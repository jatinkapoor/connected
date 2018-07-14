import React, {Component} from "react";
import {GridCell, GridInner } from 'rmwc/Grid';
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
			<React.Fragment>
				<NavBar />
				<GridCell className="grid">
						<GridInner span="12">
							<GridCell span="4">Hello
							</GridCell>
							<GridCell span="4">World
							</GridCell>
							<GridCell span="4">Message
							</GridCell>
						</GridInner>
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
			</React.Fragment>
		);
		
	}
};

export default CheckInFeed;