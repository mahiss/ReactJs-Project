import React from "react";
import {browserHistory} from "react-router";

export class SampleData extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div className="col-xs-12">
                <h3>The Page</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}