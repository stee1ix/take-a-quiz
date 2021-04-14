import React from "react";
import "./question.style.css";

class Question extends React.Component {
	option1Click = () => {
		if (this.props.correctOption === 1) {
			this.props.correctAnswer();
		} else {
			this.props.onResponse();
		}
	};
	option2Click = () => {
		if (this.props.correctOption === 2) {
			this.props.correctAnswer();
		} else {
			this.props.onResponse();
		}
	};
	option3Click = () => {
		if (this.props.correctOption === 3) {
			this.props.correctAnswer();
		} else {
			this.props.onResponse();
		}
	};
	option4Click = () => {
		if (this.props.correctOption === 4) {
			this.props.correctAnswer();
		} else {
			this.props.onResponse();
		}
	};

	render() {
		const { question, option1, option2, option3, option4 } = this.props;
		return (
			<div className="question-main">
				<div className="question">
					<h5>{question}</h5>
				</div>

				<div className="ques-options">
					<div onClick={this.option1Click} className="option1">
						<h5>{option1}</h5>
					</div>
					<div onClick={this.option2Click} className="option2">
						<h5>{option2}</h5>
					</div>
					<div onClick={this.option3Click} className="option3">
						<h5>{option3}</h5>
					</div>
					<div onClick={this.option4Click} className="option4">
						<h5>{option4}</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Question;
