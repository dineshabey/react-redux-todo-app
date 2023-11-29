export function reducer(state = [], actions) {

    switch (actions.type) {
        case 'create_todo':
            return [
                ...state, actions.payload
            ];//update state
        case 'update_todo':
            return; //update state
        case 'remove_todo':
            return; //update state
        case 'change_status_todo':
            return; //update state

        default:
            return state; //state
    }

}