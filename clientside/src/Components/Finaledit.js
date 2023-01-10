import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Editeditor from './Editeditor'
import withAuth from './hoc/withAuth'

function Finaledit() {
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get('id')

	return (
		<>
			<h1>Final eDit</h1>
			<Editeditor id={id} />
		</>
	)
}

export default withAuth(Finaledit)
