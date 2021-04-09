import React from "react";
import "./profile.style.css";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import Stat from "../../components/stat/stat.component";
import profileIcon from "../../assets/001-man.svg";

class Profile extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Navbar username="stee1ix" profile />
				<div className="profile-main">
					<div className="profile-icon">
						<img src={profileIcon} alt="profile icon" />
						<h3>stee1ix</h3>
					</div>
					<div className="stats">
						<Stat
							className="attempted"
							title={"Attempted"}
							value={"5"}
						/>
						<Stat className="rank" title={"Rank"} value={"1"} />
						<Stat
							className="total"
							title={"Total Points"}
							value={"21"}
						/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Profile;
