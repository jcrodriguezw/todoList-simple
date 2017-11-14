import React from 'react'
import {connect} from 'react-redux'
import { add_todo, change_input} from '../actionsCreator'


const TodoInput = props => {

        return(
            <div>
                <h2> TodoList</h2>
                <hr/>
                <input onChange={ props.changeInput} data={props.data}/>
                <button onClick={props.add}> Add + </button>
               {props.data}
            </div>
        )
      }

      const mapStateToProps = state => {
        return{
            todo: state.todo
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            add(todo) {
                dispatch(add_todo(todo))
            },

            changeInput(e) {
                dispatch(change_input(e))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (TodoInput);