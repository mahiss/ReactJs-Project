import React from "react";
import uuid from 'uuid';

export class AddTodos extends React.Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    // handleSubmit
    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required');
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value
                }
            }, function () {
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
                alert('New title is dded');
                this.refs.title.value = '';
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Add TODOS</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>TODOS Title</label>
                        <input type="text" ref="title" className="form-control"/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                    <br />
                </form>
            </div>
        );
    }
}