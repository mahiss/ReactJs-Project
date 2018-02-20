import React from "react";
import PropTypes from "prop-types";

export class ListApiItems extends React.Component {
    render() {
        return (
            <p>{this.props.todo.name} , {this.props.todo.username}</p>
        );
    }
}

ListApiItems.propTypes = {
    todo: PropTypes.object
};