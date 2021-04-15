import React from "react";
import "./logout.style.css";
import LogoutAstra from "../../assets/logout_astra.jpg";
import Arrow from "../../assets/arrow.svg";
import Footer from "../../components/footer/footer.component";
import { Link } from "react-router-dom";

class Logout extends React.Component {
	componentDidMount() {
		this.props.logout();
	}

	render() {
		return (
			<div className="logout-main">
				<div className="logout-nav">
					<Link to="/">
						<div className="return-button">
							<h3 className="logout-nav-text">Home</h3>
							<img
								className="return-arrow"
								src={Arrow}
								alt="Arrow"
							/>
						</div>
					</Link>
				</div>

				<div className="logout-container">
					<div className="logout-text">
						{"Come back again to play more..."}
					</div>
					<img src={LogoutAstra} alt="LogoutAstra" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Logout;
