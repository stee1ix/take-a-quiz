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
		this.setState(
			{ isOn: true, questions: questions },
			console.log(this.state.questions)
		);
	};

	render() {
		const { groups } = this.state;
		return (
			<div className="quiz-main">
				{!this.state.isOn ? (
					<div className="selection-category-main">
						{groups.map(({ id, ...otherGroupProps }) => (
							<Group
								openQuiz={this.openQuiz}
								key={id}
								{...otherGroupProps}
							/>
						))}
					</div>
				) : null}
			</div>
		);
	}
}

export default SelectionCategory;
