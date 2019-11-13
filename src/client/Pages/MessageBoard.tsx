import * as React from 'react';
import { json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';
import * as moment from 'moment';

class Message extends React.Component<IMessageProps, IMessageState> {

	constructor(props: IMessageProps) {
		super(props);
		this.state = {
			id: 0,
			name: '',
			date: new Date,
			description: '',
			_created: new Date
		}
	}


	handlePost() {
		event.preventDefault();
		try {

		} catch (error) {
			console.log(error);
		}
	}



	async componentDidMount() {
		try {
			let [events]: any = await json(`/api/events/${this.props.match.params.id}`);
			this.setState({
				id: events.id,
				name: events.name,
				date: events.date,
				description: events.description,
				_created: events._created
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<section className="row">
				<article className="col">
					<h1 className="text-center">Message Board</h1>
					<div key={this.state.id} className="card border border-dark m-2">
						<div className="card-body text-center">
							<h3 className="card-title ">{this.state.name}</h3>
							<p className="card-text">Event Date: {moment(this.state.date).format('MMM Do YYYY')}</p>
							<p className="card-text ">Event Description: {this.state.description}</p>
							<p className="card-text">Event Created: {moment(this.state._created).format('MMMM DD YYYY')}</p>
						</div>
					</div>
					<form className="border border-dark rounded p-3">
						<h3>Make A Comment</h3>
						<label>Name:</label>
						<input type="text" className="form-control"/>
						<label>Comment</label>
						<textarea name="" id="" cols={5} rows={10} className="form-control"></textarea>
						<button className="btn btn-dark mt-2">Post Comment</button>
					</form>
				</article>
			</section>
		)
	}
}

interface IMessage {
	name: string;
	text: string;
	_created: Date;
}

interface IMessageProps extends RouteComponentProps<{ id: string }> { }
interface IMessageState {
	id: number;
	name: string;
	date: Date;
	description: string;
	_created: Date;
}



export default Message;