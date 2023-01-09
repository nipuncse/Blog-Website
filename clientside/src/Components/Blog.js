import React from 'react'
// import classes from '../css/blogs.module.css'
import { FcLike } from "react-icons/fc";
// import DOMPurify from 'dompurify';


export default function Blog(props) {
	const text = props.content.slice(0, 10)
	const day = props.timestamp.slice(8, 10)
	const month = props.timestamp.slice(5, 7)
	const year = props.timestamp.slice(0, 4)

	// var links = parseHTML('<!doctype html><html><head></head><body><a>Link 1</a><a>Link 2</a></body></html>').getElementsByTagName('a');
	const htmlString = props.content
	const div = document.createElement('div');
	div.innerHTML = htmlString;
	const ntext = div.textContent;

	// var headingContent = props.heading
	// var diff = 42 - headingContent.length
	// const newheading = headingContent + '.'.repeat(diff)
	// const newheading = headingContent.padEnd(diff, " ")

	function getMonthName(monthNumber) {
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"April",
			"May",
			"June",
			"July",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec"
		];
		return months[monthNumber - 1];
	}
	const date = day + ' ' + getMonthName(month) + ' ' + year
	const handleonClick = () => {
		console.log('handle on click')
	}

	return (
		<>

			<div className="container col-4 mx-3 my-3" style={{ width: "18rem" }}>
				<div className="card">
					<div className="card__header bg-dark">
						<img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
					</div>
					<div className="card__body bg-dark d-flex">
						<div className='d-flex justify-content-between'>
							<span className="tag tag-blue ">{props.category}</span>
							<span className='text-white'><FcLike></FcLike>  {props.likes}</span>
						</div>

						<h4 className='text-white'>{props.heading}</h4>
						<p style={{ flexGrow: '1' }}>{ntext}</p>
						<div className='d-flex justify-content-between'>
							<div className='d-flex flex-column'>
								<small className='text-white '>{date}</small>
								<small className='text-white '>By:- {props.author}</small>
							</div>
							<button type="button" onClick={handleonClick} className='btn btn-warning'>Take a Read</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
