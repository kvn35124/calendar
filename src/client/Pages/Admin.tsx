import * as React from 'react';
import Calendar from 'react-calendar';

class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    handleSubmit() {

    }

    onChange = (date: Date) => this.setState({ date });


    render() {
        return(
            <main className="container">
                <section className="row">
                    <article className="col d-flex justify-content-center">
                        <form className="form-group border shadow border-dark rounded p-3">
                            <h1 className="text-center">Create an Event</h1>
                            <Calendar onChange={this.onChange} value={this.state.date}/>
                            <label>Event Title:</label>
                            <input type="text" className="form-control"/>
                            <label>Event Description:</label>
                            <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </form>
                    </article>
                </section>
            </main>
            
        )
    }
}

export interface IAdminProps { }

export interface IAdminState {
    date: Date;
}

export default Admin;