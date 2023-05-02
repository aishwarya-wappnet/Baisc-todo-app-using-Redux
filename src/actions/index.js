export const addTodo = (data) => {
    return  {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO",
    }
}

export const editTodoItem = ({id, data}) => {
    console.log(data);
    return {
        type: "UPDATE_TODO",
        payload: {
            id: id,
            data
        }
    }
}