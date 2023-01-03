
const conn = require('./db/conn.js')
const cors = require('cors')
const path = require('path')
const userinfo = require('./models/userregister')
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = process.env.PORT || 4200

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
		res.send({ message: 1, user: details })
	}
	catch (err) {
		console.log(err)
		res.send({ message: 0 })
	}
})


app.listen(port, () => {
	console.log('tmkoc')
})