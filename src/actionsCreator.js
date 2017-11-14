const change_input = (e) => {
    return{
        type: 'CHANGE',
        data: e.target.value
    }
}

const add_todo = (todo) => {
    return{
        type: 'ADD_TO_DO',
        todo
    }
}


const remove_todo = (todo) => {
    return{
        type:'REMOVE_FROM_TODO',
        todo
    }
}

export {change_input, add_todo, remove_todo}