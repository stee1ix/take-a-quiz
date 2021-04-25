import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Login from './pages/login/login.component';
import Logout from './pages/logout/logout.component';
import Profile from './pages/profile/profile.component';
import Register from './pages/register/register.component';
import Selection from './pages/selection/selection.component';

const initState = {
	isSignedIn: false,
	user: {
		username: '',
		attempted: 0,
		total: 0,
		id: '',
	},
};

class App extends React.Component {
	constructor() {
		super();

		this.state = initState;
	}

	loadUser = (user) => {
		this.setState({
			isSignedIn: true,
			user: {
				username: user.username,
				attempted: user.attempted,
				total: user.total,
				id: user.id,
			},
		});
	};

	logout = () => {
		this.setState(initState);
	};

	profileImgNo = Math.floor(Math.random() * 12 + 1);

	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route exact path="/login">
						{this.state.isSignedIn ? (
							<Redirect exact to="/selection" />
						) : (
							<Login
								loadUser={this.loadUser}
								routeChange={this.routeChange}
							/>
						)}
					</Route>
					<Route exact path="/register">
						{this.state.isSignedIn ? (
							<Redirect to="/selection" />
						) : (
							<Register
								loadUser={this.loadUser}
								routeChange={this.routeChange}
							/>
						)}
					</Route>
					<Route path="/selection">
						<Selection
							username={this.state.user.username}
							id={this.state.user.id}
							isSignedIn={this.state.isSignedIn}
							profileImgNo={this.profileImgNo}
						/>
					</Route>
					<Route path="/profile">
						<Profile
							id={this.state.user.id}
							profileImgNo={this.profileImgNo}
						/>
					</Route>
					<Route path="/logout">
						<Logout logout={this.logout} />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
