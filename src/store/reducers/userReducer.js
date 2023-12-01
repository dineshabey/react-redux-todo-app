import { GET_USER_LIST } from "../action/userAction";

export function userReducer(state = [], action) {
    switch (action.type) {
        case GET_USER_LIST:
            return [...state, action.payload];

        default:
            return state;
    }
}