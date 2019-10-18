import * as React from 'react';
import { Calendar } from 'react-calendar/dist/entry';
import { IEvents } from './Events';
import { json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

class Admin extends React.Component<IAdminProps, IAdminState> {
	constructor(props: IAdminProps) {
		super(props);
		this.state = {
			date: new Date(),
			categories: [],
			categoryId: '',
			events: [],
			name: '',
			description: ''
		};
	}

	async handleSubmit() {
		event.preventDefault();
		let newEvent = {
			name: this.state.name,
			categoryId: this.state.categoryId,
			description: this.state.description,
			date: this.state.date
		};
		try {
			let results = await json(`/api/events`, 'POST', newEvent);
			if (results.ok) {
				this.props.history.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	}

	onChange = (date: Date) => this.setState({ date });

	async componentDidMount() {
		try {
			let results = await fetch(`/api/category`);
			let categories = await results.json();
			let results2 = await fetch(`/api/events`);
			let events = await results2.json();
			this.setState({ categories });
			this.setState({ events });
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
						<input type="text" className="form-control" value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })} />
						<label className="mt-2">Pick Category Type:</label>
						<select className="form-control" value={this.state.categoryId} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ categoryId: e.target.value })}>
							<option value="0">Select Category...</option>
							{this.state.categories.map(category => (
								<option value={category.id} key={`category-option-${category.id}`}>{category.category}</option>
							))}
						</select>
						<label className="mt-2">Event Description:</label>
						<textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value })}></textarea>
						<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary btn-block mt-2">
							Submit
						</button>
					</form>
				</article>
				<div className="col">
					{this.state.events.map(evnt => (
						<div className="card border border-dark m-2" key={`event-card-${evnt.id}`}>
							<div className="card-body">
								<h3 className="card-title text-center">{evnt.name}</h3>
								<p className="card-text text-center">{evnt.description}</p>
								<p className="card-text"></p>
								<p className="card-text"></p>
								<div className="d-flex justify-content-around">
									<Link to={`/edit/${evnt.id}`} className="btn btn-success">
										Edit
									</Link>
									<button
										onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
											event.preventDefault();
											try {
												let results = await json(`/api/events/${evnt.id}`, 'DELETE');
												if (results.ok) {
													this.props.history.push('/');
												}
											} catch (error) {
												console.log(error);
											}
										}}
										className="btn btn-danger">
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
	category: string;
}

export interface IAdminProps extends RouteComponentProps<{ id: string }> {}

export interface IAdminState {
	date: Date;
	categories: Array<ICategories>;
	categoryId: string;
	events: Array<IEvents>;
	name: string;
	description: string;
}

export default Admin;
