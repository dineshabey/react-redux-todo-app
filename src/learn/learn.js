//TODO List

const todos = [
    {
        id: '01',
        task: 'Learn React',
        dateTime: '2023/11/29 20:30',
        desc: 'Learn React with REDUX',
        status: 'notStarted',
    },
    {
        id: '02',
        task: 'Learn React',
        dateTime: '2023/11/29 20:30',
        desc: 'Learn React with REDUX',
        status: 'notStarted',
    },

];

//Define the actions

/* ----------------
01.create

    type:create_todo
    payload: {
            id: '02',
            task: 'Learn React',
            dateTime: '2023/11/29 20:30',
            desc: 'Learn React with REDUX',
            status: 'notStarted',
        },


02.edit / update

    type:update_todo
    payload: {
        id: '02',
        <feild>:<newValue>
    }

03.remove

    type:remove_todo
    payload: {
        id: '02',
    }

04.status change

    type:status_change_todo
    payload: {
        id: '02',
        status: 'changed
    }

## reducer design

    if(action is create_todo){
        todo.push(action.payload);
    } else if(action is update_todo){
        finde and update todo
    } else if(action is remove_todo){
        find and remove todo by action.payload
    } else if(action is change_status_todo){
        find and update todo status by action.payload
    }

*/

