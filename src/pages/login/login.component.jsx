import React from 'react';
import Credential from '../../components/credential/credential.component';
import './login.style.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange = event => {
		this.setState({ username: event.target.value });
	};

	handlePasswordChange = event => {
		this.setState({ password: event.target.value });
	};

	handleSubmit = event => {
		fetch('https://take-a-quiz-api.herokuapp.com/auth/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
		})
			.then(response => response.json())
			.then(data => {
				this.props.loadUser({
					username: data.username,
					attempted: data.attempted,
					total: data.total,
					id: data._id,
				});
			});

		event.preventDefault();
	};

	render() {
		return (
			<div className="login-main">
				<div className="login-title">
					<h1 className="login">Login</h1>
					<h3 className="dive-deep">
						Dive deep into the sea of quizzes
					</h3>
				</div>
				<form>
					<Credential
						name="Username"
						type="text"
						onChange={this.handleUsernameChange}
					/>
					<Credential
						name="Password"
						type="password"
						onChange={this.handlePasswordChange}
					/>
					<button
						onClick={this.handleSubmit}
						type="submit"
						className="login-button">
						LOGIN
					</button>
				</form>
				<h4 className="login-option">
					Don't have an account!
					<Link to="./register">
						<span style={{ color: '#13c7ee' }}>Register</span>
					</Link>
				</h4>
			</div>
		);
	}
}

export default Login;
