//Action creator
export function createTodo(id, task, dateTime, desc) {
    return {
      type: "CREATE_TODO",
      payload: {
        id,
        task,
        dateTime,
        desc,
        status:'notStarted',
      },
    }
  }