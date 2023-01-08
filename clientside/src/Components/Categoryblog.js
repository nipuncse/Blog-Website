import React from 'react'
import { useSearchParams } from 'react-router-dom';
import withAuth from './hoc/withAuth'

function Categoryblog() {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<>
			<h1> </h1>
			{searchParams.get("category")}
		</>
	)
}

export default withAuth(Categoryblog)
