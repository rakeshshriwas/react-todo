import React, { Component } from 'react';


class ToDoListItem extends Component {

    state = {
        isEditing: false
    }

    toggleEditTask = () => {
        this.setState({ 
            isEditing: !this.state.isEditing 
        })
    }
   
    toggleTask = () => {
        this.props.taskListToggle(this.props.index);
    }

    deleteTask = () => {
        this.props.taskDelete(this.props.index);
    }

    editTaskHandler = (event) => {
        event.preventDefault();

        this.props.editTodoTask(this.props.index,  this.newText.value );
        this.toggleEditTask();
    }

    render() {
        // dis structure od props 
        const { taskList } = this.props;

        if (this.state.isEditing) {
            return (
                <form onSubmit={this.editTaskHandler}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Edit Task" defaultValue={taskList.taskName} ref={ editText =>{this.newText= editText;}}/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Update</button>
                            <button className="btn btn-success" onClick={this.toggleEditTask}>Cancel</button>
                        </div>
                    </div>
                </form>
            )
        }
        return ( 
            <li className={taskList.completed ? "completed" + " list-group-item" : "list-group-item"}>
                <button style={{float: 'left', marginRight: '15px'}} onClick={this.deleteTask} type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <span onClick={this.toggleTask} >{taskList.taskName}</span>
                <button  style={{float: 'right'}} onClick={this.toggleEditTask}>Edit</button>
            </li>
        );
    }
}
 
export default ToDoListItem;