import * as React from 'react';
import { ICategories } from './Admin';
import { IEvents } from './Events';
import { RouteComponentProps } from 'react-router';
import { json } from '../utilities/api';
import Swal from 'sweetalert2';



class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            date: new Date(),
            events: [],
            categories: [],
            categoryId: '',
            event_name: '',
            description: ''
        }
    }


    async componentDidMount() {
        try {
            let [events]: any = await json(`/api/events/${this.props.match.params.id}`);
            this.setState({
                event_name: events.event_name,
                description: events.description
            })
            console.log(this.state.event_name);
            console.log(this.state.description);
        } catch (error) {
            console.log(error);
        }
    }


    async handleSubmit() {
        event.preventDefault();
        let updatedEvent = {
            event_name: this.state.event_name,
            description: this.state.description
        }
        try {
            let results = await json(`/api/events/${this.props.match.params.id}`, "PUT", updatedEvent);
           
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

    render() {
        return (
                <section className="row">
                    <article className="col-12 d-flex justify-content-center">
                        <form className="form-group border shadow border-dark rounded p-3">
                            <h1 className="text-center">Edit This Event</h1>
                            <label className="mt-2">Event Title:</label>
                            <input type="text" className="form-control" value={this.state.event_name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ event_name: e.target.value })} />
                            <label className="mt-2">Event Description:</label>
                            <textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value })}></textarea>
                            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary btn-block mt-2">Submit</button>
                        </form>
                    </article>
                </section>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { }
interface IEditState {
    date: Date;
    categories: Array<ICategories>;
    categoryId: string;
    event_name: string;
    description: string;
    events: Array<IEvents>;
 }



export default Edit;