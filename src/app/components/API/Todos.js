import React from "react";
import PropTypes from "prop-types";

import {TodoItem} from './TodoItem';

export class Todos extends React.Component {
    /**
     * deleteTodos
     * @param id
     */
    deleteTodo(id) {
        this.props.onDelete(id);
    }

    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.title} todo={todo}/>
                );
            });
        }
        return (
            <div className="col-xs-6">
                <h3>API TODO List</h3>
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
    onDelete: PropTypes.func
};