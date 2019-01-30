import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user,
    contacts,
    activeUserId
});

export default rootReducer;