import React from 'react'
import withAuth from './hoc/withAuth'

function Deleteblog() {
	return (
		<h1>Deleteblog</h1>
	)
}

export default withAuth(Deleteblog)
