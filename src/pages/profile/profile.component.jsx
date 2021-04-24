import React from 'react';
import './profile.style.css';
import Footer from '../../components/footer/footer.component';
import Navbar from '../../components/navbar/navbar.component';
import Stat from '../../components/stat/stat.component';
import profileIcon from '../../assets/001-man.svg';

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
		const response = await fetch('http://localhost:5000/getstat', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: this.props.id,
			}),
		});
		const json = await response.json();
		this.setState(json);
	}

	render() {
		const { username, attempted, total } = this.state;
		return (
			<div className="profile-main">
				<Navbar username={username} profile />
				<div className="profile-content">
					<div className="profile-icon">
						<img src={profileIcon} alt="profile icon" />
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
