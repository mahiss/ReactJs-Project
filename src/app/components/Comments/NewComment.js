import React from "react";
import PropTypes from "prop-types";

import Commentslist from "./Commentslist";

export class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            comments: props.comments
        };
    }
    // viewComments
    viewComments(id) {
        this.props.onView(id);
    }

    render() {
        let filteredComments = this.state.comments.filter(
            (comment) => {
                return comment.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <span>
                    {filteredComments.map((comment)=> {
                        return <Commentslist comments={comment} key={comment.id}
                                             onView={this.viewComments.bind(this)}/>
                    })}
                </span>
            </div>
        )
    }
}

NewComment.propTypes = {
    name: PropTypes.string,
    onView: PropTypes.func
};