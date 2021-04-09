import React from "react";
import "./homepage.style.css";
import HomePageNavBar from "../../components/home-navbar/home-navbar.component";
import HomeHeader from "../../components/home-header/home-header.component";
import Footer from "../../components/footer/footer.component";

class Homepage extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="homepage-main">
				<HomePageNavBar />
				<HomeHeader />
				<Footer />
			</div>
		);
	}
}

export default Homepage;
