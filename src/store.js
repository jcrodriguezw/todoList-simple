import { createStore , applyMiddleware} from 'redux'

const reducer = (state, action) => {

    if(action.type === 'CHANGE') {
        return{
            ...state,
            data: action.data
        }
    }else
    if(action.type === "ADD_TO_DO") {
        return {
            ...state,
            todo: state.todo.concat(state.data),
            data:""
        }
    } else if(action.type === 'REMOVE_FROM_TODO') {
        return{
            ...state,
            todo: state.todo.filter( todo => action.todo !== todo)
        }
    }
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }



export default createStore(reducer, {  data: '', todo: []}, applyMiddleware(logger))