import * as React from 'react';
import { json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';
import * as moment from 'moment';


class Message extends React.Component<IMessageProps, IMessageState> {

	constructor(props: IMessageProps) {
		super(props);
		this.state = {
			id: 0,
			event_name: '',
			date: new Date,
			description: '',
			event_created: new Date,
			messages: []
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
			let messages: any = await json(`/api/comments/${this.props.match.params.id}`);
			this.setState({
				id: events.id,
				event_name: events.name,
				date: events.date,
				description: events.description,
				event_created: events._created,
				messages
			});
			console.log(messages);
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
							<h3 className="card-title ">{this.state.event_name}</h3>
							<p className="card-text">Event Date: {moment(this.state.date).format('MMM Do YYYY')}</p>
							<p className="card-text ">Event Description: {this.state.description}</p>
							<p className="card-text">Event Created: {moment(this.state.event_created).format('MMMM DD YYYY')}</p>
						</div>
					</div>
					{this.state.messages.map(message => {
						<div className="card border border-dark m-2">
							<div className="card-body text-center">
								{console.log(message._comment)}
								<p className="card-text">{message._comment}</p>
								<p className="card-text">Sent By: {message.user_name}</p>
								<p className="card-text">Message Created: {moment(message.comment_created).format('MMMM DD YYYY')}</p>
							</div>
						</div>
					})}
					<form className="border border-dark rounded p-3">
						<h3>Make A Comment</h3>
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
	user_name: string;
	_comment: string;
	comment_created: Date;
}

interface IMessageProps extends RouteComponentProps<{ id: string }> { }
interface IMessageState {
	id: number;
	event_name: string;
	date: Date;
	description: string;
	event_created: Date;
	messages: Array<IMessage>;

}



export default Message;