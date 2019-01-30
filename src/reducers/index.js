import user from "./user";
import contacts from "./contacts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user,
    contacts
});

export default rootReducer;