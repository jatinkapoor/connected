import React from "react";
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
import NavBar from '../../components/UI/NavBar/NavBar';
import "./CheckInFeed.css";

class CheckInFeed extends Component {
	state = {
		usersCheckedIn=[]
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
				<Grid fluid>
					{this.state.usersCheckedIn.map(checkedInUser => (
						<GridInner span="12">
							<GridCell span="4">
							{checkedInUser.firstName}
							</GridCell>
							<GridCell span="4">
							{checkedInUser.lastName}
							</GridCell>
							<GridCell span="4">
							{checkedInUser.date}
							</GridCell>
						</GridInner>
			))}
				</Grid>
			</div>
		)
	}
	
};

export default CheckInFeed;