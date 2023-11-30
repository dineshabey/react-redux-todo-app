import { type } from "@testing-library/user-event/dist/type";

export default function userReducer(state = [], action) {
    switch (action, type) {


        default:
            return state;
    }
}