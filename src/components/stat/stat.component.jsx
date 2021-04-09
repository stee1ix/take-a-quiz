import React from "react";
import "./stat.style.css";

const Stat = ({ title, value }) => {
	return (
		<div className="stat-main">
			<h3>{title}</h3>
			<hr />
			<h6>{value}</h6>
		</div>
	);
};

export default Stat;
