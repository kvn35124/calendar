import * as React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Calendar from './Pages/Calendar';

class App extends React.Component<IAppProps, IAppState> {



    render() {
        return(
            
            <Calendar />
        )
    }
}

export interface IAppProps { }

export interface IAppState {
}

export default App;