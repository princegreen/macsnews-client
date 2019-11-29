import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from "./Routes";
import newspaper from './containers/newspapericon.svg';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#01579b',},
	secondary: {main: '#eceff1',},
	mainGradient: "linear-gradient(to bottom right, #01579b, #a7ffeb)",
  },
});

//onClick={toggleDrawer('right', true)}

class App extends Component{
	render() {
		return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<div className="AppBar">
					<AppBar position="fixed" style={{ background: theme.palette.mainGradient }}>		   
						<Toolbar>
							<Button component={Link} to="/">
								<div className="icon" style={{ color: '#eceff1' }}>
									<img src={newspaper} className="newspaper" alt="Home" style={{ maxWidth: '40px' }}/>
									<br></br>
									MACS NEWS
								</div>
							</Button>
							<div className="App-leftlinks" style={{marginLeft: 'auto'}}>
								<Button component={Link} to="/" color='secondary' style={{fontSize: '16px' }}>News</Button>
								<Button component={Link} to="/NASAPoD" color='secondary' style={{fontSize: '16px' }}>NASA PoD</Button>
								<Button component={Link} to="/Mylinks" color='secondary' style={{fontSize: '16px' }}>My Links</Button>
							</div>
						</Toolbar>
					</AppBar>	
				</div>
			<Routes />
			</MuiThemeProvider>
			<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
			<div className="Sources">  
			  <h4 style={{ color: '#616161' }}>News available via (get your API key at) NewsAPI.org</h4>
			  <a href="https://newsapi.org" title="NewsAPI.org">NewsAPI.org</a>
			  <div> Icons made by </div>
				<div><a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware </a>
					from </div>
				<div><a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a>
					 which is licensed by </div>
				<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
				<div>I customized the wicked cool background on my homepage at</div>
				<a href="http://SVGBackgrounds.com" title="SVGBackgrounds.com">SVGBackgrounds.com</a>
			</div>
			</Paper>
		</div>
		);
	}
}

export default App;
