import React from "react";
import PropTypes from "prop-types";

import Row1 from "./Row1";
// import RowDetails from "./RowDetails";

export class ViewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contacts: props.contacts
        };
    }
    // deleteContacts
    deleteContacts(id) {
        this.props.onDelete(id);
    }
    // viewContacts
    viewContacts(id) {
        this.props.onView(id);
    }
    // updateSearch
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <input className="form-control"
                       placeholder="Search"
                       type="text" value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>
                <br/>
                <span>
                    {filteredContacts.map((contact)=> {
                        return <Row1 contacts={contact} key={contact.id} onDelete={this.deleteContacts.bind(this)}
                                     onView={this.viewContacts.bind(this)}/>
                    })}
                </span>
                <br/>
                {/*<RowDetails contacts={this.props.viewCont} onView={this.viewContacts.bind(this)}/>*/}
            </div>
        )
    }
}

ViewForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    onDelete: PropTypes.func,
    onView: PropTypes.func
};