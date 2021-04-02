import React from "react";
import DATA from "../../data";
import Group from "../selection-group/selection-group.component";
import "./selection-category.style.css";

class SelectionCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: DATA,
		};
	}
	render() {
		const { groups } = this.state;
		return (
			<div className="selection-category-main">
				{groups.map(({ id, ...otherGroupProps }) => (
					<Group key={id} {...otherGroupProps} />
				))}
			</div>
		);
	}
}

export default SelectionCategory;
