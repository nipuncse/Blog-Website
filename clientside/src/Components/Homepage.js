import React from 'react'
import classes from '../css/homepage.module.css'
import Blog from './Blog'
import withAuth from './hoc/withAuth'

const Homepage = () => {
	console.log('This is homepage')
	console.log('This is homepage')
	console.log(localStorage.getItem('whoisthis'))
	return (
		<>
			<div className="container mx-auto my-5">
				<div className="row">
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
				</div>
			</div>
		</>
	)
}

export default withAuth(Homepage);
