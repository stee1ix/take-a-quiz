import React from "react";
import "./selection-group.style.css";
import TopicItem from "../topic-item/topic-item.component";
import Arrow from "../../assets/arrow.svg";

const Group = ({ name, topics }) => {
	return (
		<div className="selection-group-main">
			<div className="group-title">
				<h3>{name}</h3>
				<hr />
			</div>
			<div className="topics-section">
				{topics.map((topic) => (
					<TopicItem
						key={topic.id}
						name={topic.name}
						imgUrl={topic.imgUrl}
					/>
				))}
			</div>
			<div className="arrow">
				<img src={Arrow} alt="Arrow" />
			</div>
		</div>
	);
};

export default Group;
