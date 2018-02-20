import React from "react";
import {browserHistory} from "react-router";


export class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div className="col-xs-12">
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id} </p>
                <p>User NAME: {this.props.params.name} </p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}