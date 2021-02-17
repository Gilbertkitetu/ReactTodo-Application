import React, { Component } from "react";

class TodoList extends Component {
    render() {
        return (
            <div className="TodoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Enter a task"/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default TodoList;