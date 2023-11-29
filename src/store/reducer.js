export function reducer(state = [], actions) {

    switch (actions.type) {
        case 'CREATE_TODO':
            return [
                ...state, actions.payload
            ];//update state
        case 'UPDATE_TODO':
            return; //update state
        case 'REMOVE_TODO':
            return; //update state
        case 'CHAGE_STATUS_TODO':
            return; //update state

        default:
            return state; //state
    }

}