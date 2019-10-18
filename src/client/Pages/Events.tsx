import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Calendar from '../Component/Calendar';

class Events extends React.Component<IEventsProps, IEventsState> {
    constructor(props: IEventsProps) {
        super(props);
        this.state = {
            events: []
        }
    }

    async componentDidMount() {
        try {
            let results = await fetch(`/api/events`);
            let events = await results.json();
            this.setState({ events })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <main className="container">
                <section className="row">
                    <article className="col">
                        <h1 className="text-center">Upcoming Events</h1>
                        {this.state.events.map(event => (
                            <div key={event.id} className="card border border-dark m-2">
                                <div className="card-body">
                                    <h3 className="card-title text-center">{event.name}</h3>
                                    <p className="badge badge-pill badge-dark">{event.category}</p>
                                    <p className="card-text text-center">{event.description}</p>
                                    <p className="card-text">{event._created}</p>
                                    <p className="card-text"></p>
                                    <p className="text-center">Who is going:</p>
                                    <div>

                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-around">
                                    <button className="btn btn-success">Going</button>
                                    <button className="btn btn-danger">Not going</button>
                                </div>
                            </div>
                        ))}
                    </article>
                </section>
            </main>


        )
    }
}

export interface IEvents {
    id: number;
    date: Date;
    name: string;
    category: string;
    description: string;
    _created: Date;
}

export interface IEventsProps { }

export interface IEventsState {
    events: Array<IEvents>;
}

export default Events;