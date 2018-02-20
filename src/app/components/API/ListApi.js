import React from "react";
import PropTypes from "prop-types";

export class ListApi extends React.Component {
    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <ListApiItems key={todo.name} todo={todo}/>
                );
            });
        }
        return (
            <div className="Todos">
                <h3>Users Name List</h3>
                {todoItems}
            </div>
        );
    }
}

ListApi.propTypes = {
    todos: PropTypes.array
};