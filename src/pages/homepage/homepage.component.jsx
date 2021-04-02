import React from "react";
import "./homepage.style.css";
import NavBar from "../../components/navbar/navbar.component";
import HomeHeader from "../../components/home-header/home-header.component";
import Footer from "../../components/footer/footer.component";

class Homepage extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div>
				<NavBar />
				<HomeHeader />
				<Footer />
			</div>
		);
	}
}

export default Homepage;
