import React, { Component } from "react";
import { Grid, GridCell } from 'rmwc/Grid';
import { Card } from 'rmwc/Card';
import { Elevation } from 'rmwc/Elevation';
import NavBar from '../../components/UI/NavBar/NavBar';
import { Typography } from 'rmwc/Typography';
import { ListDivider } from 'rmwc/List';
import API from "../../utils/API";
import "./CheckInFeed.css";

class CheckInFeed extends Component {
	state = {
		usersCheckedIn: [],
		firstName: "",
		lastName: "",
		date: ""
	};

	componentDidMount = () => {
		this.loadCheckedInFeed();
	}

	loadCheckedInFeed = () => {
		API.getGroupMembers(this.state.firstName, this.state.lastName, this.state.date)
		.then(res => {
			this.setState({usersCheckedIn: res.data.response, firstName: "", lastName: "", date: ""});
		}).catch(err => {
			
		});
	};

	render() {
		return (
			<div>
				{this.state.usersCheckedIn ? (
					<Grid>
						{this.state.usersCheckedIn.map(checkedInUser => (
							<GridCell className="grid" span="12">
								<Elevation z={11}>
									<Card className="checked-in-feed-card">
									<img src="#" alt="Userpic" className="photo" />
										<Typography
										use="headline4"
										className="name-holder"
										>
										{checkedInUser.firstName}
										{checkedInUser.lastName}
										</Typography>
										<ListDivider />
										{checkedInUser.date}
									</Card>
								</Elevation>
							</GridCell>
						))}
					</Grid>
				) : (
						<Grid>
							<GridCell className="place-holder" span="12">
								<Elevation z={11}>
									<Card className="place-holder-checked-in-feed-card">
									<img src="#" alt="Userpic" className="photo" />
									<Typography
									use="headline4"
									className="name-holder"
									>
										Please remain calm.
										</Typography>
										<ListDivider />
										We seem to be experiencing some technical difficulties.
										</Card>
								</Elevation>
							</GridCell>
						</Grid>
					)}
			</div>
		);

	}
};

export default CheckInFeed;
