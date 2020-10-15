import React from 'react'
import Header from './header'
import axios from 'axios'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class EditTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: null,
            description: null,
            dueDate: null,
            isDone: false,
            submitted: false,
            notFound: false,
        }
        this.onHeadingChange = this.onHeadingChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onHeadingChange(e) {
        this.setState({
            heading: e.target.value
        })
    }
    onDescChange(e) {
        this.setState({
            description: e.target.value
        })
    }
    onDateChange(e) {
        this.setState({
            dueDate: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const newTodo = {
            heading: this.state.heading,
            description: this.state.description,
            dueDate: this.state.dueDate,
            isDone: false,
        }
        axios.post('http://localhost:8080/edit-todo/' + this.props.match.params.id, newTodo)
            .then(res => {
                console.log(res.data)
                this.setState({
                    heading: null,
                    description: null,
                    dueDate: null,
                    isDone: false,
                    submitted: true,
                });
            });
    }
    componentDidMount() {
        axios.get('http://localhost:8080/gettodos/')
            .then(response => {
                var todos = response.data
                var flag = false
                for (let i = 0; i < todos.length; i++) {
                    if (todos[i]._id === this.props.match.params.id) {
                        console.log(todos[i]);
                        flag = true;
                        var datee = new Date(todos[i].dueDate).toISOString().slice(0,10);
                        this.setState({
                            heading: todos[i].heading,
                            description: todos[i].description,
                            dueDate: datee,
                        })
                    }
                }
                if (!flag) {
                    this.setState({
                        notFound: true
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        if (this.state.notFound || this.state.submitted) {
            return (
                <Redirect to="/todos" />
            )
        }
        return (
            <div>
                <Header />
                <form className="todo-box">
                    <h1 style={{lineHeight: "1px"}}>EDIT TODO</h1><Link to="/todos"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>Click here to view all todos</span></Link>
                    <h4>Todo</h4>
                    <input type="text" name="" className="todo-heading" onChange={this.onHeadingChange} value={this.state.heading} />
                    <h4>Due Date</h4>
                    <input type="date" name="" className="todo-date" onChange={this.onDateChange} value={this.state.dueDate} />
                    <h4>Description</h4>
                    <textarea name="" className="todo-area" cols="30" rows="10" onChange={this.onDescChange} value={this.state.description} ></textarea>
                    <button type="submit" className="todo-add-btn" onClick={this.handleSubmit}> Edit Todo </button>
                </form>
                <br /><br />
            </div>
        )
    }
}

export default EditTodo