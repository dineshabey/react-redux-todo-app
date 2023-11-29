export function reducer(state = [], actions) {

    switch (actions.type) {
        case 'create_todo':
            return; //update state
        case 'update_todo':
            return; //update state
        case 'remove_todo':
            return; //update state
        case 'change_status_todo':
            return; //update state

        default:
            return state; //state
    }


    // if(action is create_todo){
    //     todo.push(action.payload);
    // } else if(action is update_todo){
    //     finde and update todo
    // } else if(action is remove_todo){
    //     find and remove todo by action.payload
    // } else if(action is change_status_todo){
    //     find and update todo status by action.payload
    // }
}