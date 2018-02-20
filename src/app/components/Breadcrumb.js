import React from "react";
import PropTypes from "prop-types";

export class Breadcrumb extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li>{this.props.name}</li>
            </ol>
        );
    }
}

Breadcrumb.propTypes = {
    age: PropTypes.string
};
