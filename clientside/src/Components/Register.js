import React, { useState } from 'react'
import classes from '../css/register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
	let navigate = useNavigate()
	const [user, setUser] = useState({
		username: "",
		password: ""
	})

	const change = e => {
		const { name, value } = e.target
		console.log(`${name} ${value}`)
		setUser({
			...user,
			[name]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user)
		const res = await axios.post("http://localhost:4200/registeruser", user)
		if (res.data.message === 1) {
			console.log(res.data.user)
			// props.updateUser(res.data.user)
			alert('Registration Successful, Please login to continue')
			navigate('/login')
		}
		else
			alert("User already Registered")
	}

	return (
		<>
			<div className={classes.loginBox}> <img className={classes.user} src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="loadingImage.." />
				<h3>Register With Us</h3>
				<form onSubmit={handleSubmit}>
					<div className={classes.inputBox}>
						<input id="uname" type="text" name="username" onChange={change} value={user.username} placeholder="Username" />
						<input id="pass" type="password" name="password" onChange={change} value={user.password} placeholder="Password" />
					</div>
					<input type="submit" name="" value="Register" />
				</form>
				<Link style={{ color: "rgb(255 222 58)" }} to="/login">Already Have an Account ?</Link>



			</div>
		</>
	)
}
