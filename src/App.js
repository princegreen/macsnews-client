import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors/';
import IconButton from '@material-ui/core/IconButton';
import Routes from "./Routes";
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#01579b',},
	secondary: {main: '#FAFAFA',},
  },
});

class App extends Component{
	render() {
		return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<AppBar position="static" color='primary' >		   
					<Toolbar>
						<IconButton style={{color: 'white' }}>
							<MenuIcon />
						</IconButton>
						<Button component={Link} to="/"  style={{ textDecoration: 'none', color: 'white' }}>Macs News</Button>
					</Toolbar>
				</AppBar>
			<Routes />
		  </MuiThemeProvider>
		</div>
		);
	}
}

export default App;
