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
import TemporaryDrawer from "./drawer.js";

const theme = createMuiTheme({
  palette: {
    primary: {main: '#01579b',},
	secondary: {main: '#FAFAFA',},
  },
});

//onClick={toggleDrawer('right', true)}

class App extends Component{
	render() {
		return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<div className="AppBar">
				<AppBar position="fixed" color='primary' >		   
					<Toolbar>
						<Button component={Link} to="/"  style={{ textDecoration: 'none', color: 'white' }}>Macs News</Button>
						<div className="App-leftlinks" style={{marginLeft: 'auto'}}>
							<Button component={Link} to="/" color='secondary' style={{fontSize: '16px' }}>News</Button>
							<Button component={Link} to="/NASAPoD" color='secondary' style={{fontSize: '16px' }}>NASA PoD</Button>
						</div>
					</Toolbar>
				</AppBar>	
				</div>
			<Routes />
			</MuiThemeProvider>
			<div className="Sources">  
			  <h4>News available via (get your API key at) NewsAPI.org</h4>
			  <a href="https://newsapi.org" title="NewsAPI.org">NewsAPI.org</a>
			  <div> Icons made by </div>
				<div><a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware </a>
					from </div>
				<div><a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a>
					 which is licensed by </div>
				<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
			</div>
		</div>
		);
	}
}

export default App;
