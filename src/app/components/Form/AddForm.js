import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

export class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newContacts: {}
        };
    }

    addContact(event) {
        this.setState({
            newContacts: {
                id: uuid.v4(),
                name: this.refs.name.value,
                age: this.refs.age.value,
                group: this.refs.group.value
            }
        }, function () {
            this.props.addContacts(this.state.newContacts);
            this.refs.name.value = '';
            this.refs.age.value = '';
            this.refs.group.value = '';
            // console.log(this.state.newContacts);
        });
        event.preventDefault();
    }

    handleChange(e) {
        let title = e.target.value;
        this.props.changeTitle(title);
    }

    handleChangeClick(e) {
        let title = $("#abc").val();
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addContact.bind(this)}>
                    <div className="form-group">
                        <label>Student Name</label>
                        <input type="text" className="form-control" id="sname" placeholder="Student Name" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label>Group</label>
                        <select className="form-control" ref="group">
                            <option>-- Select --</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Age" ref="age"/>
                    </div>
                    <div className="clearfix"></div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

AddForm.propTypes = {
    addContact: PropTypes.func
};