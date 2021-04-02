import React from "react";
import Credential from "../../components/credential/credential.component";
import "./login.style.css";

const Login = () => {
	return (
		<div className="login-main">
			<div className="login-title">
				<h1 className="login">Login</h1>
				<h3 className="dive-deep">
					Dive deep into the sea of questions
				</h3>
			</div>
			<Credential name="Username" type="text" />
			<Credential name="Password" type="password" />
			<button className="login-button">LOGIN</button>
		</div>
	);
};

export default Login;
