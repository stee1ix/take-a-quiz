import React from "react";
import "./playing.style.css";
import DATA from "../../data";
import Question from "../../components/question/question.component";

const initState = {
	finished: false,
	score: null,
};

class Playing extends React.Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	correctAnswer = () => {
		this.setState({ score: this.state.score + 1 });
	};

	render() {
		return (
			<div className="playing-main">
				{this.state.finished ? <div></div> : null}
			</div>
		);
	}
}

export default Playing;
