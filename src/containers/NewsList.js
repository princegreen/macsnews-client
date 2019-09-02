import React, { Component, Fragment } from "react";
import Popup from 'react-popup';
import "./NewsList.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const apiKey = process.env.REACT_APP_NEWSAPI_KEY;

export default class NewsList extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			error: false,
			isLoaded: false,
			articles: [],
			apiKey: apiKey,
			query: this.props.match.params.id,
			mylink: null,
			myfromdate: null,
			mytodate: null,
		};
	}
	
	componentDidMount() {
		//set the from date and to date to today minus 1 week
		var mydate = new Date();
		var myyear = mydate.getFullYear().toString();
		var month = mydate.getMonth() + 1;
		var mymonth = month.toString();
		var myday = mydate.getDate().toString();
		this.mytodate = myyear + "-" + mymonth + "-" + myday;
		mydate.setDate(mydate.getDate() - 7)
		myyear = mydate.getFullYear().toString();
		month = mydate.getMonth() + 1;
		mymonth = month.toString();
		myday = mydate.getDate().toString();
		this.myfromdate = myyear + "-" + mymonth + "-" + myday;
		//set the link to use to access the News API
		if (this.state.query == "Headlines") {
			this.mylink = "https://newsapi.org/v2/top-headlines?apiKey=" + this.state.apiKey + "&country=ca";
		}
		else {
		this.mylink = "https://newsapi.org/v2/everything?apiKey=" + this.state.apiKey + "&q=" + this.state.query + "&from=" + this.myfromdate + "&to=" + this.mytodate + "&sortBy=popularity&language=en";
		}
		//fetch the API data
		
		fetch(this.mylink)
			.then(this.handleErrors)
			.then(res => res.json())
			.then(
			(result) => {
			this.setState({
					isLoaded: true,
					articles: result.articles
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error: true
					});
				}
			)
	}
	
	handleErrors(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	}
	
	handleNewItemChange = apiKey => event => {
		this.setState({
			[apiKey]: event.target.value,
		});
	};
	
	setAPIKey = async event =>
	{
		event.preventDefault();
		try{
			this.reFetch();
			this.setState({
				error: false,
				apiKey: ''
			});
		}
		catch (e)
		{
			alert(e);
		}
	}
	
	reFetch(){
	if (this.state.query == "Headlines") {
			this.mylink = "https://newsapi.org/v2/top-headlines?apiKey=" + this.state.apiKey + "&country=ca";
		}
	else {
		this.mylink = "https://newsapi.org/v2/everything?apiKey=" + this.state.apiKey + "&q=" + this.state.query + "&from=" + this.myfromdate + "&to=" + this.mytodate + "&sortBy=popularity&language=en";
	}
		fetch(this.mylink)
			.then(this.handleErrors)
			.then(res => res.json())
			.then(
			(result) => {
			this.setState({
					isLoaded: true,
					articles: result.articles
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error: true
					});
				}
			)
	}
	
	render() {
		const { error, isLoaded, articles } = this.state;
		if (error) {
		  return (
			<div className="Error">
			<div>The API is not loading. Have you set your API Key?</div>
				<div className="myButton">
					<Button variant="contained" onClick={this.setAPIKey}>Set API Key</Button>
				</div>
				<div className="mytextfield">
				    <TextField
						id="apiKey"
						label="API Key"
						value={this.state.apiKey}
						onChange={this.handleNewItemChange('apiKey')}
						margin='normal'>
					</TextField>
				</div>
			</div>
		  );
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		return (
			<div className="NewsList">
				<div className="header">
				<h1>{this.state.query}</h1>
				</div>
				<div className="MyList">
					<List>
					{articles.map(article => (
					    <Paper>
						  <ListItem alignItems="flex-start">
							<ListItemAvatar>
							  <Avatar alt={article.author} src={article.urlToImage}/>
							</ListItemAvatar>
							<ListItemText 
							  primary={
							  <React.Fragment>
								<a href={article.url} title={article.title} target="_blank" rel="noopener noreferrer">{article.title}</a>
							  </React.Fragment>
							  }
							  secondary={
								<React.Fragment>
								  <Typography
									component="span"
									variant="body2"
									color="textPrimary"
								  >
								  {article.author + " - "}
								  </Typography>
								  {article.description}
								</React.Fragment>
							  }
							/>
						  </ListItem>
						</Paper>
					))}
					</List>
				</div>
				<div className="myButton">
					<Button variant="contained" onClick={this.setAPIKey}>Set API Key</Button>
				</div>
				<div className="mytextfield">
				    <TextField
						id="apiKey"
						label="API Key"
						value={this.state.apiKey}
						onChange={this.handleNewItemChange('apiKey')}
						margin='normal'>
					</TextField>
				</div>
			</div>
		);
	}
	}
}