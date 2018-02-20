import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

export class AddCommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newComments: {}
        };
    }
    // addComments
    addComments(event) {
        var today = new Date();
        var hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
        var am_pm = today.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
        date = hours + ":" + minutes + ":" + seconds;

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " / " + hours + ":" + minutes + ":" + seconds + " " + am_pm;
        this.setState({
            newComments: {
                id: uuid.v4(),
                name: this.refs.name.value,
                dec: this.refs.dec.value,
                date: date
            }
        }, function () {
            this.props.addComments(this.state.newComments);
            this.refs.name.value = '';
            this.refs.dec.value = '';
            // console.log(this.state.newComments);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addComments.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" ref="name" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Add your comment here" ref="dec" required/>
                    </div>
                    <div className="clearfix"></div>
                    <button type="submit" className="btn btn-primary">Add Comments</button>
                </form>
            </div>
        )
    }
}

AddCommentForm.propTypes = {
    addComments: PropTypes.func
};