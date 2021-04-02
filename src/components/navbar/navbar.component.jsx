import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li className="login">
					<Link to="/login">Login</Link>
				</li>
				<li className="register">
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
