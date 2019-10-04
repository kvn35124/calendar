import * as React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Calendar from '../Component/Calendar';

class Home extends React.Component<IHomeProps, IHomeState> {



    render() {
        return(
            <section className="row">
                <article className="col">
                    <h1 className=" d-flex justify-content-center">Family Event Calendar</h1>
                    <Calendar />
                </article>
            </section>
            
        )
    }
}

export interface IHomeProps { }

export interface IHomeState {
}

export default Home;