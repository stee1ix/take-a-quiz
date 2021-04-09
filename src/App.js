import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import Profile from "./pages/profile/profile.component";
import Register from "./pages/register/register.component";
import Selection from "./pages/selection/selection.component";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/selection" component={Selection} />
				<Route path="/profile" component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
