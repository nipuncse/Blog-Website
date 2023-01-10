import React, { useEffect, useState } from 'react'
import Texteditor from './Texteditor'
import withAuth from './hoc/withAuth'
import axios from 'axios';
import Blog from './Blog3';


function Editblog() {
	const [newData, setnewData] = useState([]);
	const user = { id: JSON.parse(localStorage.getItem('whoisthis')).username }
	// console.log(user)
	useEffect(() => {
		async function getResults() {
			// console.log(props.login);
			const res = await axios.post("http://localhost:4200/getblogbyuser", {
				id: user.id
			});
			setnewData(res.data.details.reverse());
			// console.log(res.data.details.length);
			// console.log(res.data.details);
		}
		// async function hello() {
		// const stay = await mywait()
		getResults();

		// }
		// hello();

	}, [user.id])
	return (
		<>
			{/* <h1 className='text-white text-center'>Edit Your Blog here</h1> */}
			{/* <Texteditor /> */}
			<h1 className='text-center text-white'>Edit Blogs</h1>
			{newData.length !== 0 && <div className="container mx-auto my-5">
				<div className="row">
					{newData.map((element) => {
						return (
							<Blog login={user.id} key={element.uuid} obid={element._id} likes={element.likes} heading={element.heading} timestamp={element.timestamp} content={element.content} category={element.category} author={element.username} />
						)
					})};

				</div>
			</div>
			}
			{newData.length === 0 && <div>No Cycles Found : 404</div>}
		</>
	)
}

export default withAuth(Editblog)
