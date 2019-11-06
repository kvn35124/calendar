import * as React from 'react';
import { json, SetAccessToken } from '../utilities/api'
import { RouteComponentProps } from 'react-router';

class Register extends React.Component<IRegisterProps, IRegisterState> {
	constructor(props: IRegisterProps) {
		super(props);
		this.state = {
			name: '',
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			role: 'guest'
		};
	}


	async handleSubmit() {
		event.preventDefault();
		try {
			let newUser = {
				name: this.state.name,
				email: this.state.email,
				username: this.state.username,
				password: this.state.password,
				role: this.state.role
			};
			let result = await json('/auth/register', 'POST', newUser);
			SetAccessToken(result.token, { userid: result.userid, role: result.role });
			this.props.history.push('/');
		} catch (error) {
			console.log(error);
		}
	}

	// passwordMatch() {
	// 	if (this.state.password === '') {
	// 		return <span className="glyphicon glyphicon-remove"></span>
	// 	} else if (this.state.password !== this.state.confirmPassword) {
	// 		return <span className="glyphicon glyphicon-remove"></span>
	// 	} else {
	// 		return <span className="glyphicon glyphicon-ok"></span>
	// 	}
	// }

	render() {
		return (
			<section className="row">
				<article className="col">
					<form className="form-group border border-dark rounded p-3">
						<h1 className="text-center">Register</h1>
						<label>Name:</label>
						<input type="text" placeholder="Required" value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {name: e.target.value} )} className="form-control" />
						<label>Email:</label>
						<input type="text" placeholder="Optional" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {email: e.target.value} )} className="form-control" />
						<label>Username:</label>
						<input type="text" placeholder="Required" value={this.state.username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {username: e.target.value} )} className="form-control" />
						<label>Password:</label>
						<input type="password" placeholder="Required" value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {password: e.target.value} )} className="form-control" />
						{/* <label>Confirm Password:</label>
						<input type="password" placeholder="Required" value={this.state.confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {confirmPassword: e.target.value} )} className="form-control" /> */}
						<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary mt-2">Submit</button>
					</form>
				</article>
			</section>
		);
	}
}

export interface IRegisterProps extends RouteComponentProps {}

export interface IRegisterState {
	name: string;
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
	role: string;
}

export default Register;
