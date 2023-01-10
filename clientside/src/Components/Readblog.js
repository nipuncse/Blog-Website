import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import withAuth from './hoc/withAuth';
import { FcLike } from "react-icons/fc";


function Readblog() {
	const [searchParams, setSearchParams] = useSearchParams();
	const blogid = searchParams.get('id')
	const [blogdata, setblogdata] = useState(undefined)
	useEffect(() => {
		async function getData() {
			const res = await axios.post("http://localhost:4200/getblogdetails", {
				id: blogid
			});
			// if (blogdata === undefined)
			setblogdata(res.data.details)
		}
		// if (blogdata === undefined)
		getData()
	}, [blogid])
	// console.log(blogdata?[0])
	return (
		<>
			{/* <h1 className='text-white text-center'>Read Blog</h1> */}

			<div className='d-flex mx-3 bg-dark flex-column mt-5'>
				<div className='text-center text-white text-center text-lg my-2'>
					{blogdata?.[0]?.heading?.toUpperCase()}
				</div>
				<div className='d-flex flex-row justify-content-between'>
					<div className='text-white mx-3'>
						Author : {blogdata?.[0]?.username}
					</div>

					<div className='text-white mx-3'>
						<FcLike role='button' ></FcLike>: {blogdata?.[0]?.likes}
					</div>

				</div>
			</div>

			<div className=" mx-3 bg-light">
				<div dangerouslySetInnerHTML={{ __html: blogdata?.[0]?.content }} className='text-dark' ></div>
			</div>
		</>
	)
}

export default withAuth(Readblog)
