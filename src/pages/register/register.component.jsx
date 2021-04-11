import React from "react";
import { Link } from "react-router-dom";
import Credential from "../../components/credential/credential.component";
import "./register.style.css";

const Register = () => {
	return (
		<div className="register-main">
			<div className="register-title">
				<h1 className="register">Register</h1>
				<h3 className="dive-deep">
					Dive deep into the sea of questions
				</h3>
			</div>
			<form>
				<Credential name="Username" type="text" />
				<Credential name="Password" type="password" />
				<button className="regsiter-button">REGISTER</button>
			</form>
			<h4 className="login-option">
				Already have an account!{" "}
				<Link to="./login">
					<span style={{ color: "#13c7ee" }}>Login</span>
				</Link>
			</h4>
		</div>
	);
};

export default Register;
