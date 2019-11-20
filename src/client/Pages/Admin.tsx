import * as React from 'react';
import { Calendar } from 'react-calendar/dist/entry';
import { IEvents } from './Events';
import { json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import Swal from 'sweetalert2';

class Admin extends React.Component<IAdminProps, IAdminState> {
	constructor(props: IAdminProps) {
		super(props);
		this.state = {
			date: new Date,
			events: [],
			event_name: '',
			description: '',
			isDisabled: false
		};
	}

	async handleSubmit() {
		event.preventDefault();
		let newEvent = {
			name: this.state.event_name,
			description: this.state.description,
			date: this.state.date
		};
		try {
			let results = await json(`/api/events`, 'POST', newEvent);
			if (results === "event saved") {
				Swal.fire({
					position: 'top-end',
					type: 'success',
					title: 'Your work has been saved',
					showConfirmButton: false,
					timer: 1500
				}).then(result => {
					if (result.dismiss === Swal.DismissReason.timer) {
						this.props.history.push('/');
					}
				})
			}
		} catch (error) {
			console.log(error);
		}
	}

	onChange = (date: Date) => this.setState({ date });


	

	async componentDidMount() {
		try {
			let events = await json(`/api/events`);
			this.setState({ events });
			if (localStorage.getItem('role') !== 'guest') {
				this.props.history.push('/login');
			}
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<section className="row">
				<article className="col-12 d-flex justify-content-center">
					<form className="form-group border shadow border-dark rounded p-3">
						<h1 className="text-center">Create an Event</h1>
						<Calendar onChange={this.onChange} value={this.state.date} />
						<label className="mt-2">Event Title:</label>
						<input type="text" className="form-control" value={this.state.event_name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ event_name: e.target.value })} />
						<label className="mt-2">Event Description:</label>
						<textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value })}></textarea>
						<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary btn-block mt-2" disabled={this.state.isDisabled}>
							Submit
						</button>
					</form>
				</article>
				<div className="col">
					{this.state.events.map(evnt => (
						<div className="card border border-dark m-2" key={`event-card-admin${evnt.id}`}>
							<div className="card-body text-center">
								<h3 className="card-title text-center">{evnt.event_name}</h3>
								<p className="card-text text-center">Event Date: {moment(evnt.date).format('MMMM Do YYYY')}</p>
								<p className="card-text text-center">Event Description: {evnt.description}</p>
								<div className="d-flex justify-content-around">
									<Link to={`/edit/${evnt.id}`} className="btn btn-success">
										Edit
									</Link>
									<button
										onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
											event.preventDefault();
											try {
												Swal.fire({
													title: 'Are you sure?',
													text: "You won't be able to revert this!",
													type: 'warning',
													showCancelButton: true,
													confirmButtonColor: '#3085d6',
													cancelButtonColor: '#d33',
													confirmButtonText: 'Yes, delete it!'
												}).then((result) => {
													if (result.value) {
														json(`/api/events/${evnt.id}`, 'DELETE');
														Swal.fire(
															'Deleted!',
															'Your event has been deleted.',
															'success'
														)
													}
												}).then(() => {
													if (true) {
														this.props.history.push('/');
													}
												})
											} catch (error) {
												console.log(error);
											}
										}}
										className="btn btn-danger" disabled={this.state.isDisabled}>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export interface ICategories {
	id: number;
	name: string;
}

export interface IAdminProps extends RouteComponentProps<{ id: string }> { }

export interface IAdminState {
	date: Date;
	events: Array<IEvents>;
	event_name: string;
	description: string;
	isDisabled: boolean;
}

export default Admin;
