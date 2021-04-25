import React from 'react';
import './navbar.style.css';
import profileIcon1 from '../../assets/profileIcons/001-man.svg';
import profileIcon2 from '../../assets/profileIcons/002-woman.svg';
import profileIcon3 from '../../assets/profileIcons/003-man-2.svg';
import profileIcon4 from '../../assets/profileIcons/004-man-1.svg';
import profileIcon5 from '../../assets/profileIcons/005-woman-1.svg';
import profileIcon6 from '../../assets/profileIcons/006-woman-2.svg';
import profileIcon7 from '../../assets/profileIcons/007-woman-3.svg';
import profileIcon8 from '../../assets/profileIcons/008-man-3.svg';
import profileIcon9 from '../../assets/profileIcons/009-man-4.svg';
import profileIcon10 from '../../assets/profileIcons/010-man-5.svg';
import profileIcon11 from '../../assets/profileIcons/011-man-6.svg';
import profileIcon12 from '../../assets/profileIcons/012-man-7.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	pictureNumber = (picNumber) => {
		switch (picNumber) {
			case 1:
				return profileIcon1;
			case 2:
				return profileIcon2;
			case 3:
				return profileIcon3;
			case 4:
				return profileIcon4;
			case 5:
				return profileIcon5;
			case 6:
				return profileIcon6;
			case 7:
				return profileIcon7;
			case 8:
				return profileIcon8;
			case 9:
				return profileIcon9;
			case 10:
				return profileIcon10;
			case 11:
				return profileIcon11;
			case 12:
				return profileIcon12;
			default:
				break;
		}
	};

	render() {
		const { username, profile, profileImgNo } = this.props;
		console.log(profileImgNo);
		return (
			<div className="navbar-main">
				<nav className="nav">
					<h2>
						{profile ? (
							<Link to="/selection">Take a Quiz...</Link>
						) : (
							"Let's Do This!"
						)}
					</h2>
					<div className="options">
						<ul>
							<li>
								<Link to="/profile">
									<img
										className={
											profile
												? 'profileIcon hidden'
												: 'profileIcon'
										}
										src={this.pictureNumber(profileImgNo)}
										alt=""
									/>
								</Link>
							</li>
							<li>
								<Link to="/profile">{username}</Link>
							</li>
							<Link to="/logout">
								<li className="logout">Logout</li>
							</Link>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
