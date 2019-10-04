import * as React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Calendar from './Component/Calendar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Admin from './Pages/Admin';

class App extends React.Component<IAppProps, IAppState> {



    render() {
        return(
            
            <Router>
                <main className="container">
                    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around mb-2">
                        <Link to="/register">Register</Link>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/admin">Admin</Link>
                    </nav>
                </main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
}

export default App;