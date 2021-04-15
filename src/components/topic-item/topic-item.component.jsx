import React from "react";
import "./topic-item.style.css";
import { Link } from "react-router-dom";
import football from "../../assets/images/football.jpg";
import cricket from "../../assets/images/cricket.jpg";
import basketball from "../../assets/images/basketball.jpg";
import olympic from "../../assets/images/olympic.svg";
import cpp from "../../assets/images/c++.svg";
import python from "../../assets/images/python.svg";
import java from "../../assets/images/java.svg";
import css from "../../assets/images/css.svg";
import html from "../../assets/images/html.svg";

class TopicItem extends React.Component {
	openQuizTrigger = (event) => {
		this.props.openQuiz(this.props.questions);
		event.preventDefault();
	};

	imageName = (imageUrl) => {
		switch (imageUrl) {
			case "football":
				return football;
			case "cricket":
				return cricket;
			case "basketball":
				return basketball;
			case "olympic":
				return olympic;
			case "cpp":
				return cpp;
			case "python":
				return python;
			case "java":
				return java;
			case "html":
				return html;
			case "css":
				return css;

			default:
				break;
		}
	};

	render() {
		const { name, isSignedIn, imageUrl } = this.props;
		return (
			<div className="topic-item">
				<div className="image">
					{isSignedIn ? (
						<img
							onClick={this.openQuizTrigger}
							src={this.imageName(imageUrl)}
							alt=""
						/>
					) : (
						<Link to="/login">
							<img src={this.imageName(imageUrl)} alt="" />
						</Link>
					)}
				</div>

				<h4>{name}</h4>
			</div>
		);
	}
}

export default TopicItem;
