import React, { Component } from "react";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";
import CreateMessage from "./createMessage";

class Messages extends Component {

    componentDidMount() {
        const theId = this.props.match.params.channel_id;
        setInterval(function () { channelStore.getChannelsById(theId); }, 2000);
;
    }

    componentDidUpdate(prevProps) {
        const theId = this.props.match.params.channel_id;

        if(theId !== prevProps.match.params.channel_id) {
            setInterval(function() {
              channelStore.getChannelsById(theId);
            }, 500);
        }
    }

    render() { 
        const msgs = channelStore.messages.map(message => (
          <div key={message.id}>
            <p>Name: {message.username}</p>
            <p>Message: {message.message}</p>
            <p>time: {message.timestamp}</p>
          </div>
        ));
          
       
        
        return <div>
            {msgs}
            {<CreateMessage theID={this.props.match.params.channel_id} />}
          </div>;
    }
}
 
export default observer(Messages);