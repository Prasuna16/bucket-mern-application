import React from "react"
import Header from "./header"
import TodoItem from "./TodoItem"
import axios from 'axios';
import { Link } from "react-router-dom";

class AllTodos extends React.Component {
    constructor() {
        super();
        this.empty = true;
        this.state = {
            todos: [],
            credentials: false,
            name: null,
            redirect: false,
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
    }
    handleChange(id) {
        for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i]._id === id) {
                var todo = {
                    user_id: this.state.todos[i].user_id,
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
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })
                return {
                    todos: updatedTodos
                }
            })
        }
    }
    todosList() {
        return this.state.todos.map(todo => {
            if (todo.user_id !== this.props.match.params.user) return null;
            this.empty = false;
            return <TodoItem key={todo._id} todo={todo} handleChange={this.handleChange} />
        })
    }
    render() {
        return (
            <div>
                {this.props.match.params.user ? <Header user={this.props.match.params.user} /> : <Header />}
                <div className="todo-list" style={{marginBottom: "60px"}}>
                    YOUR TODO LIST
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Link to={"/createtodo/" + this.props.match.params.user}><button className="bttn-add">+ADD A NEW TODO</button></Link>
                        <Link to={"/delete-all-todos/" + this.props.match.params.user}><button className="bttn-delete">-DELETE DONE TODOS</button></Link>
                    </div>
                    {this.todosList()}
                    {this.empty && <img src={require('./empty.png')} style={{width: "350px", height: "250px"}} alt="" />}
                    <br />
                </div>
            </div>
        )    
    }
}

export default AllTodos