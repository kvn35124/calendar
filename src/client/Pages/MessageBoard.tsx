import * as React from 'react';

class Message extends React.Component<IMessageProps, IMessageState> {


    render() {
        return(
            <h1>Message Page</h1>
        )
    }
}

interface IMessageProps {}
interface IMessageState {}



export default Message;