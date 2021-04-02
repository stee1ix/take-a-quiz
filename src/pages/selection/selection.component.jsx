import React from "react";
import SelectionCategory from "../../components/selection-category/selection-category.component";
import SelectionNav from "../../components/selection-nav/selection-navbar.component";
import Footer from "../../components/footer/footer.component";
import "./selection.style.css";

class Selection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="selection-main">
				<SelectionNav username="stee1ix" />
				<SelectionCategory />
				<Footer />
			</div>
		);
	}
}

export default Selection;
