import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import Profile from "./pages/profile/profile.component";
import Register from "./pages/register/register.component";
import Selection from "./pages/selection/selection.component";

const initState = {
	isSignedIn: false,
	user: {
		username: "",
		attempted: null,
		rank: null,
		total: null,
	},
};

class App extends React.Component {
	constructor() {
		super();

		this.state = initState;
	}

	loadUser = (user) => {
		this.setState({
			user: {
				username: user.username,
				attempted: user.attempted,
				rank: user.rank,
				total: user.total,
			},
		});
	};

	routeChange = () => {
		this.setState({
			isSignedIn: true,
		});
	};

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
					<Route path="/register" component={Register} />
					<Route path="/selection">
						{<Selection username={this.state.user.username} />}
					</Route>
					<Route path="/profile">
						{<Profile user={this.state.user} />}
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
