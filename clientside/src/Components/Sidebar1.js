import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { VscChromeClose, VscNoNewline } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import classes from '../css/sidebar.module.css'


export default function Sidebar1() {
	const { collapseSidebar, collapsed } = useProSidebar();

	return (
		<div style={{ display: 'flex', height: '100vh' }}>
			<Sidebar backgroundColor='rgb(69 193 247)' width='15vw' collapsedWidth='2vw' className={classes.mysidebar}>
				<Menu menuItemStyles={{
					button: ({ level, active, disabled }) => {
						// only apply styles on first level elements of the tree
						if (level === 0)
							return {
								color: disabled ? '#ffffff' : '#000000',
								backgroundColor: active ? '#eecef9' : undefined,
								textDecorationColor: 'black'
							};
					},
				}}>
					<MenuItem> Home </MenuItem>
					<SubMenu label="Categories">
						<MenuItem className={classes.mymenuitem}> Polity </MenuItem>
						<MenuItem>Geopolitics </MenuItem>
						<MenuItem>Indian History </MenuItem>
						<MenuItem>Economy </MenuItem>
						<MenuItem>Geography </MenuItem>
						<MenuItem>Politics </MenuItem>
						<MenuItem>Personalities </MenuItem>
					</SubMenu>

					<MenuItem> Top Blogs </MenuItem>
					<MenuItem> Top Authors</MenuItem>
					<MenuItem> Top Categories</MenuItem>
					<MenuItem> </MenuItem>
				</Menu>
			</Sidebar>
			<main>
				{!collapsed ?
					<button onClick={() => collapseSidebar()} ><VscChromeClose size='4vh' style={{ color: 'black' }} /></button>
					:
					<button onClick={() => collapseSidebar()} ><SlMenu size='4vh' style={{ color: 'black' }} /></button>}
			</main>
		</div>
	);
}