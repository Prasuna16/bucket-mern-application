import React from "react"
import Header from "./header"
import TodoItem from "./TodoItem"
import axios from 'axios';
import { Link } from "react-router-dom";

class AllTodos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8080/gettodos/')
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(this.props.match.params.mail);
    }
    handleChange(id) {
        console.log('todos', this.state.todos)
        for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i]._id === id) {
                var todo = {
                    heading: this.state.todos[i].heading,
                    description: this.state.todos[i].description,
                    dueDate: this.state.todos[i].dueDate,
                    isDone: !this.state.todos[i].isDone,
                }
                axios.post('http://localhost:8080/update/' + id, todo)
                    .then(res => console.log(res.data));
            }
            this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo => {
                    if (todo._id === id) {
                        console.log(todo.isDone, todo.heading)
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })
                console.log(updatedTodos)
                return {
                    todos: updatedTodos
                }
            })
        }
    }
    todosList() {
        return this.state.todos.map(todo => {
            return <TodoItem key={todo._id} todo={todo} handleChange={this.handleChange} />
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="todo-list" style={{marginBottom: "60px"}}>
                    YOUR TODO LIST
                    <Link to="/createtodo"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>+ADD A NEW TODO</span></Link>
                    {this.todosList()}
                    <br />
                    <Link to="/delete-all-todos"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>-DELETE ALL COMPLETED TODOS</span></Link>
                </div>
            </div>
        )    
    }
}

export default AllTodos