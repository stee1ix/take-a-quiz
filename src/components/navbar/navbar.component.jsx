import React from "react";
import "./navbar.style.css";
import profileIcon from "../../assets/001-man.svg";
import { Link } from "react-router-dom";

const Navbar = ({ username, profile }) => {
	return (
		<div className="navbar-main">
			<nav className="nav">
				<h2>
					{profile ? (
						<Link to="/selection">Take a Quiz...</Link>
					) : (
						"Pick Your Choice!"
					)}
				</h2>
				<div className="options">
					<ul>
						<li>
							<Link to="/profile">
								<img
									className={
										profile
											? "profileIcon hidden"
											: "profileIcon"
									}
									src={profileIcon}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/profile">{username}</Link>
						</li>
						<Link to="/logout">
							<li className="logout">Logout</li>
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
