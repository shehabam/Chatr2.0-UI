import React from "react";
import { decorate, observable, computed } from "mobx";
import axios from "axios";
import authStore from "./authStore";
import { observer } from "mobx-react";

const instance = axios.create({
    baseURL: "http://192.168.100.54"
});

class ChannelStore {
    constructor() {
        this.channels = [];
        this.messages = [];
    }

    getChannels() {
        return instance
        .get("/channels/")
        .then(res => res.data)
        .then(channels => this.channels = channels)
    }
    createChannels(value) {
        return instance
            .post("/channels/create/", value)
            .then(res => res.data)

            .then(channel => this.channels.push(channel))
    }
    getChannelsById(the_id) {
        return instance
            .get("/channels/" + the_id)
            .then(res => res.data)
            .then(messages => this.messages = messages)
    }
    
}
decorate(ChannelStore, {
    channels: observable,
    messages: observable
});

const channelStore = new ChannelStore();
channelStore.getChannels();
export default channelStore;
