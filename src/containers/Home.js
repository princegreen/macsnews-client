import React, { Component } from "react";
import "./Home.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import cardData from "./carddata"
import { ReactComponent as MyNewspaper} from './newspaper.svg';
import { Link } from "react-router-dom";
import SplitText from 'react-pose-text';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
};
  
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

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Paper style={{ width: 500, margin: 'auto', backgroundColor: '#2A2A2A' }}>
		<div className="lander">
				<StyledIcon>
					<MyNewspaper />
				</StyledIcon>
		  <div className="splittext">
				<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
					MACS NEWS
				</SplitText>
		  </div>
		  <h4 style={{ color: '#4db6ac' }}>Here are your latest headlines...</h4>
        </div>
		</Paper>
		<div className="GridList">
			<Paper style={{ backgroundColor: '#2A2A2A'}}>
			<GridList style={styles.gridList}>
			{cardData.map(tile => (
				<GridListTile key={tile.img} style={styles.root} component={Link} to={"/NewsList/" + tile.title}>
					<img src={tile.img} alt={tile.title} width="200"/>
					<GridListTileBar
					  title={tile.title}
					/>
			  </GridListTile>			  
			))}
		  </GridList>
		  </Paper>
		  </div>
	</div>
    );
  }
}