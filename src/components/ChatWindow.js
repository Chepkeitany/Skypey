import React from "react";
import store from "../store";
import Header from "../components/Header";


const ChatWindow = ({ activeUserId }) => {
    // Fetch the entire state
    const state = store.getState();
    // Fetch user from contacts list
    const activeUser = state.contacts[activeUserId];
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
        </div>
    );
};

export default ChatWindow;