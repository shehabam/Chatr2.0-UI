import React, { Component } from "react";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";


class CreateMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //  componentDidMount() {
        // const theId = this.props.match.params.channel_id;
    //     channelStore.getChannelsById(theId);
    // }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const theId = this.props.theID;

        channelStore.createMessages(theId, { "message": this.state.value });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Message:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default observer(CreateMessage);