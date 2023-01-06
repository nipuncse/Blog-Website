import React from 'react'
import withAuth from './hoc/withAuth'
import Texteditor from './Texteditor'

function Newblog() {
	return (
		<>
			<h1>NewBlog</h1>
			<Texteditor />
		</>
	)
}

export default withAuth(Newblog)
