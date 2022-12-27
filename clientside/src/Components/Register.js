import React from 'react'
import classes from '../css/register.module.css'
// import Login from './Login'
import { Link } from 'react-router-dom'

export default function Register() {
	return (
		<>
			<div className={classes.loginBox}> <img className={classes.user} src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="loadingImage.." />
				<h3>Register With Us</h3>
				<form action="login.php" method="post">
					<div className={classes.inputBox}>
						<input id="uname" type="text" name="Username" placeholder="Username" /> <input id="pass" type="password" name="Password" placeholder="Password" />
					</div>
					<input type="submit" name="" value="Register" />
				</form>
				<Link style={{ color: "rgb(255 222 58)" }} to="/login">Already Have an Account ?</Link>



			</div>
		</>
	)
}
