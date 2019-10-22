import * as React from 'react';
import { json, SetAccessToken } from '../utilities/api';
import { RouteComponentProps } from 'react-router';

class Login extends React.Component<ILoginProps, ILoginState> {

	constructor(props: ILoginProps) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	async handleSubmit() {
		event.preventDefault();
		try {
			let result = await json('/auth/login', 'POST', {
				username: this.state.username,
				password: this.state.password
			});
			if (result) {
				SetAccessToken(result.token, {userid: result.userid, role: result.role});
				if(result.role === 'admin') {
					this.props.history.push('/admin');
				} else {
					this.props.history.push('/');
				}
			} else{
				alert("Invalid Credendials")
			}
		} catch (error) {
			console.log(error)
		}
	}



	render() {
		return (
			<section className="row">
				<article className="col">
					<form className="form-group border border-dark rounded p-2">
						<h1 className="text-center">Login</h1>
						<label>Username:</label>
						<input type="text" value={this.state.username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {username: e.target.value} )} className="form-control" />
						<label className="mt-1">Password:</label>
						<input type="password" value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState( {password: e.target.value} )} className="form-control" />
						<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary mt-2">Login</button>
					</form>
				</article>
			</section>
		);
	}
}

export interface ILoginProps extends RouteComponentProps {}

export interface ILoginState {
	username: string;
	password: string;
}

export default Login;
