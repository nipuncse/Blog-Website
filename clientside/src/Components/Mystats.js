import React from 'react'
import withAuth from './hoc/withAuth'

function Mystats() {
	return (
		<h1>Mystats</h1>
	)
}

export default withAuth(Mystats)
