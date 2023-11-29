export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'REMOVE_TODO';


//Action creator
export function createTodo(id, task, dateTime, desc) {
    return {
        type: CREATE_TODO,
        payload: {
            id,
            task,
            dateTime,
            desc,
            status: 'notStarted',
        },
    }
}


export function deleteTOdo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}