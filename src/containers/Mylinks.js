import React, { Component } from "react";
import "./Mylinks.css";
import { ReactComponent as MyLink} from './link.svg'
import Paper from '@material-ui/core/Paper';
import SplitText from 'react-pose-text';
import styled from 'styled-components';

const charPoses = {
	  exit: {opacity: 0, x:20},
	  enter: {
		  opacity: 1,
		  x: 0,
		  delay: ({ charIndex }) => charIndex * 50
	  }
};

const StyledIcon = styled.div`
   margin: auto;
   @keyframes draw {
      from { 
          stroke-dashoffset: 1500; 
      }
      to {  
         stroke-dashoffset: 0; 
      }
   };
   
  path {
      stroke-dasharray: 1500;
      animation-name: draw;
      animation-duration: 10s;
      animation-fill-mode: forwards;
   }
 `;

export default class Mylinks extends Component {
  render() {
    return (
      <div className="Mylinks">
        <div className="lander">
		<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#2A2A2A' }}>
				<StyledIcon>
					<MyLink />
				</StyledIcon>
			<div className="splittext">
				<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
					MY LINKS
				</SplitText>
			</div>
		  </Paper>
		  </div>
			<div className="Paper">
				<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#2A2A2A' }}>
					<a href="http://www.wikipedia.org" target="_blank" rel="noopener noreferrer" title="Wikipedia" style={{ color: '#f2f2f2'}}>Wikipedia</a>
					<br></br>					
					<br></br>
					<a href="http://www.sacredpie.com" target="_blank" rel="noopener noreferrer" title="Sacred Pie" style={{ color: '#f2f2f2'}}>Sacred Pie</a>
					<br></br>
					<br></br>
					<a href="http://www.shatteredstarlight.com" target="_blank" rel="noopener noreferrer" title="Shattered Starlight" style={{ color: '#f2f2f2'}}>Shattered Starlight</a>
					<br></br>
					<br></br>	
					<a href="http://www.feywinds.com" target="_blank" rel="noopener noreferrer" title="Fey Winds" style={{ color: '#f2f2f2'}}>Fey Winds</a>
					<br></br>
					<br></br>	
					<a href="http://www.xkcd.com" target="_blank" rel="noopener noreferrer" title="XKCD" style={{ color: '#f2f2f2'}}>XKCD</a>
					<br></br>
					<br></br>
					<a href="https://apod.nasa.gov/apod/astropix.html" title="NASA APOD" target="_blank" rel="noopener noreferrer" style={{ color: '#f2f2f2'}}>NASA APOD</a>
					<br></br>
					<br></br>
					<a href="https://calendar.google.com" title="Google Calendar" target="_blank" rel="noopener noreferrer" style={{ color: '#f2f2f2'}}>My Calendar</a>
				</Paper>
			</div>
	</div>
    );
  }
}