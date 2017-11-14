import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


class Home extends React.Component {
    
    //   constructor() {
    //     super();
    
    //     this.state = {
    //         todo:['Walk','Eat','Travel'],
    //         data:''
    //     }  

    //     store.subscribe( (todo,data) => {
    //         this.setState({
    //             todo: store.getState().todo,
    //             data: store.getState().data
    //         })
    //     })
    
        // this.changeInput = this.changeInput.bind(this)
        // this.add= this.add.bind(this)
        // this.remove = this.remove.bind(this)
//    } 
    
    // changeInput(e) {
    //   this.setState({
    //       data: e.target.value
    //   })
    // }
    
    // changeInput(e) {
    //     store.dispatch({
    //         type: 'CHANGE',
    //         data: e.target.value
    //     })
    // }

    // changeInput(e) {
    //     store.dispatch(change_input(e))
    // }


    // add() {
    //   this.setState({
    //     todo:this.state.todo.concat(this.state.value),
    //     value:''
    //   }) 
    // }

    // add(todo) {
    //     store.dispatch({
    //         type: 'ADD_TO_DO',
    //         todo
    //     })
    // }

    // add(todo) {
    //     store.dispatch(add_todo(todo))
    // }

    // remove(todo,item) {
    //     this.setState({
    //        todo:this.state.todo.filter( item => todo !== item)
    //     })    
    // }

    // remove(todo) {
    //     store.dispatch({
    //         type:'REMOVE_FROM_TODO',
    //         todo
    //     })
    // }


    // remove(todo) {
    //     store.dispatch(remove_todo(todo))
    // }
    
      render() {
        return (
          <div >
            <TodoInput changeInput={this.props.changeInput} data={this.props.data} add={this.props.add}/>
            <TodoList todo={this.props.todo} remove={this.props.remove}/>
          </div>
        );
      }
    }

    
    export default  (Home);