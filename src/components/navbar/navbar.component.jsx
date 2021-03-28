import React from "react";
import "./navbar.style.css";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li className="login">
					<a href="#">Login</a>
				</li>
				<li className="register">
					<a href="#">Register</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
