import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
var FontAwesome = require('react-fontawesome');

class TodoItem extends React.Component {
    componentDidUpdate() {
        window.location.reload();
    }
   render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        // console.log('todo item ', this.props.todo);
        return (
            <div className="todo-item">
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.todo.isDone ? this.props.todo.isDone : false} 
                    onChange={() => this.props.handleChange(this.props.todo._id)}
                />
                <span style={this.props.todo.isDone ? completedStyle: null}>{this.props.todo.heading}</span>
            </div>
            <div>
                <Link to={"/edit-todo/" + this.props.todo._id}><FontAwesome name='pencil' className="todo-edit" style={{color: "gray"}} /></Link>
                <Link to={"/delete-todo/" + this.props.todo._id}><FontAwesome name='trash' style={{color: "red", marginLeft: "20px"}} className="todo-delete" /></Link>
            </div>
            </div>
        );
   }
}

export default TodoItem