import React, { Component, Fragment } from "react";
import "./NewsList.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default class NewsList extends Component {
	render() {
		return (
			<div className="NewsList">
				<div className="header">
					<h1>Nintendo</h1>
				</div>
				<div className="MyList">
					<List>
					  <Paper>
					  <ListItem alignItems="flex-start">
						<ListItemAvatar>
						  <Avatar alt="Owen S. Good" src="https://cdn.vox-cdn.com/thumbor/LQCxOc0fXEPN4pDvLvvr5vu8C88=/0x15:1431x764/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11889895/Screen_Shot_2018_07_30_at_11.48.14_AM.png"/>
						</ListItemAvatar>
						<ListItemText 
						  primary={
						  <React.Fragment>
							<a href="https://www.polygon.com/2019/7/7/20685223/digimon-survive-release-date-2020-delayed-ps4-switch-pc-xbox-one" title="Digimon Survive delayed to 2020">Digimon Survive delayed to 2020</a>
						  </React.Fragment>
						  }
						  secondary={
							<React.Fragment>
							  <Typography
								component="span"
								variant="body2"
								color="textPrimary"
							  >
								Owen S. Good
							  </Typography>
							  {" - Originally expected for the franchise’s 20th anniversary in 2019, Digimon Survive will now launch in 2020 for PS4, Nintendo Switch, Xbox One and PC."}
							</React.Fragment>
						  }
						/>
						</ListItem>
						</Paper>
											  <Paper>
					  <ListItem alignItems="flex-start">
						<ListItemAvatar>
						  <Avatar alt="Owen S. Good" src="https://cdn.vox-cdn.com/thumbor/LQCxOc0fXEPN4pDvLvvr5vu8C88=/0x15:1431x764/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11889895/Screen_Shot_2018_07_30_at_11.48.14_AM.png"/>
						</ListItemAvatar>
						<ListItemText 
						  primary={
						  <React.Fragment>
							<a href="https://www.polygon.com/2019/7/7/20685223/digimon-survive-release-date-2020-delayed-ps4-switch-pc-xbox-one" title="Digimon Survive delayed to 2020">Digimon Survive delayed to 2020</a>
						  </React.Fragment>
						  }
						  secondary={
							<React.Fragment>
							  <Typography
								component="span"
								variant="body2"
								color="textPrimary"
							  >
								Owen S. Good
							  </Typography>
							  {" - Originally expected for the franchise’s 20th anniversary in 2019, Digimon Survive will now launch in 2020 for PS4, Nintendo Switch, Xbox One and PC."}
							</React.Fragment>
						  }
						/>
						</ListItem>
						</Paper>
					</List>
				</div>
			</div>
		);
	}
}
































