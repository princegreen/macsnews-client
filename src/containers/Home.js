import React, { Component } from "react";
import "./Home.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import cardData from "./carddata"
import { makeStyles } from '@material-ui/core/styles';
import newspaper from './newspaper.svg';
import { Link } from "react-router-dom";

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

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
		  <img src={newspaper} className="newspaper" alt="Home" />
          <h1>Macs News</h1>
          <p>My favourite news</p>
        </div>
		<div className="GridList">
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
		  </div>
	</div>
    );
  }
}