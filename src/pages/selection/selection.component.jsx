import React from "react";
import SelectionCategory from "../../components/selection-category/selection-category.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import "./selection.style.css";
import HomePageNavBar from "../../components/home-navbar/home-navbar.component";

const Selection = ({ username }) => {
	return (
		<div className="selection-main">
			{username ? (
				<Navbar username="stee1ix" />
			) : (
				<HomePageNavBar selection />
			)}

			<SelectionCategory />
			<Footer />
		</div>
	);
};

export default Selection;
