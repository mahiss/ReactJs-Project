import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router";

class Row1 extends React.Component {
    /*
     Delete Contact
     @param id
     */
    deleteContacts(id) {
        this.props.onDelete(id);
    }
    /*
     view Contact
     @param id
     */
    viewContacts(id) {
        this.props.onView(id);
        console.log(this.props.contacts);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        {this.props.contacts.name} | {this.props.contacts.age} | {this.props.contacts.group}

                        <button type="button" className="close" aria-label="Close"
                                onClick={this.deleteContacts.bind(this, this.props.contacts.id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <Link className="pull-right btn-link"
                              to={"/rowdetails/" + this.props.contacts.id + "/" + this.props.contacts.name + "/" + this.props.contacts.age + "/" + this.props.contacts.group }
                              contacts={this.props.contacts}>View</Link>

                        <button type="button" className="pull-right btn-link"
                                onClick={this.viewContacts.bind(this, this.props.contacts.id)}>Console
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

Row1.propTypes = {
    onDelete: PropTypes.func,
    onView: PropTypes.func
};

export default Row1;