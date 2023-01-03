import React from 'react'
import classes from '../css/homepage.module.css'
import withAuth from './hoc/withAuth'

const Homepage = () => {
	console.log('This is homepage')
	return (
		<h1>This is Homepage</h1>
	)
}

export default withAuth(Homepage);
