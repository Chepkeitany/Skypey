import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";

// {contacts} => {contacts: contacts}
const store = createStore(reducer, {contacts});

export default store;