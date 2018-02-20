import React from "react";
import PropTypes from "prop-types";

class Commentslist extends React.Component {
    render() {
        // console.log(this.props.comments.now);
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">{this.props.comments.name}
                        <div className="pull-right">{this.props.comments.date}</div>
                    </div>
                    <div className="panel-body">
                        {this.props.comments.dec}
                    </div>
                </div>
            </div>
        )
    }
}

Commentslist.propTypes = {
    onView: PropTypes.func
};

export default Commentslist;