import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
			<span className="navbar-brand">Event Master 3000</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
                <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">
						Events
					</NavLink>
                    <NavLink exact to="/login" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">
						Login
					</NavLink>
					<NavLink exact to="/register" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">
						Register
					</NavLink>
					<NavLink exact to="/admin" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">
						Admin
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;
