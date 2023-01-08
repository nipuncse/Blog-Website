import React from 'react'
// import classes from '../css/blogs.module.css'

export default function Blog(props) {
	const text = props.content.slice(0, 10)
	const day = props.timestamp.slice(8, 10)
	const month = props.timestamp.slice(5, 7)
	const year = props.timestamp.slice(0, 4)

	// var links = parseHTML('<!doctype html><html><head></head><body><a>Link 1</a><a>Link 2</a></body></html>').getElementsByTagName('a');


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

	return (
		<>
			<div className="card col-4 mx-3 my-3 bg-dark" style={{ width: "18rem" }}>

				<img src="https://picsum.photos/200/300" style={{ height: "150px" }} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Posted on : {date}</p>
					<h5 className="card-title text-center text-white">{props.heading.toUpperCase()}</h5>
					<p className="card-text">Category: {props.category}</p>
					<p className="card-text">{text}</p>
					<p className="card-text">Author:{props.author}</p>
					{/* <p className="card-text">Likes: </p> */}
					{/* <p className="card-text">Contact: props.contac</p> */}
					{/* <p className="card-text">Details: props.cycle_desc</p> */}
					{/* <button type="button" className="btn btn-warning">Owner Info</button>	 */}
				</div>
				<button type="button" className="btn btn-primary">
					Notifications <span className="badge text-bg-secondary">4</span>
				</button>
			</div>


			{/* <div className={classes.container}>
				<div className={classes.column}>
					<div className={classes.postModule}>
						<div className={classes.thumbnail}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt="load" /></div>
						<div className={classes.postContent}>
							<div className={classes.category}>CATEGORY</div>
							<h1 className={classes.title}>Title Goes Here</h1>
							<h2 className={classes.sub_title}>And Subtitle Goes Here.</h2>
							<p className={classes.description} style={{ display: 'none', height: '100px', opacity: '1' }}>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
							<div className={classes.postMeta}><span className={classes.timestamp}><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i></span></div>
						</div>
					</div>
				</div>
			</div> */}


			{/* <div className="blog_post">
				<div className={classes.img_pod}>
					<img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random" />
				</div>
				<div className={classes.container_copy}>
					<h3>12 January 2019</h3>
					<h1>CSS Positioning</h1>
					<p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
					<a className={classes.btn_primary} href='/' target="_blank">Read More</a>
				</div>

			</div> */}
		</>
	)
}
