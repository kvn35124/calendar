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
            <Calendar onChange={this.onChange} value={this.state.date}/>
        )
    }
}

export interface IAdminProps { }

export interface IAdminState {
    date: Date;
}

export default Admin;