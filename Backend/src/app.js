
const conn = require('./db/conn.js')
const cors = require('cors')
const path = require('path')
const userinfo = require('./models/userregister')
const newblog = require('./models/allblogs')
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = process.env.PORT || 4200

//for login

app.post('/loginuser', (req, res) => {
	console.log(req.body)
	const { username, password } = req.body
	userinfo.findOne({ username: username }, (err, user) => {
		if (user) {
			if (password === user.password) {
				res.send({ message: true, user: user })
			}

			else {
				res.send({ message: false })
			}
		}

		else {
			res.send({ message: "Wrong Credentials" })
		}
	})
})
// ?-----------------------------------------------------------

// for register

app.post('/registeruser', async (req, res) => {
	console.log(req)
	const { username, password } = req.body

	try {
		const details = new userinfo({
			username: username,
			password: password
		})

		const registered = await details.save();
		console.log(registered)
		res.send({ message: 'success', user: details })
	}
	catch (err) {
		console.log(err)
		res.send({ message: 'fail' })
	}
})

// -----------------------------------------------------------

// for Homepage

app.get('/allblogs', (req, res) => {

	try {
		newblog.find({}, function (err, allDetails) {
			console.log(allDetails)
			if (err) {
				res.send({ message: "0" })
				console.log(err);
			} else {
				res.send({ message: "1", details: allDetails })
			}
		})
	}

	catch (err) {
		res.send({ message: "0" })
	}

})

// -----------------------------------------------------------

// for Newblog

app.post('/addblog', async (req, res) => {
	console.log(req)
	const { username, uuid, heading, content, category, timestamp } = req.body

	var add
	try {
		add = await newblog.updateOne(
			{ uuid: uuid },
			{ $set: { username: username, uuid: uuid, heading: heading, content: content, category: category, timestamp: timestamp, likes: "0" } },
			{ upsert: true }
		);
	}
	catch (err) {
		res.send({ message: '-1' });
	}
	console.log(add)
	if (add.matchedCount) {
		res.send({ message: "1" })
		console.log('blogupdated')
	}
	else if (!add.matchedCount) {
		res.send({ message: "0" })
		console.log('blogadded')
	}
})


//--------------------------------------------------------

//for categor blogs

app.post('/bycategory', (req, res) => {
	console.log(req.body)
	try {
		newblog.find({ category: req.body.category }, function (err, allDetails) {
			console.log(allDetails)
			if (err) {
				res.send({ message: "0" })
				console.log(err);
			} else {
				res.send({ message: "1", details: allDetails })
			}
		})
	}

	catch (err) {
		res.send({ message: "0" })
	}

})

//------------------------------------------------------------
// for user blogs

app.post('/getblogbyuser', (req, res) => {
	console.log(req.body)
	try {
		newblog.find({ username: req.body.id }, function (err, allDetails) {
			console.log(allDetails)
			if (err) {
				res.send({ message: "0" })
				console.log(err);
			} else {
				res.send({ message: "1", details: allDetails })
			}
		})
	}

	catch (err) {
		res.send({ message: "0" })
	}

})

//-------------------------------------------------------------
// for delete blog

app.post('/deleteblog', (req, res) => {
	console.log(req.body)
	const { id } = req.body
	newblog.remove({ _id: id }, function (err, allDetails) {
		if (err) {
			res.send({ message: "0" })
			console.log(err);
		} else {
			res.send({ message: "1", details: allDetails })
		}
	})
})




// Port is listening here
app.listen(port, () => {
	console.log('tmkoc')
})