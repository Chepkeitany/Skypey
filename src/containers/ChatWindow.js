import React from "react";
import _ from "lodash";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
    // Fetch the entire state
    const state = store.getState();
    // Fetch user from contacts list
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    const typing = state.typing;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMessages)} />
            <MessageInput value={typing}/>
        </div>
    );
};

export default ChatWindow;