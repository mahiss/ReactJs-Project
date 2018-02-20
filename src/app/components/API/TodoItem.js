import React from "react";
import PropTypes from "prop-types";

export class TodoItem extends React.Component {
    /**
     * deleteTodos
     * @param id
     */
    deleteTodo(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.todo.title}
                <a href="#" className="close" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>X</a>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onDelete: PropTypes.func
};