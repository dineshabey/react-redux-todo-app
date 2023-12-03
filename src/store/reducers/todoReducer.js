
import * as Actions from "../action/todoActions"; 

const initialState = [];

export function todoReducer(state = initialState, actions) {

    switch (actions.type) {
        case Actions.CREATE_TODO:
            return [
                ...state, actions.payload
            ];//update state
        case 'UPDATE_TODO':
            return; //update state
        case Actions.DELETE_TODO:
            return state.filter(item => item.id != actions.payload); //update state
        case 'CHAGE_STATUS_TODO':
            return; //update state

        default:
            return state; //state
    }

}