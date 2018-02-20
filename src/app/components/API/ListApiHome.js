import React from "react";
import $ from 'jquery';

import {AddTodos} from './AddTodos';
import {Todos} from './Todos';

export class ListApiHome extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    getTodos() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos?_sort=title,views&_order=asc,desc',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function () {
                    //console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                // console.log(err);
            }
        });
    }

    componentWillMount() {
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }


    addTodos(todos) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            type: 'POST',
            data: todos,
            cache: false,
            success: function (data) {
                this.state.todos.push(data);
                // console.log(this.state.todos);
                this.setState({todos: this.state.todos});

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    handleAddTodos(todos) {
        this.addTodos(todos);
    }

    deleteTodos(id) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/' + id,
            dataType: 'json',
            type: 'DELETE',
            cache: false,
            success: function (data) {
            },
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    handleDeleteTodo(id) {
        var ask = window.confirm("Are you sure you want to delete this Todos?");
        if (ask) {
            let todos = this.state.todos;
            let index = todos.findIndex(x => x.id === id);
            todos.splice(index, 1);
            this.setState({todos: todos});
            this.deleteTodos(id);
        }
    }

    render() {
        return (
            <div>
                <div className="col-xs-4">
                    <AddTodos addProject={this.handleAddTodos.bind(this)}/>
                </div>
                <div className="clearfix"></div>
                <hr />
                <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)}/>
            </div>
        );
    }
}