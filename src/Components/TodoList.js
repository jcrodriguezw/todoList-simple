import React from 'react'
import { connect } from 'react-redux'
import {remove_todo }from '../actionsCreator'

class TodoList extends React.Component {

    render(){
        const list = this.props.todo.map((todo,i) => <li key={i}> {todo} <button onClick={() => this.props.remove(todo)}> Remove </button> </li>)
        return(
            <div>
                <hr/>
                <h2> List </h2>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todo: state.todo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        remove(todo) {
            dispatch(remove_todo(todo))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);