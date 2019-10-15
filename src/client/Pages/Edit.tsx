import * as React from 'react';


class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <h1>Edit Page</h1>
        )
    }
}


interface IEditProps {}
interface IEditState {}



export default Edit;