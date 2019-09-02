import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import IconButton from '@material-ui/core/IconButton';

const sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}; 

const headers = {
	'x-rapidapi-host': process.env.REACT_APP_NASAPOD_HOST,
	'x-rapidapi-key': process.env.REACT_APP_NASAPOD_KEY
};

const nasapodlink = process.env.REACT_APP_NASAPOD_LINK;
	

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mylink: nasapodlink,
			isLoaded: null,
			PoD: null,
		}
	}
	
async componentDidMount() {
		await fetch(nasapodlink, {
			method: 'POST',
			headers,
			}).then(this.handleErrors)
			.then(res => res.json())
			.then(
			(result) => {
			this.setState({
					isLoaded: true,
					PoD: result.contextWrites.to
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
	const { error, isLoaded, PoD } = this.state;
		if (error) {
		  return (
			<div className="Error">
			<div>The API is not loading. Have you set your API Key?</div>
			</div>
		  );
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
    return (
	  <div className="NASAPoD">
		<div className="lander">
          <h1>NASA Picture of the Day</h1>
		  <h3>Title</h3>
		  <p>{PoD.title}</p>
		  <img className="PoDImg" src={PoD.hdurl}></img>
		  <h3>Explanation</h3>
		  <p className="explanation">{PoD.explanation}</p>
		  <h3>Photo Data</h3>
		  <p>{PoD.date}</p>
		  <h3>Copyright</h3>
		  <p>{PoD.copyright}</p>
        </div>
      </div>
    );
  }
}

}