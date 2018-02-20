import React from "react";
import {browserHistory} from "react-router";

export class RowDetails extends React.Component {
    onNavigateHome() {
        browserHistory.push("/form");
    }

    render() {
        return (
            <div>
                <h3>Student Details</h3>
                <hr/>
                <p>Name: {this.props.params.name}</p>
                <p>Age: {this.props.params.age}</p>
                <p>Group: {this.props.params.group}</p>
                {/*<p>Name: {this.props.contacts.name}</p>*/}
                {/*<p>Age: {this.props.contacts.age}</p>*/}
                {/*<p>Group: {this.props.contacts.group}</p>*/}
                <hr/>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Back</button>
            </div>
        )
    };
}