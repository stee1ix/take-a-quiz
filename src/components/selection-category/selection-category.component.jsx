import React from "react";
import DATA from "../../data";
import Playing from "../../pages/playing/playing.component";
import Group from "../selection-group/selection-group.component";
import "./selection-category.style.css";

class SelectionCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: DATA,
			isOn: false,
			questions: [],
		};
	}

	openQuiz = (questions) => {
		this.setState({ isOn: true, questions: questions });
	};

	render() {
		console.log(this.state.questions);
		const { groups } = this.state;
		return (
			<div className="quiz-main">
				{!this.state.isOn ? (
					<div className="selection-category-main">
						{groups.map(({ id, ...otherGroupProps }) => (
							<Group
								openQuiz={this.openQuiz}
								isSignedIn={this.props.isSignedIn}
								key={id}
								{...otherGroupProps}
							/>
						))}
					</div>
				) : (
					<Playing questions={this.state.questions} />
				)}
			</div>
		);
	}
}

export default SelectionCategory;
