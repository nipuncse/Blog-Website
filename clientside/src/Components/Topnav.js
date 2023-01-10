import React, { useContext } from 'react'
import { UserContext } from '../App'
import { IoIosStats } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
export default function Topnav() {
	// const { currentUser } = useContext(UserContext)
	const name = (JSON.parse(localStorage.getItem('whoisthis')).username)
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ display: 'flex' }} >
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Hello {name}</a>

					<div className="collapse navbar-collapse float-right" style={{ flexGrow: 0 }} id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item mx-3">
								<a className="btn btn-info " role="button" href='http://localhost:3000/newblog'> <MdPostAdd></MdPostAdd> Add New</a>
							</li>
							<li className="nav-item mx-3">
								<a className="btn btn-danger " role="button" href='http://localhost:3000/deleteblog'> <MdDelete></MdDelete> Delete Blogs</a>
							</li>
							<li className="nav-item mx-3">
								<a className="btn btn-success " role="button" href='http://localhost:3000/editblog'> <FiEdit></FiEdit> Edit Stuff</a>
							</li>
							<li className="nav-item mx-3">
								<a className="btn btn-warning " role="button" href='http://localhost:3000/mystats'> <IoIosStats></IoIosStats> My Stats</a>
							</li>
							{/* <li className="nav-item ">
								<a className="btn btn-outline-success " role="button" href='http://localhost:3000'>Primary link</a>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
