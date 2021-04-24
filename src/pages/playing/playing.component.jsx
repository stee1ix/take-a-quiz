import React from 'react';
import './playing.style.css';
import Question from '../../components/question/question.component';
import Result from '../../components/result/result.component';

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
		const { questions, id } = this.props;
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
					<Result score={score} id={id} questions={questions} />
				)}
			</div>
		);
	}
}

export default Playing;
