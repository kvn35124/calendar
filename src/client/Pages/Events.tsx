import * as React from 'react';
import * as moment from 'moment';
import { json } from '../utilities/api';
import { Link } from 'react-router-dom';


class Events extends React.Component<IEventsProps, IEventsState> {
	constructor(props: IEventsProps) {
		super(props);
		this.state = {
			events: []
		};
	}




	async componentDidMount() {
		try {
			let events = await json(`/api/events`);
			this.setState({ events });
			this.state.events.map( async event => {
				if (moment(event.date).isBefore(new Date, 'day')) {
					json(`/api/events/${event.id}`, 'DELETE');
					let events = await json(`/api/events`);
					this.setState({ events });
				} else {
					console.log("No old dates");
				}
			})
		} catch (error) {
			console.log(error);
		}
	}


	render() {
		return (
			<section className="row">
				<article className="col">
					<h1 className="text-center">Upcoming Events</h1>
					{this.state.events.map(event => (
						<div key={event.id} className="card border border-dark m-2">
							<div className="card-body text-center">
								<h3 className="card-title ">{event.event_name}</h3>
								<p className="badge badge-pill badge-dark">{event.category}</p>
								<p className="card-text">Event Date: {moment(event.date).format('MMM Do YYYY')}</p>
								<p className="card-text ">Event Description: {event.description}</p>
								<p className="card-text">Event Created: {moment(event.event_created).format('MMMM DD YYYY')}</p>
								<Link to={`/messages/${event.id}`} className="btn btn-primary">Message Board</Link>
							</div>
						</div>
					))}
				</article>
			</section>
		);
	}
}

export interface IEvents {
	id: number;
	date: Date;
	event_name: string;
	category: string;
	description: string;
	event_created: Date;
}

export interface IEventsProps { }

export interface IEventsState {
	events: Array<IEvents>;
}

export default Events;
