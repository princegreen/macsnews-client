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
		<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
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
				<Paper style={{ width: 500, margin: 'auto', backgroundColor: '#eeeeee' }}>
					<a href="http://www.wikipedia.org" target="_blank" rel="noopener noreferrer" title="Wikipedia">Wikipedia</a>
					<br></br>					
					<br></br>
					<a href="http://www.sacredpie.com" target="_blank" rel="noopener noreferrer" title="Sacred Pie">Sacred Pie</a>
					<br></br>
					<br></br>
					<a href="http://www.shatteredstarlight.com" target="_blank" rel="noopener noreferrer" title="Shattered Starlight">Shattered Starlight</a>
					<br></br>
					<br></br>	
					<a href="http://www.feywinds.com" target="_blank" rel="noopener noreferrer" title="Fey Winds">Fey Winds</a>
					<br></br>
					<br></br>	
					<a href="http://www.xkcd.com" target="_blank" rel="noopener noreferrer" title="XKCD">XKCD</a>
					<br></br>
					<br></br>	
					<a href="https://www.gov.mb.ca/covid19/updates/index.html" target="_blank" rel="noopener noreferrer" title="COVID Manitoba">COVID Manitoba</a>
					<br></br>
					<br></br>
					<a href="https://www.gov.mb.ca/covid19/vaccine/eligibility-criteria.html" target="_blank" rel="noopener noreferrer" title="COVID Manitoba Eligibility">COVID Manitoba Eligibility</a>
					<br></br>
					<br></br>						
					<a href="https://www.gov.mb.ca/covid19/vaccine/queue-calculator.html" target="_blank" rel="noopener noreferrer" title="COVID Vaccine Calculator Manitoba">COVID Vaccine Calculator Manitoba</a>
				</Paper>
			</div>
	</div>
    );
  }
}