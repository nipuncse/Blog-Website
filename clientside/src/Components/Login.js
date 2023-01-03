import React, { useState, useContext, createContext } from 'react'
import classes from '../css/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../App'
export default function Login() {
	let navigate = useNavigate()
	const { currentUser, setCurrentUser } = useContext(UserContext)
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
		const res = await axios.post("http://localhost:4200/loginuser", user)
		if (res.data.message === true) {
			console.log(user)
			console.log(currentUser)
			setCurrentUser({
				username: user.username,
				password: user.password,
			})
			alert('Login Successful')
			navigate('/homepage')
		}
		else {
			alert("wrong credentials ! Try again")
		}
	}




	return (
		<>
			<div className={classes.loginBox}> <img className={classes.user} src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="loadingImage.." />
				<h3>Sign in</h3>
				<form onSubmit={handleSubmit}>
					<div className={classes.inputBox}>
						<input id="uname" type="text" name="username" onChange={change} value={user.username} placeholder="Username" />
						<input id="pass" type="password" name="password" onChange={change} value={user.password} placeholder="Password" />
					</div>
					<input type="submit" name="" value="Login" />
				</form>

				<div className={classes.textcenter}>
					<Link to="/" style={{ color: "#59238F" }}>Sign Up</Link>
				</div>

			</div>
		</>
	)
}
