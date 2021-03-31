import React from "react";
import "./home-header.style.css";
import manIllus from "../../assets/man-illus.gif";
import womanIllus from "../../assets/woman-illus.gif";
import { Link } from "react-router-dom";

const HomeHeader = () => {
	return (
		<div className="main">
			<img id="man" src={manIllus} alt="man-illus" />
			<div className="title">
				<h1 className="heading">Take a Quiz...</h1>
				<button className="do-button">LET'S DO THIS</button>
			</div>
			<img id="woman" src={womanIllus} alt="woman-illus" />
		</div>
	);
};

export default HomeHeader;
