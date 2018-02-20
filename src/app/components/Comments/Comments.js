import React from "react";

import {AddCommentForm} from "./AddCommentForm";
import {NewComment} from "./NewComment";

export class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }
    // addComments
    handleAddComments(comment) {
        let comments = this.state.comments;
        comments.push(comment);
        this.setState({comments: comments});
    }
    // ViewComments
    handleViewComments(id) {
        let comments = this.state.comments;
        let item = comments.find(x => x.id === id);
        this.setState({viewCont: item});
    }

    render() {
        return (
            <div className="col-xs-6">
                <NewComment comments={this.state.comments} onView={this.handleViewComments.bind(this)}/>
                <div className="panel panel-default">
                    <div className="panel-heading">Add a Comment</div>
                    <div className="panel-body">
                        <AddCommentForm addComments={this.handleAddComments.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}