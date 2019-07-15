import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import cardData from "./containers/carddata"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

 export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
		
		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div className="SideList" role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
			<List>
			  {cardData.map(tile => (
				<ListItem button key={tile.title}>
				  <ListItemText primary={tile.title} />
				</ListItem>
			  ))}
			</List>
		</div>
	);
	
	return (
		<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
	);
 }