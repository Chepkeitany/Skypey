import user from "./user";
import contacts from "./contacts";
import messages from "./messages";
import activeUserId from "./activeUserId";
import typing from "./typing";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user,
    messages,
    contacts,
    activeUserId,
    typing
});

export default rootReducer;