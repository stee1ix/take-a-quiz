import React from "react";
import "./topic-item.style.css";
import { Link } from "react-router-dom";

class TopicItem extends React.Component {
	openQuizTrigger = (event) => {
		this.props.openQuiz(this.props.questions);
		event.preventDefault();
	};

	render() {
		const { name, isSignedIn, imageUrl } = this.props;
		return (
			<div className="topic-item">
				<div className="image">
					{isSignedIn ? (
						<img
							onClick={this.openQuizTrigger}
							src={imageUrl}
							alt=""
						/>
					) : (
						<Link to="/login">
							<img src={imageUrl} alt="" />
						</Link>
					)}
				</div>

				<h4>{name}</h4>
			</div>
		);
	}
}

export default TopicItem;
