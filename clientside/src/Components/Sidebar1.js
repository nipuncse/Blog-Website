import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { VscChromeClose, VscNoNewline } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { HiAnnotation } from "react-icons/hi";
import { RxExit } from "react-icons/rx";

import classes from '../css/sidebar.module.css'


export default function Sidebar1() {
	const { collapseSidebar, collapsed } = useProSidebar();

	return (
		<div style={{ display: 'flex', height: '100vh' }}>
			<Sidebar backgroundColor='rgb(69 193 247)'
				width='20vw' collapsedWidth='2vw' className={classes.mysidebar}>
				<Menu style={{ marginTop: '25vh' }} menuItemStyles={{
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

						<MenuItem className={classes.mymenuitem}> Indian Polity </MenuItem>
						<MenuItem>Geopolitics </MenuItem>
						<MenuItem>Indian History </MenuItem>
						<MenuItem>Economy </MenuItem>
						<MenuItem>Geography </MenuItem>
						<MenuItem>Politics </MenuItem>
						<MenuItem>Tech </MenuItem>
						<MenuItem>Personalities </MenuItem>
					</SubMenu>

					<MenuItem> Top Blogs    <HiAnnotation size='10%' /></MenuItem>
					<MenuItem>Top Authors   <BsPersonFill size='10%' /></MenuItem>
					<MenuItem> Top Categories    <BiCategory size='10%' /></MenuItem>
					<MenuItem> Sign Out   <RxExit size='10%' /></MenuItem>
				</Menu>
			</Sidebar>
			<main>
				{!collapsed ?
					<button style={{ marginTop: '50vh' }} onClick={() => collapseSidebar()} ><VscChromeClose size='4vh' style={{ color: 'black' }} /></button>
					:
					<button onClick={() => collapseSidebar()} ><SlMenu size='4vh' style={{ color: 'black' }} /></button>}
			</main>
		</div>
	);
}