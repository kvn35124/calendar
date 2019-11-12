import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Events from './Pages/Events';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Edit from './Pages/Edit';
import Navbar from './Component/Navbar';
import Message from './Pages/MessageBoard';

class App extends React.Component<IAppProps, IAppState> {
	render() {
		return (
			<Router>
				<Navbar />
				<main className="container mt-5 pt-3">
					<Switch>
						<Route exact path="/" component={Events} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/edit/:id" component={Edit} />
						<Route exact path="/messages/:id" component={Message} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export interface IAppProps {}

export interface IAppState {}

export default App;
