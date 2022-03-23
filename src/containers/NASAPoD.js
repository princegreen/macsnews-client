import React, { Component } from "react";
import "./NASAPoD.css";
import SplitText from 'react-pose-text';
import Paper from '@material-ui/core/Paper';

const headers = {
	'x-rapidapi-host': process.env.REACT_APP_NASAPOD_HOST,
	'x-rapidapi-key': process.env.REACT_APP_NASAPOD_KEY,
	'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Origin': 'http://localhost:3000/NASAPoD',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'

};

const charPoses = {
	  exit: {opacity: 0, x:20},
	  enter: {
		  opacity: 1,
		  x: 0,
		  delay: ({ charIndex }) => charIndex * 50
	  }
};

const nasapodlink = process.env.REACT_APP_NASAPOD_LINK	

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mylink: null,
			isLoaded: null,
			PoD: null,
		}
	}
	
async componentDidMount() {
		await fetch(nasapodlink, {
			method: 'GET',
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
			<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
					<div>The API is not loading. Have you set your API Key?</div>
			</Paper>
			</div>
		  );
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
    return (
	  <div className="NASAPoD">
		<div className="lander">
		  <Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
		  <div className="splittext">
				<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
					NASA PICTURE OF THE DAY
				</SplitText>
		  </div>
		  <h3>Title</h3>
		  <p>{PoD.title}</p>
		  </Paper>
		  <div className="PoDImg" >
		  <img src={PoD.hdurl} alt={PoD.title}></img>
		  </div>
		  <Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
		  <h3>Explanation</h3>
		  <p className="explanation">{PoD.explanation}</p>
		  <h3>Photo Data</h3>
		  <p>{PoD.date}</p>
		  <h3>Copyright</h3>
		  <p>{PoD.copyright}</p>
		  <h3>URL</h3>
		  <a href={PoD.hdurl} title="PoD URL">PoD URL</a>
		  </Paper>
        </div>
      </div>
    );
  }
}

}