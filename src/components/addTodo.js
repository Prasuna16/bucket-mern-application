import React from 'react'
import Header from './header'
import axios from 'axios'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: null,
            description: null,
            dueDate: null,
            isDone: false,
            submitted: false,
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
        if (!this.state.heading) {
            console.log("error - heading empty");
            return;
        }
        const newTodo = {
            heading: this.state.heading,
            description: this.state.description,
            dueDate: this.state.dueDate,
            isDone: false,
        }
        axios.post('http://localhost:8080/addtodo', newTodo)
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
    render() {
        if (this.state.submitted) {
            return (
                <Redirect to="/todos" />
            )
        }
        return (
            <div>
                <Header />
                <form className="todo-box">
                    <h1 style={{lineHeight: "1px"}}>CREATE NEW TODO</h1><Link to="/todos"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>Click here to view all todos</span></Link>
                    <h4>Todo</h4>
                    <input type="text" name="" className="todo-heading" onChange={this.onHeadingChange} />
                    <h4>Due Date</h4>
                    <input type="date" name="" className="todo-date" onChange={this.onDateChange} />
                    <h4>Description</h4>
                    <textarea name="" className="todo-area" cols="30" rows="10" onChange={this.onDescChange}></textarea>
                    <button type="submit" className="todo-add-btn" onClick={this.handleSubmit}> Add Todo </button>
                </form>
                <br /><br />
            </div>
        )
    }
}

export default CreateTodo