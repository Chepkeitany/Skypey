import _ from "lodash";
import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

export default function messages (state = getMessages(10), action) {
    switch(action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const activeUserMessages = state[userId];
            // Get the keys from messages, pop the last value
            // increment by 1 and convert to a Number(+)
            const number = +_.keys(activeUserMessages).pop() + 1;

            return {
                    ...state,
                    [userId]: {
                        ...activeUserMessages,
                        [number]: {
                            number,
                            text: message,
                            is_user_msg: true
                        }
                    }
            }
        default:
            return state;
    }
}