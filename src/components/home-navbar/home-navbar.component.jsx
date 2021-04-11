import React from "react";
import "./home-navbar.style.css";
import { Link } from "react-router-dom";

const HomePageNavBar = ({ selection }) => {
	return (
		<div className="home-nav-main">
			{selection ? <h2>{"Pick Your Choice!"}</h2> : ""}
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
		</div>
	);
};

export default HomePageNavBar;
