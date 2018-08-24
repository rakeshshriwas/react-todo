import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddToDotask from './AddToDoTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoTask: [
        {
          taskName: "Testing 0",
          completed: true
        },
        {
          taskName: "Testing 1",
          completed: false
        },
        {
          taskName: "Testing 2",
          completed: true
        },
        {
          taskName: "Testing 3",
          completed: true
        }
      ]
    }
  }

  changeToDoState = task => {

    const newToDoTask = this.state.toDoTask.concat({
      taskName: task
    });

    this.setState({ 
      toDoTask: newToDoTask
    })
  }

  // Toggle task index wise
  taskListToggle = (index) => {
    const newTaskState = this.state.toDoTask.map( ( taskState, i ) => {
      if (index === i) {
        return {
          ...taskState,
          completed: !taskState.completed 
        }
      }
      return taskState;
    });

    this.setState({ 
      toDoTask : newTaskState 
    });
  }

  // delete task
  taskDelete = (index) => {
    const newTaskState = this.state.toDoTask.filter( (taskState, i) => {
        if (index === i) {
          return false; 
        }
        return true;
    });

    this.setState({ toDoTask : newTaskState });
  }

  // Edit Todo task

  editTodoTask = (index, newTask) => {
    const newToDoTask = this.state.toDoTask.map( (todo, i) => {
      if (index === i) {
        return {
          ...todo,
          taskName: newTask
        }
      }
      return todo;
    });
    this.setState({ toDoTask: newToDoTask});
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h3 class="text-center"><strong>ToDos</strong></h3>
            <AddToDotask changeToDoState={this.changeToDoState}/>
            <ul className="list-group">
              {this.state.toDoTask.map( (task, index) => {
                return <ToDoListItem editTodoTask={this.editTodoTask} taskListToggle={this.taskListToggle} taskDelete={this.taskDelete} taskList={task} key={index} index={index}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
