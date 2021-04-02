import React from "react";
import "./topic-item.style.css";
import Astra from "../../assets/test-img.jpg";

const TopicItem = ({ imgUrl, name }) => {
	return (
		<div className="topic-item">
			<div className="image">
				<img src={Astra} alt="" />
			</div>

			<h4>{name}</h4>
		</div>
	);
};

export default TopicItem;
