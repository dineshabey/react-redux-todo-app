
import * as Actions from "../action/anotherAction";

const initialState = {};

export function anotherReducer(state = initialState, actions) {

    switch (actions.type) {
        case Actions.SOME_ACTION:
            return state;
        default:
            return state;
    }

}