import React from "react";
import "./selection-navbar.style.css";
import profileIcon from "../../assets/001-man.svg";

const SelectionNav = ({ username }) => {
	return (
		<div className="selection-nav-main">
			<nav className="selection-nav">
				<h2>Pick Your Choice!</h2>
				<div className="options">
					<ul>
						<img className="profileIcon" src={profileIcon} alt="" />
						<li>{username}</li>
						<li className="logout">Logout</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default SelectionNav;
