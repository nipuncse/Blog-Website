import React from 'react'
import classes from '../css/login.module.css'
export default function Login() {
	return (
		<>
			<div className={classes.loginBox}> <img className={classes.user} src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="loadingImage.." />
				<h3>Sign in</h3>
				<form action="login.php" method="post">
					<div className={classes.inputBox}>
						<input id="uname" type="text" name="Username" placeholder="Username" /> <input id="pass" type="password" name="Password" placeholder="Password" />
					</div>
					<input type="submit" name="" value="Login" />
				</form>
				<a href="/">Forget Password<br /> </a>
				<div className={classes.textcenter}>
					<p style={{ color: "#59238F" }}>Sign-Up</p>
				</div>

			</div>
		</>
	)
}
