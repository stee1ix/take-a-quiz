import React from 'react';
import './result.style.css';
import ResultAstra from '../../assets/result-astra.jpg';

class Result extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<div className="result-main">
				<h1 className="result-message">Well Done !</h1>
				<hr />
				<div className="score-img">
					<img src={ResultAstra} alt="" />
					<div className="score">
						<h2>You're score is</h2>
						<h1>
							{this.props.score}
							{'/'}
							<span className="total-score">
								{this.props.questions.length}
							</span>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Result;
