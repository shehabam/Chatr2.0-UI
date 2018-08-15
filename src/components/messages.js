import React, { Component } from "react";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";

class Messages extends Component {

    componentDidMount() {
        const theId = this.props.match.params.channel_id;
        channelStore.getChannelsById(theId);
    }

    componentDidUpdate(prevProps) {
        const theId = this.props.match.params.channel_id;

        if(theId !== prevProps.match.params.channel_id) {
            channelStore.getChannelsById(theId);
        }
    }

    render() { 
        const msgs = channelStore.messages.map(message => (
            <div key={message.id}>
                <p>Name: {message.username}</p>
                <p>Message: {message.message}</p>
            </div>
        ));
        
        return (
            <div>
                {msgs}
            </div>
        );
    }
}
 
export default observer(Messages);