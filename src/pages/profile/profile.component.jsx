import React from 'react';
import './profile.style.css';
import Footer from '../../components/footer/footer.component';
import Navbar from '../../components/navbar/navbar.component';
import Stat from '../../components/stat/stat.component';
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

class Profile extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			total: 0,
			attempted: 0,
		};
	}

	async componentDidMount() {
		const response = await fetch(
			'https://take-a-quiz-api.herokuapp.com/getstat',
			{
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					id: this.props.id,
				}),
			}
		);
		const json = await response.json();
		this.setState(json);
	}

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
		const { username, attempted, total } = this.state;
		return (
			<div className="profile-main">
				<Navbar username={username} profile />
				<div className="profile-content">
					<div className="profile-icon">
						<img
							src={this.pictureNumber(this.props.profileImgNo)}
							alt="profile icon"
						/>
						<h3>{username}</h3>
					</div>
					<div className="stats">
						<Stat
							className="attempted"
							title={'Attempted'}
							value={attempted}
						/>
						<Stat
							className="total"
							title={'Total Points'}
							value={total}
						/>
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export default Profile;
