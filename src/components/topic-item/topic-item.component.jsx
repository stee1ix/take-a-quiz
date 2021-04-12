import React from "react";
import "./topic-item.style.css";
import Astra from "../../assets/test-img.jpg";
// import Question from "../../components/question/question.component";

class TopicItem extends React.Component {
	openQuizTrigger = (event) => {
		this.props.openQuiz(this.props.questions);
		event.preventDefault();
	};

	render() {
		const { name } = this.props;
		return (
			<div className="topic-item">
				<div className="image">
					<img onClick={this.openQuizTrigger} src={Astra} alt="" />
				</div>

				<h4>{name}</h4>
			</div>
		);
	}
}

export default TopicItem;
