import * as React from 'react';

class Login extends React.Component<ILoginProps, ILoginState> {
	render() {
		return (
			<section className="row">
				<article className="col">
					<form className="form-group border border-dark rounded p-2">
						<h1 className="text-center">Login</h1>
						<label>Username:</label>
						<input type="text" className="form-control" />
						<label className="mt-1">Password:</label>
						<input type="password" className="form-control" />
						<button className="btn btn-primary mt-2">Login</button>
					</form>
				</article>
			</section>
		);
	}
}

export interface ILoginProps {}

export interface ILoginState {}

export default Login;
