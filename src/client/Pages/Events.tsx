import * as React from 'react';
import * as moment from 'moment';
import { json } from '../utilities/api';


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
								<h3 className="card-title ">{event.name}</h3>
								<p className="badge badge-pill badge-dark">{event.category}</p>
								<p className="card-text">Event Date: {moment(event.date).format('MMM Do YYYY')}</p>
								<p className="card-text ">Event Description: {event.description}</p>
								<p className="card-text">Event Created: {moment(event._created).format('MMMM DD YYYY')}</p>
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
