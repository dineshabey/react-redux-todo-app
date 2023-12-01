import { CREATE_TODO, DELETE_TODO } from "../action/todoActions";


export function todoReducer(state = [], actions) {

    switch (actions.type) {
        case CREATE_TODO:
            return [
                ...state, actions.payload
            ];//update state
        case 'UPDATE_TODO':
            return; //update state
        case DELETE_TODO:
            return state.filter(item => item.id != actions.payload); //update state
        case 'CHAGE_STATUS_TODO':
            return; //update state

        default:
            return state; //state
    }

}