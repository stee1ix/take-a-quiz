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
			},
		});
	};

	logout = () => {
		this.setState(initState);
	};

	// registerUser = ({ username, password }) => {
	// 	return new Promise((res, rej) => {
	// 		Users.push({
	// 			username: username,
	// 			password: password,
	// 			attempted: 0,
	// 			total: 0,
	// 		});
	// 		console.log(Users);
	// 		res({
	// 			username: username,
	// 			password: password,
	// 			attempted: 0,
	// 			total: 0,
	// 		});
	// 	});
	// };

	render() {
		console.log(this.state);
		return (
			<div className="app">
				<Switch>
					<Route exact path="/" component={Homepage} />
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
							openQuiz={this.openQuiz}
							isSignedIn={this.state.isSignedIn}
						/>
					</Route>
					<Route path="/profile">
						<Profile user={this.state.user} />
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
