import React, { Component } from 'react';

class AddToDoTask extends Component {

    state = {
        toDoText: ""
    }

    changeTaskvalue = (event) => {
        this.setState({ 
            toDoText: event.target.value
        });
    }

    submitTaskHandler = (event) => {
        event.preventDefault();
        this.props.changeToDoState(this.state.toDoText);

        this.setState({ toDoText: '' });
    }

    render() {
        return (
            <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <form onSubmit={this.submitTaskHandler}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Task" value={this.state.toDoText} onChange={this.changeTaskvalue}/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddToDoTask;