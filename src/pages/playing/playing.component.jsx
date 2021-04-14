import React from "react";
import "./playing.style.css";
import Question from "../../components/question/question.component";
import ResultAstra from "../../assets/result-astra.jpg";

const initState = {
	score: 0,
	currentQuestion: 0,
};

class Playing extends React.Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	onResponse = () => {
		this.setState({ currentQuestion: this.state.currentQuestion + 1 });
	};

	correctAnswer = () => {
		this.setState({
			score: this.state.score + 1,
			currentQuestion: this.state.currentQuestion + 1,
		});
	};

	render() {
		console.log(this.state);
		const { currentQuestion, score } = this.state;
		const { questions } = this.props;
		return (
			<div className="playing-main">
				{currentQuestion < questions.length ? (
					<Question
						key={questions[currentQuestion].id}
						question={questions[currentQuestion].question}
						option1={questions[currentQuestion].option1}
						option2={questions[currentQuestion].option2}
						option3={questions[currentQuestion].option3}
						option4={questions[currentQuestion].option4}
						correctAnswer={this.correctAnswer}
						correctOption={questions[currentQuestion].correctOption}
						onResponse={this.onResponse}
					/>
				) : (
					<div className="result-main">
						<h1 className="result-message">Well Done !</h1>
						<hr />
						<div className="score-img">
							<img src={ResultAstra} alt="" />
							<div className="score">
								<h2>You're score is</h2>
								<h1>
									{score}
									{"/"}
									<span className="total-score">
										{questions.length}
									</span>
								</h1>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Playing;
