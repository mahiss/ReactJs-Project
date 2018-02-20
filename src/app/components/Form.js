import React from "react";
import uuid from "uuid";

import {AddForm} from "./Form/AddForm";
import {ViewForm} from "./Form/ViewForm";

export class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: [{
                id: uuid.v4(),
                name: 'Sarith',
                age: '15',
                group: 'Group1'
            }, {
                id: uuid.v4(),
                name: 'Sonia',
                age: '17',
                group: 'Group2'
            }, {
                id: uuid.v4(),
                name: 'Anila',
                age: '12',
                group: 'Group3'
            }],
            viewCont: {}
        };
    }

    handleAddContacts(contact) {
        let contacts = this.state.contacts;
        contacts.push(contact);
        this.setState({contacts: contacts});
    }

    handleDeleteContacts(id) {
        let contacts = this.state.contacts;
        let index = contacts.findIndex(x => x.id === id);
        contacts.splice(index, 1);
        this.setState({contacts: contacts});
    }

    handleViewContacts(id) {
        // console.log(id);
        let contacts = this.state.contacts;
        let item = contacts.find(x => x.id === id);
        this.setState({viewCont: item});
    }

    render() {
        return (
            <div className="col-xs-12">
                <h1>Form</h1>
                <hr/>
                <div className="col-xs-4">
                    <AddForm addContacts={this.handleAddContacts.bind(this)}/>
                </div>
                <div className="col-xs-8">
                    <ViewForm contacts={this.state.contacts}
                              viewCont={this.state.viewCont}
                              onDelete={this.handleDeleteContacts.bind(this)}
                              onView={this.handleViewContacts.bind(this)}/>
                </div>
            </div>
        );
    }
}