import { generateUser } from "../static-data";
// userReducer that handles only user state
export default function user(state = generateUser(), action) {
    return state;
}